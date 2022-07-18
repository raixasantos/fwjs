import { Component, Input } from "@angular/core";

@Component({
  selector: "app-tab",
  template: ` <div class="container-tab">
    <h2>Conteúdo</h2>
    <div class="container-tabcontent">
      <app-nav [options]="options" [selection]="currentButton" (onSelection)="select($event)">
      </app-nav>
      <app-panel [text]="texts[currentButton]"> </app-panel>
    </div>
  </div>`,
  styles: [
    `
    .container-tab {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
        min-width: 400px;
    }
    
    .container-tabcontent {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
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
