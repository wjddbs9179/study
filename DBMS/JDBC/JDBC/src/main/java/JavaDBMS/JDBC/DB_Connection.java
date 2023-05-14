package JavaDBMS.JDBC;

import java.sql.*;

public class DB_Connection {
    private Connection con;
    private Statement st;
    private ResultSet rs;

    public DB_Connection() {
        String url = "jdbc:mysql://127.0.0.1:3306/practice";
        String id = "root";
        String pw = "1234";

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(url, id, pw);
            st = con.createStatement();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    public void search() {
        try {
            rs = st.executeQuery("select * from person");

            while (rs.next()) {
                String name = rs.getString("name");
                int age = rs.getInt("age");
                double height = rs.getDouble("height");
                System.out.println("name : " + name);
                System.out.println("age : " + age);
                System.out.println("height : " + height);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void searchByName(String name) {
        try {
            PreparedStatement pstm = con.prepareStatement("select * from person where name = ?");
            pstm.setString(1,name);
            rs = pstm.executeQuery();
            while (rs.next()) {
                System.out.println("name : " + rs.getString("name"));
                System.out.println("age : " + rs.getInt("age"));
                System.out.println("height : " + rs.getDouble("height"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void addPersonInfo(String name, int age, double height) {
        try {
            PreparedStatement pstm = con.prepareStatement("insert into person values(?,?,?)");
            pstm.setString(1,name);
            pstm.setInt(2,age);
            pstm.setDouble(3,height);
            pstm.executeUpdate();
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public void updatePersonInfo(String name, int age) {
        try{
            PreparedStatement pstm = con.prepareStatement("update person set age=? where name=?");
            pstm.setInt(1,age);
            pstm.setString(2,name);
            pstm.executeUpdate();
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public void deleteByName(String name) {
        try{
            PreparedStatement pstm = con.prepareStatement("delete from person where name=?");
            pstm.setString(1,name);
            pstm.executeUpdate();
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}