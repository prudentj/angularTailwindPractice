import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstPracticeAppletonComponent } from './first-practice-appleton/first-practice-appleton.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPracticeAppletonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
