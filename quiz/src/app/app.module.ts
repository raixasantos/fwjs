import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { QuizComponent } from './quiz.component';
import { ResultsComponent } from './results.component';
import { TabComponent } from './components/tab.component';
import { PanelComponent } from './components/panel.component';
import { NavComponent } from './components/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuizComponent,
    ResultsComponent,
    TabComponent, 
    PanelComponent, 
    NavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
