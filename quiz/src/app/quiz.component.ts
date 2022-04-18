import { Component } from '@angular/core';

@Component({
    selector: 'app-quiz',
    template: `
        <app-question 
            *ngIf="currentQuestion < questions.length; else ResultsBlock" 
            (onSelection)="selected(1)"
            [statement]="questions[currentQuestion].statement"
            [options]="questions[currentQuestion].options">
        </app-question>
        <ng-template #ResultsBlock>
            <app-results></app-results>
        </ng-template>
    `
})

export class QuizComponent {
    questions = [
        {
            statement: 'Primeira Questão',
            options: ['opção 1.1', 'opção 1.2', 'opção 1.3', 'opção 1.4']
        },
        {
            statement: 'Segunda Questão',
            options: ['opção 2.1', 'opção 2.2', 'opção 2.3', 'opção 2.4']
        }
    ]

    currentQuestion = 0
    
    selected(buttonIndex: number) {}
}