import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpiControlComponent } from './rpi-control.component';

describe('RpiControlComponent', () => {
  let component: RpiControlComponent;
  let fixture: ComponentFixture<RpiControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpiControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpiControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
