import { Component, Input, OnInit } from '@angular/core';
import { IItemInList } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  itemsList!: IItemInList[];
  constructor() { }

  ngOnInit(): void {
  }

}
