import {AbstractControl, ValidatorFn} from '@angular/forms';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PasswordValidator {

  password = '';

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value: string = control.value;
      this.password = value;
      if (value && value.length < 8) {
        return {'passwordLength': true};
      }
      if (!/[A-Z]/.test(value)) {
        return {'passwordUpperCase': true};
      }
      if (!/\d/.test(value)) {
        return {'passwordDigit': true};
      }
      if (!/[^a-zA-Z0-9]/.test(value)) {
        return {'passwordSpecialChar': true};
      }
      return null;
    };
  }


  passwordConfirmation(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (value !== this.password){
        return {'passwordNotTheSame': true};
      }
      return null;
    }
  }
}
