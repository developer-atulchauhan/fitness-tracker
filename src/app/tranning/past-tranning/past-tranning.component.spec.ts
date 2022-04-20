import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastTranningComponent } from './past-tranning.component';

describe('PastTranningComponent', () => {
  let component: PastTranningComponent;
  let fixture: ComponentFixture<PastTranningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastTranningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastTranningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
