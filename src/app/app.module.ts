import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {appRoutes} from './routes'
import { NgxGalleryModule } from '@kolkov/ngx-gallery'

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';
import {CityDetailComponent} from './city/city-detail/city-detail.component';

import { from } from 'rxjs';

@NgModule({
  declarations: [			
    AppComponent,
      ValueComponent,
      NavComponent,
      CityComponent,
      CityDetailComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
