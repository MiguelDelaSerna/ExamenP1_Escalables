import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-show-filter',
  standalone: true,
  templateUrl: './show-filter.component.html',
  styleUrl: './show-filter.component.css'
})
export class ShowFilterComponent {

  @Output() sortAlphabetically = new EventEmitter<void>();
  @Output() reverseOrder = new EventEmitter<void>();
  @Output() resetOrder = new EventEmitter<void>();

  onSortAlphabetically() {
    this.sortAlphabetically.emit();
  }

  onReverseOrder() {
    this.reverseOrder.emit();
  }
}
