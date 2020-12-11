import { Component, Input } from '@angular/core';
import { IItemInList } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

  @Input()
  item!: IItemInList;
  constructor() { }

}
