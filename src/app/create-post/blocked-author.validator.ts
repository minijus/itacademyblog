import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostService } from '../post.service';
export function blockedAuthorValidator(postService: PostService) {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return postService
      .validateName(control.value)
      .pipe(map((valid) => (valid ? null : { blockedName: true })));
  };
}
