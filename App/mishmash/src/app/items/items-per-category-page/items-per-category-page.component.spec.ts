import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsPerCategoryPageComponent } from './items-per-category-page.component';

describe('ItemsPerCategoryPageComponent', () => {
  let component: ItemsPerCategoryPageComponent;
  let fixture: ComponentFixture<ItemsPerCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsPerCategoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsPerCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
