import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [
    { id: 1, name: 'Rahul', marks: 80 },
    { id: 2, name: 'Priya', marks: 79.5 }
  ];

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(name: string, marks: number): void {
    const student: Student = {
      id: this.students.length + 1,
      name: name,
      marks: marks
    };

    this.students.push(student);
  }
}