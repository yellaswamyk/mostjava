package com.most;

public class BankClinetApp {
	
	public static void main(String[] args)
	{
		BankApplication iciciBank=new  ICICIBankApp();
		
		iciciBank.openAccount();
		iciciBank.intrest();
		iciciBank.printRegNo();
		ICICIBankApp.yourTaxDetails();
		
	}

}
