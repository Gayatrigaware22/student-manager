import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [
    { id: 1, name: 'Rahul', marks: 78 },
    { id: 2, name: 'Priya', marks: 92 },
    { id: 3, name: 'Aman', marks: 67 },
    { id: 4, name: 'Neha', marks: 82 }
  ];

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(name: string, marks: number): void {
    const newStudent: Student = {
      id: this.students.length + 1,
      name: name,
      marks: marks
    };

    this.students.push(newStudent);
  }

  deleteStudent(id: number): void {
    this.students = this.students.filter(
      student => student.id !== id
    );
  }
}