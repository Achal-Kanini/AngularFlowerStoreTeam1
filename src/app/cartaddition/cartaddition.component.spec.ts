import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartadditionComponent } from './cartaddition.component';

describe('CartadditionComponent', () => {
  let component: CartadditionComponent;
  let fixture: ComponentFixture<CartadditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartadditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartadditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
