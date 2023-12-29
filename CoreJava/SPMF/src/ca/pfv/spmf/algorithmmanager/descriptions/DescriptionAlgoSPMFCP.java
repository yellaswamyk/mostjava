package ca.pfv.spmf.algorithmmanager.descriptions;

import java.io.IOException;

import ca.pfv.spmf.algorithmmanager.DescriptionOfAlgorithm;
import ca.pfv.spmf.algorithmmanager.DescriptionOfParameter;
/* This file is copyright (c) 2008-2016 Philippe Fournier-Viger
* 
* This file is part of the SPMF DATA MINING SOFTWARE
* (http://www.philippe-fournier-viger.com/spmf).
* 
* SPMF is free software: you can redistribute it and/or modify it under the
* terms of the GNU General Public License as published by the Free Software
* Foundation, either version 3 of the License, or (at your option) any later
* version.
* 
* SPMF is distributed in the hope that it will be useful, but WITHOUT ANY
* WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
* A PARTICULAR PURPOSE. See the GNU General Public License for more details.
* You should have received a copy of the GNU General Public License along with
* SPMF. If not, see <http://www.gnu.org/licenses/>.
*/
import ca.pfv.spmf.algorithms.sequentialpatterns.spade_spam_AGP.idLists.creators.IdListCreator;
import ca.pfv.spmf.algorithms.sequentialpatterns.spade_spam_AGP.idLists.creators.IdListCreator_FatBitmap;
import ca.pfv.spmf.algorithms.sequentialpatterns.spm_fc_p.AlgoSPM_FC_P;
import ca.pfv.spmf.algorithms.sequentialpatterns.spm_fc_p.items.SequenceDatabase;
import ca.pfv.spmf.algorithms.sequentialpatterns.spm_fc_p.items.creators.AbstractionCreator;
import ca.pfv.spmf.algorithms.sequentialpatterns.spm_fc_p.items.creators.AbstractionCreator_Qualitative;

/**
 * This class describes the SPM-FC-P algorithm parameters. It is designed to be
 * used by the graphical and command line interface.
 * 
 * @see AlgoSPM_FC_P
 * @author Philippe Fournier-Viger
 */
public class DescriptionAlgoSPMFCP extends DescriptionOfAlgorithm {

	/**
	 * Default constructor
	 */
	public DescriptionAlgoSPMFCP() {
	}

	@Override
	public String getName() {
		return "SPM_FC_P";
	}

	@Override
	public String getAlgorithmCategory() {
		return "SEQUENTIAL PATTERN MINING";
	}

	@Override
	public String getURLOfDocumentation() {
		return "http://www.philippe-fournier-viger.com/spmf/SPM_FC_P_mooc.php";
	}

	@Override
	public void runAlgorithm(String[] parameters, String inputFile, String outputFile) throws IOException {

		double minSupport = getParamAsDouble(parameters[0]);

		double alpha = getParamAsDouble(parameters[1]);
		double beta = getParamAsDouble(parameters[2]);
		double gamma = getParamAsDouble(parameters[3]);

		boolean outputSeqIdentifiers = false;
		if (parameters.length >= 5 && "".equals(parameters[4]) == false) {
			outputSeqIdentifiers = getParamAsBoolean(parameters[4]);
		}

//		// Parameters of the algorithm
//		support = 0.08;
//		alpha = 0.5 / 3.0;
//		beta = 1.5 / 3.0;
//		gamma = 1.0 / 3.0;
		boolean keepPatterns = true;
		// boolean verbose = false;
		boolean verbose = true;

		// Read the database
		AbstractionCreator abstractionCreator = AbstractionCreator_Qualitative.getInstance();
		SequenceDatabase sequenceDatabase = new SequenceDatabase(abstractionCreator);
		sequenceDatabase.loadFile(inputFile, minSupport, alpha, beta, gamma);

		// Run the algorithm
		AlgoSPM_FC_P algorithm = new AlgoSPM_FC_P(minSupport, abstractionCreator);
		algorithm.runAlgorithm(sequenceDatabase, keepPatterns, verbose, outputFile, outputSeqIdentifiers,
				minSupport, alpha, beta, gamma);
		System.out.println(algorithm.printsimpleStatistics());
	}

	@Override
	public DescriptionOfParameter[] getParametersDescription() {

		DescriptionOfParameter[] parameters = new DescriptionOfParameter[5];
		parameters[0] = new DescriptionOfParameter("Minsup (%)", "(e.g. 0.08 or 8%)", Double.class, false);
		parameters[1] = new DescriptionOfParameter("Alpha", "(e.g. 0.1666)", Double.class, false);
		parameters[2] = new DescriptionOfParameter("Beta", "(e.g. 0.5)", Double.class, false);
		parameters[3] = new DescriptionOfParameter("Gamma", "(e.g. 0.33)", Double.class, false);
		parameters[4] = new DescriptionOfParameter("Show sequence ids?", "(default: false)", Boolean.class, true);
		return parameters;
	}

	@Override
	public String getImplementationAuthorNames() {
		return "Wei Song et al.";
	}

	@Override
	public String[] getInputFileTypes() {
		return new String[] { "Database of instances", "Sequence database", "Time-extended sequence database" };
	}

	@Override
	public String[] getOutputFileTypes() {
		return new String[] { "Patterns", "Sequential patterns", "Frequent sequential patterns" };
	}

}
