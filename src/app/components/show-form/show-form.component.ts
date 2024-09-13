import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Show } from '../../interfaces/show.interface';

@Component({
  selector: 'app-show-form',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css']
})
export class ShowFormComponent {
  @Output() createElement: EventEmitter<Show> = new EventEmitter();
  @Input() showToEdit: Show | null = null;

  public formData: Show = {
    name: "",
    description: "",
    image: "",
    year: 0,
    episodes: 0,
    genre: "",
    likes: []
  };
isEditMode: any;

  ngOnChanges(): void {
    if (this.showToEdit) {
      this.formData = { ...this.showToEdit };
    }
  }

  public onFormSubmit(form: NgForm): void {
    if (form.valid) {
      const updatedShow: Show = { ...this.formData };
      this.createElement.emit(updatedShow);
      form.resetForm();
    }
  }
}