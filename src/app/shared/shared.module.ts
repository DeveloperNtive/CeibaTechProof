import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterUserByNamePipe } from '@shared/pipes/filter-user-by-name/filter-user-by-name.pipe';
import { NavBarComponent } from '@feature/users/nav-bar/nav-bar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FilterUserByNamePipe],
  exports: [FilterUserByNamePipe],
})
export class SharedModule {}
