// This file would not have been created by CLI tool (ng) if we
// ommited the "--routing" flag, (ng g m elements --routing)

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ElementsHomeComponent } from './elements-home/elements-home.component';

export { ElementsRoutingModule };

const routes: Routes = [
  {
    path: '', // If a module is lazy-loaded like in this case, then the path must be empty! If not, then the URL would need to match the path in app.component.ts and here, for example elements/elements.
    component: ElementsHomeComponent // This component will be shown in <router-outlet> in app.component.html
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
class ElementsRoutingModule { }
