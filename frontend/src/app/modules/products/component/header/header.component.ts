import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() category = new EventEmitter<string>();
  changeCategory(category: string) {
    this.category.emit(category);
    var buttons = document.getElementsByClassName('option-button'); 
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('selected');
    }
    
    var button = document.getElementById(category); 
    if (button !== null) { 
      button.classList.add('selected'); 
  }

  }

    

}
