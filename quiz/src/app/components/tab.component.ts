import { Component } from "@angular/core";

@Component({
  selector: "app-tab",
  template: ` <div>
    <app-nav [options]="buttonsOptions" [selection]="currentButton" (onSelection)="select($event)">
    </app-nav>
    <app-panel [text]="texts[currentButton]"> </app-panel>
  </div>`,
  styles: [
    `
      div {
        display: flex;
        flex-direction: column;
      }
    `
  ]
})
export class TabComponent {
  buttonsOptions = ["Tab1", "Tab2", "Tab3", "Tab4"];
  texts = ["Texto da Tab1", "Texto da Tab2", "Texto da Tab3", "Texto da Tab4"];
  currentButton = 0;
  select(buttonIndex: number) {
    this.currentButton = buttonIndex;
  }
}
