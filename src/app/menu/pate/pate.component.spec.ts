import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PateComponent } from './pate.component';

describe('PateComponent', () => {
  let component: PateComponent;
  let fixture: ComponentFixture<PateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
