package com.most;

public class PassObjectTest {

	public static void main(String[] args) {
		//Take 2 Employee class objects.
		
		Employee obj1=new Employee(1215);
		
		Employee obj2=new Employee(1216);
		
		//create CheckSwap class object;
		CheckSwap obj=new CheckSwap();
		
		//Display Data before calling
		
		System.out.println(obj1.id+"\t"+obj2.id);
		
		//call the swap and pass Employee class objects
		
		obj.swap(obj1, obj2);
		//display data after calling
		
		System.out.println(obj1.id+"\t"+obj2.id);
		
	}

}
