import { NgModule } from '@angular/core';

import { FeatureRoutingModule } from './feature-routing.module';
import { FormsModule } from '@angular/forms';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ListUsersComponent],
  imports: [
    CommonModule,
    FormsModule,
    FeatureRoutingModule,
    UsersModule,
    LoginModule,
    SharedModule,
  ],
})
export class FeatureModule {}
