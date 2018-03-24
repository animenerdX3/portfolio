package ArrayMath;

import java.util.Random;

public class DisplayingMultipleElements {

	public static void main(String[] args) {
		Random ran = new Random();
		
		int length = 10;
		
		int random[] = new int[length];
		
		int odd[] = new int [length];
		
		int even[] = new int [length];
		
		int doubling[] = new int [length];
		int doublingelement = ran.nextInt(4)+1;
		
		int addingten[] = new int [length];
		
		double power[] = new double [length];
		
		int minusfive[] = new int [length];
		
		
		System.out.println("Random Numbers:");//Text
		for(int i = 0; i < length; i++){
			random[i] = ran.nextInt(101);
		}
		for(int numbers: random){
			System.out.println(numbers);	
		}
		
		System.out.println();//Break		
		
		System.out.println("Odd Numbers:");//Text
			for(int i = 0; i < length; i++) {
				int element = ran.nextInt(1001);
					if(element % 2 != 0){
						odd[i] = element;
					}
					else{
						odd[i] = element+1;
					}
			}
			for (int numbers : odd)
				System.out.println(numbers);
		
		System.out.println();//Break
			
		System.out.println("Even Numbers:");//Text
			for(int i = 0; i < length; i++) {
				int element = ran.nextInt(1001);
					if(element % 2 == 0){
						even[i] = element;
					}
					else{
						even[i] = element+1;
					}
			}
			for (int numbers : even)
				System.out.println(numbers);
			
		System.out.println();//Break
		
		System.out.println("Doubling Values:");//Text
			for(int i = 0; i < length; i++) {
				doubling[i] = doublingelement;
				doublingelement = doublingelement *2;
			}
			
			for (int numbers : doubling)
				System.out.println(numbers);
			
			System.out.println();//Break
			
			System.out.println("Incrementing by 10:");//Text
			int element = ran.nextInt(1001);
			for(int i = 0; i < length; i++) {
				if(i != 0)
					element = element + 10;
					addingten[i] = element;
			}
			
			for (int numbers : addingten)
				System.out.println(numbers);
			
			System.out.println();//Break
			
			double num = ran.nextInt(2)+1;
			System.out.println("Power of 2:");//Text
			for(int i = 0; i < length; i++) {
					num = num * num;
					power[i] = num;
			}
			
			for (double numbers : power)
				System.out.println(numbers);
			
			System.out.println();//Break
			
			System.out.println("Decrementing by 5:");//Text
			int element2 = ran.nextInt(1001);
			for(int i = 0; i < length; i++) {
				element2 = element2 -5;
				minusfive[i] = element2;
			}
			for (int numbers : minusfive)
				System.out.println(numbers);
			
	}

}
