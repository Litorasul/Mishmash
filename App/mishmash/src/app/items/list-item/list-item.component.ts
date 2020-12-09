import { Component, Input, OnInit } from '@angular/core';
import { IItemInList } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input()
  item!: IItemInList;
  constructor() { }

  ngOnInit(): void {
  }



}
