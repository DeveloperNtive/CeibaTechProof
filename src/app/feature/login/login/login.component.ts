import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';
  form: FormGroup;
  constructor(private readonly router: Router, private loginService: LoginService) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }
  
  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.redirectUsers();
    }
  }

  isValidForm() {
    if (this.form.valid) {
      let email: string = this.form.get('email').value;
      let password: string = this.form.get('password').value;
      this.loginService
        .login(email, password)
        .then((tokenRes: { token: string }) => {
          const { token } = tokenRes;
          localStorage.setItem('token', token);
          this.redirectUsers();
        })
        .catch((error) => {
          this.errorMessage = error;
        });
    }
  }
  /**
   * Este método no se puede modificar
   * */
  public redirectUsers(): void {
    this.router.navigateByUrl('/users/list');
  }
}
