import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<div><app-tab [options]="buttonsOptions" [texts]="texts"></app-tab></div>`,
  styles: [
    `
      div {
        width: 230px;
      }
    `
  ]
})
export class AppComponent {
  buttonsOptions = ["Tab1", "Tab2", "Tab3", "Tab4"];
  texts = ["Texto da Tab1", "Texto da Tab2", "Texto da Tab3", "Texto da Tab4"];
}
