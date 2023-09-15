import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { CommonModule } from '@angular/common';
import { HomeUserComponent } from './home-user/home-user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './create-user/shared/services/users/users.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeUserComponent, NavBarComponent, CreateUserComponent],
  imports: [CommonModule, UsersRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [UsersService],
})
export class UsersModule {}
