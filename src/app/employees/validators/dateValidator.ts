import { AbstractControl, ValidatorFn } from '@angular/forms';
import { computeAge } from '../../app.util';

export function minDate(date: Date): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const value = control.value + ' 00:00:00';
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);

    if (value && new Date(value).valueOf() < date.valueOf()) {
      console.log('minDate control.value' + new Date(value).valueOf() + ' date:' + date.valueOf());
      return { 'minDate': { value: value, min: date.toLocaleDateString() } };
    }
    return null;
  };
}

export function maxDate(date: Date): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const value = control.value + ' 00:00:00';
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);

    if (value && new Date(value).valueOf() > date.valueOf()) {
      console.log('maxDate control.value' + new Date(value).valueOf() + ' date:' + date.valueOf());
      return { 'maxDate': { value: value, max: date.toLocaleDateString() } };
    }
    return null;
  };
}
// tslint:disable-next-line:no-shadowed-variable
export function minAge(minAge: number) {
  return (control: AbstractControl): { [key: string]: any } => {
    const value = control.value;

    if (value && computeAge(new Date(value)) < minAge) {
      console.log('minAge control.value' + computeAge(new Date(value)));
      return { 'minAge': { value: value, min: minAge } };
    }
    return null;
  };
}

// tslint:disable-next-line:no-shadowed-variable
export function maxAge(maxAge: number) {
  return (control: AbstractControl): { [key: string]: any } => {
    const value = control.value;

    if (value && computeAge(new Date(value)) > maxAge) {
      console.log('maxAge control.value' + computeAge(new Date(value)));
      return { 'maxAge': { value: value, max: maxAge } };
    }
    return null;
  };
}
