package basics;

import java.util.Scanner;

public class SUMOFtwonumber {
    public static void main(String[]args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter first number:");
        int n = sc.nextInt();
        System.out.println("Enter secomd number: ");
        int m = sc.nextInt();
        int sum = n+m;
        System.out.println("The sum of "+n+ "and Sum of "+m+"is"+sum);

    }
}
