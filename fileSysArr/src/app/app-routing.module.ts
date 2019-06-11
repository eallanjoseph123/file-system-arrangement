import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalDirectoryComponent } from './local-directory/local-directory.component';

const routes: Routes = [
  {
    path:'',component:LocalDirectoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
