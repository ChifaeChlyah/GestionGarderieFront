import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnfantsComponent } from './list-enfants.component';

describe('GetAllPageComponent', () => {
  let component: ListEnfantsComponent;
  let fixture: ComponentFixture<ListEnfantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEnfantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEnfantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
