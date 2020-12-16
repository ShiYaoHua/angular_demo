import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.less']
})
export class ClassComponent implements OnInit {
  acceptId = ""
  constructor(public route:ActivatedRoute) { 
    console.log(route)
    route.params.subscribe((params)=>{
      this.acceptId = params.id
    })
  }

  ngOnInit(): void {
    
  }

}
