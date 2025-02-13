import {Injectable, signal} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import emptyInputValidator from "app/core/validators/empty-validators";

@Injectable({
  providedIn: 'root'
})
export class CategoriesFormsService {

  constructor() { }

  $categoryCreationForm = signal(
    new FormGroup({
      title: new FormControl<string | null>(null, emptyInputValidator),
    })
  );
  $isCreating = signal(false);

  createCategory(event: Event) {
    event.stopPropagation();
    if (this.$categoryCreationForm().invalid) {
      return;
    }
    // this.categoryPanelService.createNewRC(this.$categoryCreationForm());

    this.resetCreating();
  }

  resetCreating() {
    this.$isCreating.set(false);
    this.$categoryCreationForm().reset();
  }
}
