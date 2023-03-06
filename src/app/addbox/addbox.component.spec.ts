import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddboxComponent } from './addbox.component';

describe('AddboxComponent', () => {
  let component: AddboxComponent;
  let fixture: ComponentFixture<AddboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
