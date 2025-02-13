import {Injectable} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {createCategoryContainer} from "app/core/models/category.model";
import {SubcategoryModel} from "app/core/models/subcategory.model";

@Injectable({
  providedIn: 'root',
})

export class CategoryPanelService {
constructor() {
}

  createNewCategory(categoryCreationForm: FormGroup) {
    const categoryName = categoryCreationForm.controls['name'].getRawValue().trim();
    const newCategory = createCategoryContainer(0, categoryName, 1, '', [] as SubcategoryModel[]);

    // this.rcsManagementFacade.createRC(newRc, this.selectedDoc);
  }
}
