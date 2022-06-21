// The folder with both files was created through CLI command:
// ng g m parcels  (ng generate module parcels)

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterInfoComponent } from './footer-info/footer-info.component';

export { FooterModule };

@NgModule({
  declarations: [
    FooterInfoComponent
  ],
  imports: [
    CommonModule
  ],
  // exports == list of components, pipes, directives that this module makes available to other modules. To be able to use html selector 'app-footer-info' in app.component.html, we have to export the component here and import it in app.module.ts:
  exports: [
    FooterInfoComponent
  ]
})
class FooterModule
{

}
