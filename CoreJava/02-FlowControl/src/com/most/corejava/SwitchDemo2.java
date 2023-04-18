package com.most.corejava;

public class SwitchDemo2 {

	public static void main(String[] args) {
		int x=10;
	final int y=20;
		switch(x)
		{
		case 10:
		System.out.println("10");
		
		case 10+20:
			System.out.println("10");
		
		case y:
			System.out.println("20");
		
		}

	}

}
