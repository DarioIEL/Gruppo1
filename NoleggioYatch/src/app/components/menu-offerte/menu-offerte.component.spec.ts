import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOfferteComponent } from './menu-offerte.component';

describe('MenuOfferteComponent', () => {
  let component: MenuOfferteComponent;
  let fixture: ComponentFixture<MenuOfferteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuOfferteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOfferteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
