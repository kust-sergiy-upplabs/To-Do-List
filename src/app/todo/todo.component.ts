import { Component, Input} from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent {
  @Input() events = [];
  inputText = '';
  isCheked = false;

  addTask(NameEl: HTMLInputElement) {
    this.events.push({
      id: this.events.length,
      name: NameEl.value,
      isCheked: this.isCheked
    });
  }
  onChecked(event) {
    this.events.forEach((el) => {
      if (el.name === event.target.innerHTML ) {
      el.isCheked = !el.isCheked;
      }
  });

  }
  onDelete(index) {
    this.events.splice(index, 1);
  }

}
