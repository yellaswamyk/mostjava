package com.most.corejava;

public class ContinueWithLabelDemo {

	public static void main(String[] args) {
	
		String searchMe = "You cannot believe in God until you believe in yourself.";
        String substring = "God";
        boolean foundIt = false;

        int max = searchMe.length() -substring.length();//53
        
        lable1:
        	for(int i=0;i<max;i++)
        	{
        		int n=substring.length();//3
        		
        		
        		int j = i;
                int k = 0;
                
                while (n-- != 0) {
                    if (searchMe.charAt(j++) != substring.charAt(k++)) {
                        continue lable1;
                    }
        	}
                foundIt = true;
                break lable1;
        	}
        System.out.println(foundIt ? "Found it" : "Didn't find it");

	}

}
