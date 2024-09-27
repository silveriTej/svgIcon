import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.css'],
  imports: [CommonModule] 
})
export class SvgIconComponent implements OnInit {
  @Input() title: string = '';
  @Input() iconPath: string = ''; 
  @Input() size: number = 24;    
  @Input() color: string = 'black'; 

  errorMessage: string = '';

  ngOnInit() {
    this.validateInputs();
  }

  private validateInputs() {
    if (!this.iconPath) {
      this.errorMessage = 'Error: iconPath is required.';
      this.iconPath = 'M0 0'; 
    } else {
      this.errorMessage = ''; 
    }

    if (this.size <= 0) {
      this.errorMessage = 'Error: Size must be a positive number.';
      this.size = 24; 
    }

    if (!this.isValidColor(this.color)) {
      this.errorMessage = 'Error: Invalid color value.';
      this.color = 'black';
    }
  }

  private isValidColor(color: string): boolean {
   
    const hexColorPattern = /^#[0-9A-F]{6}$/i;
    return hexColorPattern.test(color) || this.isNamedColor(color);
  }

  private isNamedColor(color: string): boolean {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    
    if (context) {
      context.fillStyle = color;
      return context.fillStyle !== 'rgba(0, 0, 0, 0)'; 
    }
     return false;
  }
}
