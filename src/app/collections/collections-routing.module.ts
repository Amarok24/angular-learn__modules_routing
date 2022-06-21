// This file would not have been created by CLI tool (ng) if we
// ommited the "--routing" flag, (ng g m collections --routing)

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectionsHomeComponent } from './collections-home/collections-home.component';

export { CollectionsRoutingModule };

// By default, NgModules are eagerly loaded, which means that as soon as the application loads, so do all the NgModules, whether or not they are immediately necessary.

const routes: Routes = [
  {
    path: 'collections', // When end of URL matches this path
    component: CollectionsHomeComponent // then this component will be shown in <router-outlet> in app.component.html
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
class CollectionsRoutingModule { }
