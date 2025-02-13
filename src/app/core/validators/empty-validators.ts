import { AbstractControl, ValidationErrors } from '@angular/forms';
import {isDropdown} from "app/core/models/dropdonw-object.model";

export default function emptyInputValidator(
  control: AbstractControl
): ValidationErrors | null {
  const controlValue = control.getRawValue();
  if (typeof controlValue === 'string') {
    return !controlValue || controlValue.trim() === ''
      ? { invalidInput: true }
      : null;
  }
  if (isDropdown(controlValue)) {
    return controlValue.code.trim() === '' ? { invalidInput: true } : null;
  }
  return !controlValue ? { invalidInput: true } : null;
}
