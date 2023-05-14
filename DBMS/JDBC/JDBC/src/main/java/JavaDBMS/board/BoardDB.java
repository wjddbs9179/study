package JavaDBMS.board;

import java.sql.*;

public class BoardDB {

    private Connection con;
    private Statement st;
    private PreparedStatement pst;
    private ResultSet rs;

    public BoardDB() {
        String url = "jdbc:mysql://127.0.0.1:3306/practice";
        String id = "root";
        String pw = "1234";

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(url, id, pw);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void selectALL() {
        try {
            st = con.createStatement();
            rs = st.executeQuery("select * from board");
            System.out.println(" no |   title   |     contents    |   password   |  write_date ");
            while (rs.next()) {
                System.out.println("  " + rs.getInt("no") + " | " + rs.getString("title") + " |   " + rs.getString("contents") +
                        "  |   " + rs.getString("password") + "   |  " + rs.getDate("write_date"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            dbClose();
        }
    }

    public void findByTitle(String title) {
        try {
            pst = con.prepareStatement("select * from board where title=?");
            pst.setString(1, title);
            rs = pst.executeQuery();
            System.out.println(" no |   title   |     contents    |   password   |  write_date ");
            while (rs.next()) {
                System.out.println("  " + rs.getInt("no") + " | " + rs.getString("title") + " |   " + rs.getString("contents") +
                        "  |   " + rs.getString("password") + "   |  " + rs.getDate("write_date"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            dbClose();
        }
    }

    public void registry(int no, String title, String contents, String password, String writeDate) {
        try {
            pst = con.prepareStatement("insert into board values(?,?,?,?,?)");
            pst.setInt(1, no);
            pst.setString(2, title);
            pst.setString(3, contents);
            pst.setString(4, password);
            pst.setString(5, writeDate);
            pst.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            dbClose();
        }
    }

    public void updateByNo(int no, String contents) {
        try {
            pst = con.prepareStatement("update board set contents=? where no=?");
            pst.setString(1, contents);
            pst.setInt(2, no);
            pst.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            dbClose();
        }
    }

    public void deleteByNo(int no) {
        try {
            pst = con.prepareStatement("delete from board where no=?");
            pst.setInt(1, no);
            pst.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            dbClose();
        }
    }

    private void dbClose() {
        try {
            if (rs != null)
                rs.close();
            if (pst != null)
                pst.close();
            if (st != null)
                st.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    public void connectionClose(){
        try{
            if(con!=null)
                con.close();
        }catch (SQLException e){
            e.printStackTrace();
        }
    }
}
