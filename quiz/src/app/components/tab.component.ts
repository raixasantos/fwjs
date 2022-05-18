import { Component, Input } from "@angular/core";

@Component({
  selector: "app-tab",
  template: ` <div>
    <app-nav [options]="options" [selection]="currentButton" (onSelection)="select($event)">
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
  @Input() options!: string[];
  @Input() texts!: string[];

  currentButton = 0;
  select(buttonIndex: number) {
    this.currentButton = buttonIndex;
  }
}
