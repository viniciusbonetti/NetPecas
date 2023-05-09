import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetAlertsControllerComponent } from './sweet-alerts-controller.component';

describe('SweetAlertsControllerComponent', () => {
  let component: SweetAlertsControllerComponent;
  let fixture: ComponentFixture<SweetAlertsControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SweetAlertsControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SweetAlertsControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
