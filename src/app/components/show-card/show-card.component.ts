import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-show-card',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent {
  @Output() deleteCard = new EventEmitter<string>();
  @Output() editCard = new EventEmitter<Show>();

  @Input() show: Show = {
    name: "",
    description: "",
    image: "",
    year: 0,
    episodes: 0,
    genre: "",
    likes: []
  };

  public isSelected = false;

  public changeSelected(): void {
    this.isSelected = !this.isSelected;
  }

  public onDeleteCard(): void {
    this.deleteCard.emit(this.show.name);
  }

  public onEditCard(): void {
    this.editCard.emit(this.show);
  }
}

