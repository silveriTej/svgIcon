import { Component } from '@angular/core';
import { SvgIconComponent } from './svg-icon/svg-icon.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [SvgIconComponent]
})
export class AppComponent {
  title = 'Custom SVG Icon';
}
