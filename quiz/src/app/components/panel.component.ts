import { Component, Input } from "@angular/core";

@Component({
  selector: "app-panel",
  template: `<div>{{ text }}</div>`,
  styles: [
    `
      div {
        text-align: center;
        border: 2px solid black;
        border-radius: 5px;
        padding: 50px 0;
      }
    `
  ]
})
export class PanelComponent {
  @Input() text?: string;
}
