import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  /**
   * El nombre de este metodo no debería ser cambiado, pero de ser necesario podrías cambiar la firma
   * */
  public login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .post<{ token: string }>('https://reqres.in/api/login', {
          email,
          password,
        })
        .subscribe({
          next: (res) => {
            resolve(res);
          },
          error: (err) => {
            reject(err.error.error);
          },
        });
    });
  }
}
