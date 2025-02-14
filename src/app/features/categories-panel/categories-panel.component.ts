import { Component , signal} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  CategoriesFormsService
} from "../categories-panel/categories-panel-services/categories-forms.service";
import {ChipsModule} from "primeng/chips";
import {DropdownModule} from "primeng/dropdown";
import {CategoryType} from "app/core/models/category-type.model";
import {CategoryModel} from "app/core/models/category.model";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    ChipsModule,
    DropdownModule,
    FormsModule,
  ],
  templateUrl: './categories-panel.component.html',
  styleUrl: './categories-panel.component.css'
})
export class CategoriesPanelComponent {
  categoriesList: CategoryModel[] = [];
  categoryTypesOptions = [
    { label: 'INCOME', value: CategoryType.INCOME },
    { label: 'EXPENSE', value: CategoryType.EXPENSE }
  ];
  selectedCategory?:CategoryType;

  constructor(public categoriesFormsService: CategoriesFormsService) {
  }

  saveCategory() {
    if (this.categoriesFormsService.$categoryCreationForm().valid) {
      const categoryName = this.categoriesFormsService.$categoryCreationForm().value.name;
      const categoryType = this.selectedCategory;
      if (!categoryName || !categoryType){
        return
      }

      this.categoriesList.push({id: 0, name: categoryName, loggedUserId: 0, categoryType: categoryType, subcategories:[] });
      console.log('Category Saved:', { name: categoryName, categoryType: categoryType });

      // Resetează formularul și selecția după salvare
      this.categoriesFormsService.$categoryCreationForm().reset();
      this.selectedCategory = undefined;
    }
  }

  createCategory(event: Event) {
    this.categoriesFormsService.createCategory(event);
  }

  cancelCreation(event: Event) {
    event.stopPropagation();
    this.categoriesFormsService.resetCreating();
    this.categoriesFormsService.$categoryCreationForm().reset();
    this.selectedCategory = undefined;
  }

  setCreating() {
    this.categoriesFormsService.$isCreating.set(true);
  }
}
