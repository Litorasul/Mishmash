import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IItemInList } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  itemsList!: IItemInList[];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  clickHandler(itemId: string): void {
    this.router.navigate([`details/${itemId}`]);
  }

}
