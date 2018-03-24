import java.util.Scanner;

public class InputCalculationSumAverage {

	public static void main(String[] args) {
		
			// Declarations
		Scanner in = new Scanner (System.in);//Creating a scanner called "in".
		
		double total= 0;
		double number;
		int num = 0;
		
		//Read in values
		System.out.println("Welcome to the pointless sum and average machine!");//Text
		System.out.println("  ");//Break
		for (num = 1; num <= 10; num++ ) {
			System.out.println("Enter number #" + num + ":");//Text
			number= in.nextDouble();//Stores a double
			total = total + number;//Saves value in total var.
		}
		System.out.println("  ");//Break
		double average = total / 10;//Finds the average
		System.out.println("Thank you. Here is the sum: ");//Text
		System.out.println(total);//Displays sum
		System.out.println("Here is the average: ");//Text
		System.out.println(average);//Displays average
	}//end of main

}//end class
