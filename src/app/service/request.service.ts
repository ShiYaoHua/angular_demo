import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }
  async getClassList(){
    let httpUrl = 'http://114.255.225.99:86/ibrdc-api/class/getList?className=&page=1&limit=3&timestamp=1606721039000&respType=json'
    // let result = await axios.get(httpUrl);
    // return result.data.data
    let result = [
      {"id": 1, "sourseName": "电影《小森林》夏秋片", "teacherName": "外部师资","duration":21,"learners":0,"imageUrl":"../hcy.jpeg"},
      {"id": 2, "sourseName": "电影《小森林》夏秋片", "teacherName": "外部师资","duration":22,"learners":0,"imageUrl":"../hcy.jpeg"},
      {"id": 3, "sourseName": "电影《小森林》夏秋片", "teacherName": "外部师资","duration":23,"learners":0,"imageUrl":"../hcy.jpeg"}
    ]
    return result
  }
}
