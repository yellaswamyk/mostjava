package com.most.corejava;

public class ContinueDemo {

	public static void main(String[] args) {
		
		String searchMe="we are all members of"+"Santosh Technologies(M O S T)";
		
		int max=searchMe.length(); //50
		
		int numOfS=0;
		for (int i = 0; i < max; i++) {
            // interested only in S's
            if (searchMe.charAt(i) != 'S')
                continue;

            // process S's
            numOfS++;
        }
        System.out.println("Found " + numOfS + " S's in the string.");
	}

}
