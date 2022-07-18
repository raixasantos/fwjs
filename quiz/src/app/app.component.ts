import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<div class="container-page">
    <div class="container-tabs">
      <app-tabs-form></app-tabs-form>
    </div>
    <div class="container-content">
      <app-tab [options]="buttonsOptions" [texts]="texts"></app-tab>
    </div>
  </div>
  `,
  styles: [
    `
    .App {
      text-align: center;
    }
    
    .container-page {
      display: flex;
      font-family: 'Lato', sans-serif;
    }
    
    .container-tabs,
    .container-content {
      margin: 30px;
    }
    `
  ]
})
export class AppComponent {
  buttonsOptions = ["Tab1", "Tab2", "Tab3", "Tab4"];
  texts = ["Texto da Tab1", "Texto da Tab2", "Texto da Tab3", "Texto da Tab4"];
}
