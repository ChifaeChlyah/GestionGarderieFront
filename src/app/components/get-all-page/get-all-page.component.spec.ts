import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPageComponent } from './get-all-page.component';

describe('GetAllPageComponent', () => {
  let component: GetAllPageComponent;
  let fixture: ComponentFixture<GetAllPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
