import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAideEducComponent } from './list-aide-educ.component';

describe('ListComponent', () => {
  let component: ListAideEducComponent;
  let fixture: ComponentFixture<ListAideEducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAideEducComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAideEducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
