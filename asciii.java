package basics;
import java.util.Scanner;
public class asciii {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a character:");
        char ch = sc.next().charAt(0);
        System.out.println((int)ch);
    }
}
