import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms' ;

import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { Component1Component } from './pages/component1/component1.component';
import { Component2Component } from './pages/component2/component2.component';
import { Component3Component } from './pages/component3/component3.component';


const appRoutes: Routes = [
  { path: 'Component1', component: Component1Component },
  { path: 'Welcome', component: WelcomeComponent } ,
  { path: 'Component2' , component: Component2Component}
];
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    Component1Component,
    Component2Component,
    Component3Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
