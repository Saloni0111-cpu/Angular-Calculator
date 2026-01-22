import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  display: string = '';

  input(value: string) {
    this.display += value;
  }

  clear() {
      this.display = '';
  }

  delete() {
    this.display = this.display.slice(0,-1);
  }

  calculate() {
    try {
      this.display = eval(this.display);
    } catch(error) {
      this.display = 'Error';
    }
  }
}
