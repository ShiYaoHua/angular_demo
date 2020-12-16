import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  @Input() item:any
  @Output() goDetail = new EventEmitter();
  goDetailClick(item:any){
    this.goDetail.emit({id:this.item.id})
  }
  constructor() { 
  }

  ngOnInit(): void {
  }

}
