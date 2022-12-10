import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentConnectionComponent } from './parent-connection.component';

describe('ParentConnectionComponent', () => {
  let component: ParentConnectionComponent;
  let fixture: ComponentFixture<ParentConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentConnectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
