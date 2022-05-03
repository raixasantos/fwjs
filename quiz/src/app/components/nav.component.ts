import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "app-nav",
    template: `<div>
        <button
            *ngFor="let option of options; let i = index"
            [ngClass]="{ selected: i === selection }"
            (click)="onSelection.emit(i)"
            >
            {{ option }}
        </button>
    </div>`,
    styles: [
        `
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    button {
        padding: 5px;
    }

    .selected {
        font-weight: bold;
        background-color: #aaa;
    }
    `
    ]
})
export class NavComponent {
    @Input() options!: string[];
    @Input() selection?: number;
    @Output() onSelection = new EventEmitter<number>();
}
