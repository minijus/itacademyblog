import { AbstractControl, ValidationErrors } from '@angular/forms';

const BAD_WORDS = ['DANSKE', 'REVOLUT', 'SEB', 'LUMINOR'];
export const explicitValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const explicits = control.value
    .toUpperCase()
    .split(' ')
    .filter((word) => BAD_WORDS.includes(word));
  return explicits.length
    ? { explicitLanguage: { words: explicits.join(',') } }
    : null;
};
