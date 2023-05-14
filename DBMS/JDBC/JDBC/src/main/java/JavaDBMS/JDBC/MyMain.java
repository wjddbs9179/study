package JavaDBMS.JDBC;

import java.util.Scanner;

public class MyMain{
    public static void main(String[] args) {
        DB_Connection db = new DB_Connection();
        Scanner sc = new Scanner(System.in);
        int choice = 0;

        while (true) {
            System.out.println("1.ALL Search");
            System.out.println("2.Name Search");
            System.out.println("3.Registry");
            System.out.println("4.Update");
            System.out.println("5.Delete");
            System.out.println("6.Close");
            System.out.print("Menu Choice : ");
            choice = Integer.parseInt(sc.nextLine());
            if (choice == 1) {
                db.search();
            } else if (choice == 2) {
                System.out.print("name input : ");
                String name = sc.nextLine();
                db.searchByName(name);
            } else if (choice == 3) {
                System.out.println("========== Registry =========");
                System.out.print("name input : ");
                String name = sc.nextLine();
                System.out.print("age input : ");
                int age = Integer.parseInt(sc.nextLine());
                System.out.print("height input : ");
                double height = Double.parseDouble(sc.nextLine());
                db.addPersonInfo(name, age, height);
            } else if (choice == 4) {
                System.out.print("name input : ");
                String name = sc.nextLine();
                System.out.print("age input : ");
                int age = Integer.parseInt(sc.nextLine());
                db.updatePersonInfo(name, age);
            } else if (choice == 5) {
                System.out.print("Delete name : ");
                String name = sc.nextLine();
                db.deleteByName(name);
            } else if (choice == 6) {
                break;
            }
        }
    }
}