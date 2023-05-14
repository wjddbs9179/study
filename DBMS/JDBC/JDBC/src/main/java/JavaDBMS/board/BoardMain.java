package JavaDBMS.board;

import java.util.Scanner;

public class BoardMain {

    public static void main(String[] args) {
        BoardDB db = new BoardDB();
        int choice = 0;
        Scanner sc = new Scanner(System.in);

        while (true) {
            System.out.println("==========================================================");
            System.out.println("1.전체조회");
            System.out.println("2.제목검색");
            System.out.println("3.등록");
            System.out.println("4.수정");
            System.out.println("5.삭제");
            System.out.println("6.종료");
            System.out.println("==========================================================");
            System.out.print("메뉴 선택 : ");
            choice = Integer.parseInt(sc.nextLine());
            switch (choice) {
                case 1:
                    db.selectALL();
                    break;
                case 2:
                    System.out.print("제목입력 : ");
                    String title = sc.nextLine();
                    db.searchByTitle(title);
                    break;
                case 3:
                    System.out.print("번호 : ");
                    int no = Integer.parseInt(sc.nextLine());
                    System.out.print("제목 : ");
                    title = sc.nextLine();
                    System.out.print("내용 : ");
                    String contents = sc.nextLine();
                    System.out.print("비밀번호 : ");
                    String password = sc.nextLine();
                    System.out.print("등록일자 : ");
                    String write_date = sc.nextLine();
                    db.registry(no,title,contents,password,write_date);
                    break;
                case 4:
                    System.out.print("번호 : ");
                    no = Integer.parseInt(sc.nextLine());
                    System.out.print("내용 : ");
                    contents = sc.nextLine();
                    db.updateByNo(no,contents);
                    break;
                case 5:
                    System.out.print("번호 : ");
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
