package com.most.corejava;

public class NestedForLoopDemo {

	public static void main(String[] args) {
		
		int row=5;
		for(int i=1;i<=row;i++)
		{
			for(int star=1;star<=i;star++)
			{
				System.out.println("*");
			}
			
			System.out.println();
		}

	}

}
