import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovefromcartComponent } from './removefromcart.component';

describe('RemovefromcartComponent', () => {
  let component: RemovefromcartComponent;
  let fixture: ComponentFixture<RemovefromcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovefromcartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovefromcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
