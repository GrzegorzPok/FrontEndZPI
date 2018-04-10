import { RouterModule, Route } from "@angular/router";
import { NgModule } from "@angular/core";
import { CourseListComponent } from "./course-list/course-list.component";
import { NewCourseComponent } from "./new-course/new-course.component";

const COURSES_ROUTES : Route[] = [
    {
        path: 'courses-list', component: <any>CourseListComponent
    },
    {
        path: 'new-courses', component: <any>NewCourseComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(COURSES_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class CoursesRoutingModule {}