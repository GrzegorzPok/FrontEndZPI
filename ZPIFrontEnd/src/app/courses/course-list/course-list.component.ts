import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course'

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses : Course[] = [
    {
      idCourse: 1,
      title: "Analiza matematyczna 1.1",
      description: "Materiał obejmuje całość kursu pierwszego semestru matematyki na studiach",
      idCategory: 2,
    },
    {
      idCourse: 2,
      title: "Analiza matematyczna 1.2",
      description: "Materiał obejmuje całość kursu drugiego semestru matematyki na studiach",
      idCategory: 2,
    },
    {
      idCourse: 3,
      title: "Analiza matematyczna 2.1",
      description: "Materiał obejmuje całość kursu trzeciego semestru matematyki na studiach",
      idCategory: 2,
    },
    {
      idCourse: 4,
      title: "Analiza matematyczna 2.2",
      description: "Materiał obejmuje całość kursu czwartego semestru matematyki na studiach",
      idCategory: 2,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
