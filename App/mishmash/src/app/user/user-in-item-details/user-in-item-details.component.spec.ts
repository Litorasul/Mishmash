import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInItemDetailsComponent } from './user-in-item-details.component';

describe('UserInItemDetailsComponent', () => {
  let component: UserInItemDetailsComponent;
  let fixture: ComponentFixture<UserInItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
