import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoYachtComponent } from './elenco-yacht.component';

describe('ElencoYachtComponent', () => {
  let component: ElencoYachtComponent;
  let fixture: ComponentFixture<ElencoYachtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElencoYachtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencoYachtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
