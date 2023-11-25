import java.time.LocalDate;
import java.time.Period;

public class Student {
    private String name;
    private String matricNumber;
    private LocalDate dateOfBirth;
    private String department;

    // Constructor
    public Student(String name, String matricNumber, LocalDate dateOfBirth, String department) {
        this.name = name;
        this.matricNumber = matricNumber;
        this.dateOfBirth = dateOfBirth;
        this.department = department;
    }

    // Getter methods
    public String getName() {
        return name;
    }

    public String getMatricNumber() {
        return matricNumber;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public String getDepartment() {
        return department;
    }

    // Method to calculate age
    public int calculateAge() {
        LocalDate currentDate = LocalDate.now();
        Period period = Period.between(dateOfBirth, currentDate);
        return period.getYears();
    }

    public static void main(String[] args) {
        // Example usage
        LocalDate dob = LocalDate.of(2000, 5, 15);
        Student student = new Student("John Doe", "123456", dob, "Computer Science");

        System.out.println("Name: " + student.getName());
        System.out.println("Matric Number: " + student.getMatricNumber());
        System.out.println("Date of Birth: " + student.getDateOfBirth());
        System.out.println("Department: " + student.getDepartment());
        System.out.println("Age: " + student.calculateAge() + " years");
    }
}
