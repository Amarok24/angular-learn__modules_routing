// The folder with both files was created through CLI command:
// ng g m collections --routing  (ng generate module collections --routing)

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';

export { CollectionsModule };


@NgModule({
  declarations: [
    CollectionsHomeComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ],
  exports: [ ]
})
class CollectionsModule { }
