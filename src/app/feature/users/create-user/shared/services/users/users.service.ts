import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '@feature/users/interfaces/user.interface';
import { environment } from '@environments/environment';

/**
 * El nombre de las clases o métodos no se pueden cambiar
 * */
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {
    console.log(environment.API);
  }

  getUsers() {
    return new Promise((resolve, reject) => {
      this.httpClient.get<Users>(`${environment.API}/users?page=2`).subscribe({
        next: (res) => {
          resolve(res);
        },
        error: (err) => {
          reject(err);
        },
      });
    });
  }

  createUser(name: string, job: string) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .post<{ name: string; job: string }>(`${environment.API}/users`, { name, job })
        .subscribe({
          next: (res) => {
            resolve(res);
          },
          error: (err) => {
            reject(err);
          },
        });
    });
  }

  deleteUserForIndex(index: number) {
    return new Promise((resolve, reject) => {
      this.httpClient.delete<any>(`${environment.API}/users/${index}`).subscribe({
        next: (res) => {
          resolve(res);
        },
        error: (err) => {
          reject(err);
        },
      });
    });
  }
}
