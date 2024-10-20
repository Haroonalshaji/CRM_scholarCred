import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffPerfComponent } from './staff-perf.component';

describe('StaffPerfComponent', () => {
  let component: StaffPerfComponent;
  let fixture: ComponentFixture<StaffPerfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffPerfComponent]
    });
    fixture = TestBed.createComponent(StaffPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
