import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KnowItAllButtonComponent } from './components/do-it-all-button/do-it-all-button.component';
import { SmartContainerComponent } from './containers/smart-container/smart-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KnowItAllButtonComponent, SmartContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  smartComponent = true;
}
