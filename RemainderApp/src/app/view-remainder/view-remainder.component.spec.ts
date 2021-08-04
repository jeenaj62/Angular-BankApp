import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRemainderComponent } from './view-remainder.component';

describe('ViewRemainderComponent', () => {
  let component: ViewRemainderComponent;
  let fixture: ComponentFixture<ViewRemainderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRemainderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRemainderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
