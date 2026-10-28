import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../student-service.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-student',
  imports: [FormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class StudentComponent {

  students: Student[] = [];

  studentName = '';
  marks: number | null = null;
  searchText = '';

  constructor(private studentService: StudentService) {
    this.students = this.studentService.getStudents();
  }

  addStudent(): void {
    if (this.studentName && this.marks !== null) {

      this.studentService.addStudent(
        this.studentName,
        this.marks
      );

      this.students = this.studentService.getStudents();

      this.studentName = '';
      this.marks = null;
    }
  }

  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id);
    this.students = this.studentService.getStudents();
  }

  get filteredStudents(): Student[] {
    return this.students.filter(student =>
      student.name
        .toLowerCase()
        .includes(this.searchText.toLowerCase())
    );
  }

  get average(): number {
    if (this.students.length === 0) {
      return 0;
    }

    const total = this.students.reduce(
      (sum, student) => sum + student.marks,
      0
    );

    return total / this.students.length;
  }
}