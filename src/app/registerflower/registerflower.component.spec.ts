import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterflowerComponent } from './registerflower.component';

describe('RegisterflowerComponent', () => {
  let component: RegisterflowerComponent;
  let fixture: ComponentFixture<RegisterflowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterflowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterflowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
