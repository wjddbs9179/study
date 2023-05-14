package JavaDBMS.board;

import java.util.Scanner;

public class BoardMain {

    public static void main(String[] args) {
        BoardDB db = new BoardDB();
        int choice = 0;
        Scanner sc = new Scanner(System.in);

        while (true) {
            System.out.println("1.ALL Search");
            System.out.println("2.Title Search");
            System.out.println("3.Registry");
            System.out.println("4.Update");
            System.out.println("5.Delete");
            System.out.println("6.EXIT");
            System.out.print("Menu Choice : ");
            choice = Integer.parseInt(sc.nextLine());
            switch (choice) {
                case 1:
                    db.selectALL();
                    break;
                case 2:
                    System.out.print("Title Input : ");
                    String title = sc.nextLine();
                    db.findByTitle(title);
                    break;
                case 3:
                    System.out.print("no : ");
                    int no = Integer.parseInt(sc.nextLine());
                    System.out.print("title : ");
                    title = sc.nextLine();
                    System.out.print("contents : ");
                    String contents = sc.nextLine();
                    System.out.print("password : ");
                    String password = sc.nextLine();
                    System.out.print("write_date : ");
                    String write_date = sc.nextLine();
                    db.registry(no,title,contents,password,write_date);
                    break;
                case 4:
                    System.out.print("no : ");
                    no = Integer.parseInt(sc.nextLine());
                    System.out.print("contents : ");
                    contents = sc.nextLine();
                    db.updateByNo(no,contents);
                    break;
                case 5:
                    System.out.print("no : ");
                    no = Integer.parseInt(sc.nextLine());
                    db.deleteByNo(no);
                    break;
                default:
                    db.connectionClose();
                    System.exit(1);
            }
        }
    }
}
