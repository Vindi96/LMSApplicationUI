import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSecComponent } from './add-edit-sec.component';

describe('AddEditSecComponent', () => {
  let component: AddEditSecComponent;
  let fixture: ComponentFixture<AddEditSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
