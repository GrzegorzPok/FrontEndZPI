import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule, SlideComponent } from 'ngx-bootstrap/carousel';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './layout/page-header/page-header.component';
import { FeatureBoxComponent } from './layout/feature-box/feature-box.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CarouselSliderComponent } from './layout/carousel-slider/carousel-slider.component';
import { AppRouterModule } from './app-routing.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginModule } from './login/login.module';
import { CoursesModule } from './courses/courses.module';
import { CoursesRoutingModule } from './courses/courses-routing.module';
import { UserAccountRoutingModule } from './user/user-routing.module';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    CarouselSliderComponent,
    FeatureBoxComponent,
    FooterComponent
  ],
  imports: [
    CarouselModule.forRoot(),
    LoginModule,
    BrowserModule,
    AppRouterModule,
    LoginRoutingModule,
    CoursesModule,
    CoursesRoutingModule,
    UserModule,
    UserAccountRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
