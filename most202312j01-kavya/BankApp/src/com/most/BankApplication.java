package com.most;

//Design
public abstract class BankApplication {

		private int regNo;
		private final static int tax=3;
		
		public  BankApplication()
		{
			System.out.println("contructor of BankApp");
		}
		public BankApplication(int regNo)
		{
			System.out.println("Inside  BankApplication cons");
			this.regNo=regNo;
			
		}
		
		//Normal method
		public void printRegNo()
		{
			System.out.println("Registration No:"+regNo);
		}
		
		public abstract void openAccount();
		public abstract void intrest();
		
		public final static void yourTaxDetails()
		{
			System.out.println("You need to pay"+tax+"% of tax");
		}
}
