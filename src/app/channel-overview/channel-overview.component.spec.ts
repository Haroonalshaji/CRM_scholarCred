import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelOverviewComponent } from './channel-overview.component';

describe('ChannelOverviewComponent', () => {
  let component: ChannelOverviewComponent;
  let fixture: ComponentFixture<ChannelOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChannelOverviewComponent]
    });
    fixture = TestBed.createComponent(ChannelOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
