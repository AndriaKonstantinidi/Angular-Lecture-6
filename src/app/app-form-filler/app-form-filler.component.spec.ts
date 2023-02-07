import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormFillerComponent } from './app-form-filler.component';

describe('AppFormFillerComponent', () => {
  let component: AppFormFillerComponent;
  let fixture: ComponentFixture<AppFormFillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFormFillerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFormFillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
