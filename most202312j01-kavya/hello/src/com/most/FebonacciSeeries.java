package com.most;

public class FebonacciSeeries {
public static void main(String args [] ) {
int n1 = 0;
int n2 = 1;
int n3 = 0;
int  count = 10;
System.out.println(n1+""+n2);
for (int i = 1; i<=count; i++) {
	n3 = n1+n2;
	System.out.println(n3);
	n1 = n2;
	n2 = n3;
}
	
}
}
