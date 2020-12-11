import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAllItemsComponent } from './user-all-items.component';

describe('UserAllItemsComponent', () => {
  let component: UserAllItemsComponent;
  let fixture: ComponentFixture<UserAllItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAllItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAllItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
