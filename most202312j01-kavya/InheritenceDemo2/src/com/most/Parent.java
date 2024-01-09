package com.most;

public class Parent {
private int x;
private int y;
public Parent() {
	System.out.println("inside 0 argument constructor");
}
public Parent (int x, int y ) {
	System.out.println("inside 2 arguments constructor");
	this. x = x;
	this.y = y;
}
public void parentAssets() {
	System.out.println("value of x is "+x);
	System.out.println("value of y is "+y);
}

}
