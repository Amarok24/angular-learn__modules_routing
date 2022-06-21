// This folder and all its files were generated through CLI command:
// ng g component footer/FooterInfo

import { Component, VERSION } from '@angular/core';

export { FooterInfoComponent };

@Component({
  selector: 'app-footer-info',
  template: `
    Some data from FooterInfoComponent class:
    <div>{{ angularVersion }}</div>
  `,
  styleUrls: ['./footer-info.component.scss']
})
class FooterInfoComponent
{
  private _angularVersion: string = `Angular version ${VERSION.full}`;

  constructor() { }

  get angularVersion(): string
  {
    return this._angularVersion;
  }
}
