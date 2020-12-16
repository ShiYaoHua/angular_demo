import { Component, OnInit,ViewChild } from '@angular/core';
import { RequestService } from '../../service/request.service'
import { Router } from '@angular/router'
import axios from 'axios'
@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.less']
})
export class RedComponent implements OnInit {
 
  @ViewChild('refreshIcon') refreshIcon:any

  recomendList = [];

  back(){
    history.back();
  }
  goSearch(type:any){
    this.router.navigate(['class',type])
  }
  //换一批点击事件
  batchAction(){
    this.refreshIcon.nativeElement.style.animation = 'rotation 1s linear infinite'
    setTimeout(()=>{
        this.refreshIcon.nativeElement.style.animation = ''
    },1000)
    this.getClassList()
  }
  goDetail(event:any){
    this.router.navigate(['class',event.id],{
      queryParams:{
        id:event.id
      }
    })
  }
  getClassList(){
    this.request.getClassList().then((res:any)=>{
      this.recomendList = res
    })
  }
  constructor(public request:RequestService,public router:Router) { 
    //使用注入的服务进行网络请求
    this.getClassList()

    this.getEcharData()
  }
  async getEcharData(){
    let httpUrl = `/les-miserables.gexf`;

    let result = await axios.get(httpUrl);
    console.log(result.data)
  }
  ngOnInit(): void {
  }

}
