import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  @Input()
  category!: ICategory;
  constructor() { }

  ngOnInit(): void {
  }

}
