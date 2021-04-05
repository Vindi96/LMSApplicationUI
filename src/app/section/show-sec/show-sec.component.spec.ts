import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSecComponent } from './show-sec.component';

describe('ShowSecComponent', () => {
  let component: ShowSecComponent;
  let fixture: ComponentFixture<ShowSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
