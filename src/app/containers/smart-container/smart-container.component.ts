import { Component } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { StupidButtonComponent } from '../../components/stupid-button/stupid-button.component';

@Component({
  selector: 'app-smart-container',
  standalone: true,
  imports: [StupidButtonComponent, MatSnackBarModule, MatIconModule, MatIcon],
  templateUrl: './smart-container.component.html',
  styleUrl: './smart-container.component.scss',
})
export class SmartContainerComponent {
  counter = 0;

  constructor(private _snackBar: MatSnackBar) {}

  imagine(message: string): void {
    alert(`Imagine ${message}`);
  }
  openSnackBar(message: string): void {
    this._snackBar.open(message);
  }

  incrementCount(incrementer = 1) {
    this.counter += incrementer;
  }

  decrementCount(decrementer = 1) {
    this.counter -= decrementer;
  }
}
