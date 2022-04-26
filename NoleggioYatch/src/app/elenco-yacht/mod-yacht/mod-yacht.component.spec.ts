import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModYachtComponent } from './mod-yacht.component';

describe('ModYachtComponent', () => {
  let component: ModYachtComponent;
  let fixture: ComponentFixture<ModYachtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModYachtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModYachtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
