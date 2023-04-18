package com.most.corejava;

public class SwitchDemo4 {

	public static void main(String[] args) {
		
				for(int i=0;i<=5;i++)
					switch(i)  //outer
					{
					case 0:
						
						switch(i)  //innner
						{
						case 0:
						System.out.println("i is zero");
						break;
						}
							break;					
					
					case 1:
						System.out.println("i is one");
					
					default:
						System.out.println("i is greater than 5");
						
					}

			}

		


	}


