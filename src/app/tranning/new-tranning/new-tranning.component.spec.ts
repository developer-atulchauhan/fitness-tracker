import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTranningComponent } from './new-tranning.component';

describe('NewTranningComponent', () => {
  let component: NewTranningComponent;
  let fixture: ComponentFixture<NewTranningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTranningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTranningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
