package com.most.corejava;

public class SwitchDemo {

	public static void main(String[] args) {
		
		char color='w';
		
		switch(color)
		{
		case 'r':
			System.out.println("RED");
			break;
			
		case 'g':
			System.out.println("Green");
			break;
			
		case 'b':
			System.out.println("Blue");
			break;
			
		default:
			System.out.println("Please select valid R,G,B color");
		
		}
		

	}

}
