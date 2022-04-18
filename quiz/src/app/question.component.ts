import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-question',
    template: `
        <h2> {{statement}} </h2>
        <button *ngFor="let option of options; let i = index"
                (click)="clicked(i)">
            {{option}}
        </button>
    `
})

export class QuestionComponent {
    @Input() statement!: string
    @Input() options!: string[]
    @Output() onSelection = new EventEmitter<number>()

    clicked(buttonIndex: number) {
        this.onSelection.emit(buttonIndex)
    }
}