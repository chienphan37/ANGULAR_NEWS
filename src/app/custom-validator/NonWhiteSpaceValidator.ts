import {AbstractControl, ValidationErrors} from "@angular/forms";

export function NonWhiteSpaceValidator(propertyName: string) {
  return (control: AbstractControl): ValidationErrors | null => {
    const {value: controlValue} = control;
    const isWhiteSpaceOnly = (controlValue || '').trim().length === 0;
    return isWhiteSpaceOnly ? {whiteSpace:  propertyName + ' is empty'} : null;
  }

}

