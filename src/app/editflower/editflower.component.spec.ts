import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditflowerComponent } from './editflower.component';

describe('EditflowerComponent', () => {
  let component: EditflowerComponent;
  let fixture: ComponentFixture<EditflowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditflowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditflowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
