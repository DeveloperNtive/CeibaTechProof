import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss'],
})
export class HomeUserComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  goToPage(route: string) {
    switch (route) {
      case '/create':
        this.router.navigateByUrl(`/users${route}`);
        break;
      case '/list':
        this.router.navigateByUrl(`/users${route}`);
        break;

      default:
        break;
    }
  }
}
