import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ShellComponent } from 'src/app/components/shell/shell.component';

const routes: Routes = [
  { path: '', component: ShellComponent, children: 
    [
      { path: '', component: HomeComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
