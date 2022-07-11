import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstPracticeAbletonComponent } from './first-practice-ableton/first-practice-ableton.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPracticeAbletonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
