import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  { path: '', component: BlogComponent, children: [
    { path: '', redirectTo: 'machine-learning', pathMatch: 'full' },
    // { path: 'machine-learning', component: MachineComponent },
    // { path: 'frontend', component: FrontendComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class BlogRoutingModule { }
