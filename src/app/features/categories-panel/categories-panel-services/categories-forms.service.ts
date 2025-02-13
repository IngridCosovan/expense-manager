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
}
