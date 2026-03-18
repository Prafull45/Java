package basics;

import java.util.Scanner;

public class areofCirle {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        System.out.print("Enter a radius:");
        double r= sc.nextDouble();

        double a = 3.14*r*r;
        System.out.print("Area of Cirle:");
        System.out.print(a);
    }
}

