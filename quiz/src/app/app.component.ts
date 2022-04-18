import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-quiz></app-quiz>
  `,
  styles: [`
    h1 {
      text-align: center;
    }
  `]
})
export class AppComponent {
  title = 'quiz';
}
