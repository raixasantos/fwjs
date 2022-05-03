import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<div><app-tab></app-tab></div>`,
  styles: [
    `
      div {
        width: 230px;
      }
    `
  ]
})
export class AppComponent {}
