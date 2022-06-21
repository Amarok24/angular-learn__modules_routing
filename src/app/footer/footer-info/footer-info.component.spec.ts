import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterInfoComponent } from './footer-info.component';

describe('ParcelsHomeComponent', () =>
{
  let component: FooterInfoComponent;
  let fixture: ComponentFixture<FooterInfoComponent>;

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      declarations: [FooterInfoComponent]
    })
      .compileComponents();
  });

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(FooterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
