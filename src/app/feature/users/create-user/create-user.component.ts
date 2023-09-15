import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  @ViewChild('CreateUser', { static: true })
  createUserButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('createUserNameError', { static: true })
  createUserNameError!: ElementRef<HTMLButtonElement>;
  @ViewChild('createUserJobError', { static: true })
  createUserJobError!: ElementRef<HTMLButtonElement>;

  form: FormGroup;
  nameErrorMessage = 'Name is required';
  jobErrorMessage = 'Job is required';

  constructor(private readonly router: Router, private renderer: Renderer2) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      job: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
  }

  checkButtonAvaliabilty() {
    if (this.form.valid) {
      this.createUserNameError.nativeElement.remove();
      this.createUserJobError.nativeElement.remove();
      if (this.createUserButton.nativeElement.attributes['disabled']) {
        this.renderer.removeAttribute(this.createUserButton.nativeElement, 'disabled');
      }
    } else {
      if (
        this.form.get('name').errors?.required &&
        (this.form.get('name').touched || this.form.get('name').dirty)
      ) {
        this.nameErrorMessage = 'Name is required';
      }
      if (
        this.form.get('job').errors?.required &&
        (this.form.get('job').touched || this.form.get('job').dirty)
      ) {
        this.jobErrorMessage = 'Job is required';
      }
      this.renderer.setAttribute(this.createUserButton.nativeElement, 'disabled', 'true');
    }
  }

  /**
   * Este método no se puede modificar
   * */
  public redirectToListUsers(): void {
    this.router.navigateByUrl('/users/list');
  }
}
