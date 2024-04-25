import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-auth',
  standalone: true,
  imports: [],
  templateUrl: './button-auth.component.html',
  styleUrl: './button-auth.component.css'
})
export class ButtonAuthComponent {
  @Input() text: string = '';
  @Input() disabled: boolean = true;
}
