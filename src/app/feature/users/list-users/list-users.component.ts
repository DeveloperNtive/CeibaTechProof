import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../create-user/shared/services/users/users.service';
import { Datum, Users } from '../interfaces/user.interface';

@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  @ViewChild('tbody', { static: true })
  tbodyElement!: ElementRef<HTMLTableElement>;
  users = [];
  usersToFilter = [];
  filtro = '';

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService
      .getUsers()
      .then((res: Users) => {
        this.users = res.data;
        this.usersToFilter = this.users;
      })
      .catch((err) => {});
  }

  clearInput() {
    this.filtro = '';
  }

  deleteChildrens() {
    const hijos = this.tbodyElement.nativeElement.children;

    for (let i = hijos.length - 1; i >= 0; i--) {
      const hijo = hijos[i];
      this.tbodyElement.nativeElement.removeChild(hijo);
    }
  }

  async deleteUserByIndex(id: number) {
    try {
      await this.usersService.deleteUserForIndex(id);
      this.getUsers();
    } catch (error) {}
  }
}
