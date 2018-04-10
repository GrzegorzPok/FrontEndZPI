import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { FilterEngineComponent } from './filter-engine/filter-engine.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { NewPartComponent } from './new-part/new-part.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CourseListComponent],
  declarations: [CourseListComponent, FilterEngineComponent, NewCourseComponent, NewPartComponent]
})
export class CoursesModule { }
