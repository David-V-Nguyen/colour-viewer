import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourWheelComponent } from './colour-wheel.component';

describe('ColourWheelComponent', () => {
  let component: ColourWheelComponent;
  let fixture: ComponentFixture<ColourWheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColourWheelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColourWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
