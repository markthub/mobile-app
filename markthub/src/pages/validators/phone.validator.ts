import { AbstractControl, ValidatorFn } from '@angular/forms';
import * as libphonenumber from 'google-libphonenumber';

export class PhoneValidator {

  // Inspired on: https://github.com/yuyang041060120/ng2-validation/blob/master/src/equal-to/validator.ts
  static validCountryPhone = (): ValidatorFn => {
    let subscribe = false;
    return (phoneControl: AbstractControl): {[key: string]: boolean} => {

      if (!subscribe) {
        subscribe = true;        
      }

      if (phoneControl.value !== '') {
        try {
          const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
          const phoneNumber = '' + phoneControl.value + '';
          const pNumber = phoneUtil.parseAndKeepRawInput(phoneNumber, 'NL');
          const isValidNumber = phoneUtil.isValidNumber(pNumber);

          if (isValidNumber) {
            return undefined;
          }
        } catch (e) {
          console.log(e);
          return {
            validCountryPhone: true
          };
        }

        return {
          validCountryPhone: true
        };
      } else {
        return undefined;
      }
    };
  }
}