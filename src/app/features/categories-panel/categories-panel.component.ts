import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {ReactiveFormsModule} from "@angular/forms";
import {
  CategoriesFormsService
} from "../categories-panel/categories-panel-services/categories-forms.service";


@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    ButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './categories-panel.component.html',
  styleUrl: './categories-panel.component.css'
})
export class CategoriesPanelComponent {
  constructor(public categoriesFormsService: CategoriesFormsService) {
  }

  createCategory(event: Event) {
    // this.categoriesFormsService.createCategory(event);
  }
}
