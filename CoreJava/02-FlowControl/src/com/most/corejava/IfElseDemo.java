package com.most.corejava;

public class IfElseDemo {

	public static void main(String[] args) {
		int month=13;
		String season;
		
		if(month==12 || month==1 || month==2)
		{
			season="winter";
			
		}
		else if(month==3||month==4||month==5)
		{
			season="Spring";
			
		}
		
		else if(month==6||month==7||month==8)
		{
			season="Summer";
			
		}
		
		else if(month==9||month==10||month==11)
		{
			season="Autum";
			
		}
		else
			season="wrong name";
			
		System.out.println("September is in the "+season);
			
			
	}

}
