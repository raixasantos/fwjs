import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabComponent } from './components/tab.component';
import { PanelComponent } from './components/panel.component';
import { NavComponent } from './components/nav.component';
import { TabsFormComponent } from './components/tabs-form.component';
@NgModule({
  declarations: [
    AppComponent,
    TabComponent, 
    PanelComponent, 
    NavComponent,
    TabsFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
