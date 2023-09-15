import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Output()
  goToPage = new EventEmitter<string>();

  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  goToCreateUsers() {
    this.goToPage.emit('/create')
  }
  goToListUsers() {
    this.goToPage.emit('/list')
  }

  /**
   * Este método no se puede modificar
   * */
  public logout(): void {
    this.router.navigateByUrl('/login');
    localStorage.removeItem('token');
  }
}
