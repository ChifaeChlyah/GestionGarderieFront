import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAideEducComponent } from './add-aide-educ.component';

describe('AddComponent', () => {
  let component: AddAideEducComponent;
  let fixture: ComponentFixture<AddAideEducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAideEducComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAideEducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
