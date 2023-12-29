package com.most.corejava;

public class BreakWithLabelDemo {

	public static void main(String[] args) {
		
		int arrayOfInts[][]= {
				{10,20,30,40},
				{50,60,70,80},
				{90,100,110,120}
		};
		
		int searchfor=90;
		
		int i;
		int j=0;
		boolean foundIt=false;
		
		search:
			for(i=0;i<arrayOfInts.length;i++)
			{
				for(j=0;j<arrayOfInts[i].length;j++)
				{
					
					if(arrayOfInts[i][j]==searchfor)
					{
						foundIt=true;
						break search;
						
					}
				}
			}
		if (foundIt) {
            System.out.println("Found " + searchfor + " at " + i + ", " + j);
        } else {
            System.out.println(searchfor + " not in the array");
        }

	}

}
