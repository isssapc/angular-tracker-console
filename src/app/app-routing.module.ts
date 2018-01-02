import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { ConsolaComponent } from './components/consola/consola.component';

const routes: Routes = [


  { path: '', redirectTo: 'consola', pathMatch: 'full' },
  {
    path: "", component: LayoutComponent,
    children: [

      { path: "consola", component: ConsolaComponent }

    ]
  },
  //not found
  { path: '**', redirectTo: 'consola' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
