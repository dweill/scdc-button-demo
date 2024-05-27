import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ButtonType, buttonType } from '../../button-types';

@Component({
  selector: 'app-know-it-all-button',
  standalone: true,
  imports: [MatButtonModule, MatSnackBarModule, MatDialogModule],
  templateUrl: './do-it-all-button.component.html',
  styleUrl: './do-it-all-button.component.scss',
})
export class KnowItAllButtonComponent {
  @Input() buttonText: ButtonType | 'Text Left Blank' | '?' = 'Text Left Blank';
  counter = 0;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string): void {
    this._snackBar.open(message);
  }

  onClick(buttonText: ButtonType | 'Text Left Blank' | '?'): void {
    switch (buttonText) {
      case 'Text Left Blank':
        alert('I do nothing');
        break;
      case 'Save':
        this.openSnackBar('Saved!');
        break;
      case 'Begin':
        alert('Imagine I began something');
        break;
      case 'Cancel':
        this.openSnackBar('Cancelled!');
        break;
      case 'Decrement':
        this.counter--;
        this.openSnackBar(this.counter.toString());
        break;
      case 'End':
        alert('Imagine I ended something');
        break;
      case 'Increment':
        this.counter++;
        this.openSnackBar(this.counter.toString());
        break;
      case 'Login':
        alert('Imagine I open a login dialog');
        break;
      case 'Pause':
        alert('Imagine I paused something');
        break;
      case 'Play':
        alert('Imagine I played something');
        break;
      case 'Publish':
        this.openSnackBar('Published!');
        break;
      case 'Sign Up':
        alert('Imagine I route to a sign up page');
        break;
      case 'Submit':
        this.openSnackBar('Submitted!');
        break;
      case 'Upload':
        alert('Imagine I open a file uploader');
        break;
      default:
        const randomElement =
          buttonType[Math.floor(Math.random() * buttonType.length)];
        this.onClick(randomElement);
        break;
    }
  }
}
