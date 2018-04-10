import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Route } from '@angular/router';
import { CarouselSliderComponent } from '../app/layout/carousel-slider/carousel-slider.component'
import { FeatureBoxComponent } from './layout/feature-box/feature-box.component';
import { FooterComponent } from './layout/footer/footer.component';
import { UserAccountComponent } from './user/user-account/user-account.component';

const APP_ROUTERS : Route[] = [
    { 
        path: '', component: CarouselSliderComponent,
        children: [
            { path: '', component: FeatureBoxComponent, outlet: 'featureBoxChild' },
            { path: '', component: FooterComponent, outlet: 'footerChild' }
        ] 
    },
    {
        path: 'useraccount', component: UserAccountComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(APP_ROUTERS)
    ],

    exports: [
        RouterModule
    ]
})

export class AppRouterModule {}