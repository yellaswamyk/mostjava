package com.most;


//Design of the Application
public abstract class Application1 {

	
	public Application1()
	{
		System.out.println("Inside Application1 abstract class cons");
	}
	
	//optional instance/concreted method
	public void m1()
	{
		System.out.println("Inside M1 method");
	}
	
	
	public abstract void m2();
	
}
