import java.sql.*;

public class SimpleCRUD {

    public static void main(String[] args) {

        String url = "jdbc:mysql://localhost:3306/college";
        String user = "root";
        String pass = "root";

        try {
            Connection con = DriverManager.getConnection(url, user, pass);

            // CREATE
            PreparedStatement insert = con.prepareStatement(
                "INSERT INTO student VALUES (?, ?, ?)"
            );
            insert.setInt(1, 1);
            insert.setString(2, "Atty");
            insert.setInt(3, 85);
            insert.executeUpdate();
            System.out.println("Inserted");

            // READ
            Statement st = con.createStatement();
            ResultSet rs = st.executeQuery("SELECT * FROM student");

            while (rs.next()) {
                System.out.println(
                    rs.getInt("id") + " " +
                    rs.getString("name") + " " +
                    rs.getInt("marks")
                );
            }

            // UPDATE
            PreparedStatement update = con.prepareStatement(
                "UPDATE student SET marks=? WHERE id=?"
            );
            update.setInt(1, 90);
            update.setInt(2, 1);
            update.executeUpdate();
            System.out.println("Updated");

            // DELETE
            PreparedStatement delete = con.prepareStatement(
                "DELETE FROM student WHERE id=?"
            );
            delete.setInt(1, 1);
            delete.executeUpdate();
            System.out.println("Deleted");

            con.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}