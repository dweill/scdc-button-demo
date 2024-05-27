import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-stupid-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './stupid-button.component.html',
  styleUrl: './stupid-button.component.scss',
})
export class StupidButtonComponent {
  @Input() buttonText: string = '';

  @Output() clickEmitter = new EventEmitter<void>();

  onClick(): void {
    this.clickEmitter.emit();
  }
}
