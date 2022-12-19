import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitieComponent } from './activitie.component';

describe('ActivitieComponent', () => {
  let component: ActivitieComponent;
  let fixture: ComponentFixture<ActivitieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
