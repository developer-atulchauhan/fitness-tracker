import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTranningComponent } from './current-tranning.component';

describe('CurrentTranningComponent', () => {
  let component: CurrentTranningComponent;
  let fixture: ComponentFixture<CurrentTranningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentTranningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTranningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
