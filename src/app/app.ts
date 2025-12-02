import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('cdqwdqwdwdr');

  numA = signal(5);
  numB = signal(10);
  updateA($event: any) {
    this.numA.set($event);
  }
  updateB($event: any) {
    this.numB.set($event);
  }
  suma = signal(0);

  sumatoria() {
    this.suma.set(this.numA() + this.numB());
  }
}
