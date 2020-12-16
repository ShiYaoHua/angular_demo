

## Angular环境搭建及实战教程

#### 搭建Angular开发环境

安装 angular cli

```
npm install -g @angular/cli
```

查看Angular CLI版本

```
ng version
```

卸载之前版本

```
npm uninstall -g @angular/cli
```

检查是否卸载成功

> 输入`ng version`，无版本号则卸载成功

安装指定版本

```
npm install -g @angular/cli@10.0.0
```

#### 创建项目

```
ng new angulardemo
```

切换到项目路劲下 安装包

```
npm install
```

启动开发服务命令

```
npm start  
//或者 启动时打开浏览器
ng serve --open	// 或者缩写：ng serve -o
```

打包: 生成一个dist文件夹，里面就是打包的文件

```
ng build
```

默认生成一个根组件app模块，组件下面有五个文件，分别是：

>app.module.ts：模块ts，需要导入哪些组件，所有组件都会放在这里面
>
>app.component.ts：写typescript文件
>
>app.component.spec.ts: *单元测试文件*
>
>app.component.less:  样式文件
>
>app.component.html:  模板文件

```ts
//app.component.ts文件

// 写typescript文件
import { Component } from '@angular/core';

//在angular核心模块里导入组件装饰器
//装饰器定义组件元数据
//selector：相当于组件的名称
//templateUrl：组件模板文件，定义组件布局和内容
//styleUrls：模板的css样式文件
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'hello wong';
}
```

快捷创建组件命令：component/news 是当前新建组件的路径

>ng：angular
>
>g：生成的意思，全称：generate
>
>component： 组件

```
ng g component component/news
```

组件使用

```html
<app-news></app-news>
```

很明显angular会比vue稍微繁琐一些，使用的方式上跟vue差不多

html模板文件：

> 在app.component.html里是不需要包括在一个根里面，不想react或者是vue需要包裹在一个根标签下，angular会自动帮你包裹在<app-root>下

浏览器元素可查看当前angular版本，在<app-root>组件中可以看到  ng-version="11.0.2"。

#### Angular常用新建的命令

```ts
// 新建组件
ng g component views/index
ng g component views/index --skipTests //不创建测试文件
// 新建指令
ng g directive directivename 
// 新建管道
ng g pipe pipename 
// 新建服务
ng g service servicename

// 新建class
ng g class classname
// 新建枚举
ng g enum enumname 
// 新建模块
ng g module modulename
```

#### Angular 装饰器

装饰器是一些用于修饰 JavaScript 类的函数。Angular 定义了许多装饰器，这些装饰器会把一些特定种类的元数据附加到类上，以便 Angular 了解这些这些类的含义以及该如何使用它们。

#### 组件的元数据（metadata）

组件的元数据告诉 Angular 到哪里获取它需要的主要构造块，以创建和展示这个组件及其视图。 具体来说，它把一个*模板*（无论是直接内联在代码中还是引用的外部文件）和该组件关联起来。 该组件及其模板，共同描述了一个*视图*。

除了包含或指向模板之外，`@Component` 的元数据还会配置要如何在 HTML 中引用该组件，以及该组件需要哪些服务等等。

下面的例子中就是 `HeroListComponent` 的基础元数据：

```ts
@Component({
  selector:    'app-hero-list',
  templateUrl: './hero-list.component.html',
  providers:  [ HeroService ]
})
export class HeroListComponent implements OnInit {
/* . . . */
}
```

这个例子展示了一些最常用的 `@Component` 配置选项：

- `selector`：是一个 CSS 选择器，它会告诉 Angular，一旦在模板 HTML 中找到了这个选择器对应的标签，就创建并插入该组件的一个实例。 比如，如果应用的 HTML 中包含 `<app-hero-list></app-hero-list>`，Angular 就会在这些标签中插入一个 `HeroListComponent` 实例的视图。
- `templateUrl`：该组件的 HTML 模板文件相对于这个组件文件的地址。 另外，你还可以用 `template` 属性的值来提供内联的 HTML 模板。 这个模板定义了该组件的*宿主视图*。
- `providers`：当前组件所需的服务[提供者](https://angular.cn/guide/glossary#provider)的一个数组。在这个例子中，它告诉 Angular 该如何提供一个 `HeroService` 实例，以获取要显示的英雄列表。

#### Angular css

>Component css 仅用于组件，src跟鲁姆下的style.css全局的样式
>
>Angular 模板语法：
>
>MVVM：起源于MVC模式，M->model数据（模型/状态）V->view 视图（模板+数据+变量）C->controller 控制器 交互修改数据的方式，数据决定模板，模板决定交互，交互又决定数据，所以会一直循环，生生不息
>
>M->model,V->view，VM->对数据和视图的双向绑定，只要修改数据，VM（框架）就会自动改变视图，视图的交互改变了数据。

#### @NgModule 元数据

NgModule 是一个带有 `@NgModule()` 装饰器的类。`@NgModule()` 装饰器是一个函数，它接受一个元数据对象，该对象的属性用来描述这个模块。其中最重要的属性如下。

- `declarations`（可声明对象表） —— 那些属于本 NgModule 的[组件](https://angular.cn/guide/architecture-components)、*指令*、*管道*。
- `exports`（导出表） —— 那些能在其它模块的*组件模板*中使用的可声明对象的子集。
- `imports`（导入表） —— 那些导出了*本*模块中的组件模板所需的类的其它模块。
- `providers` —— 本模块向全局服务中贡献的那些[服务](https://angular.cn/guide/architecture-services)的创建器。 这些服务能被本应用中的任何部分使用。（你也可以在组件级别指定服务提供者，这通常是首选方式。）
- `bootstrap` —— 应用的主视图，称为*根组件*。它是应用中所有其它视图的宿主。只有*根模块*才应该设置这个 `bootstrap` 属性。

#### Angular 插值

>语法：{{...变量和表达式}}
>
>应用：应用于html内容里，也可以应用于属性property里

```html
<!-- app.component.html 文件-->

<!-- 1.变量插值 -->
<h1>{{title}}</h1>
<span>史耀华</span>
<!-- 2.表达式插值 -->
<h1>3+4={{sum(3,4)}}</h1>
<!-- 3.样式插值 -->
<button class="{{classStr}}">按钮样式插值</button>
<!-- 4.属性插值 -->
<img src="{{imgUrl}}"/>
<img [src]="imgUrl"/>

<!-- 5.自定义属性绑定插值 -->
<!-- 不能这样写 -->
<!-- <h1 data-index="{{msg}}"></h1> -->
<h1 [attr.data-index]="msg">msg</h1>

<!-- 5.1绑定单个class -->
<!-- isPrimary为真绑定btn-primary样式-->
<button type='button' class="btn" [class.btn-primary]="isPrimary">Primary</button>

<!-- 5.2绑定多个class -->
<!-- btnCls 可以是字符串、数组、对象-->
<!-- btnCls值有如下三种：
1.字符串 btnCls = 'btn btn-primary'
2.数组 btnCls = ['btn' 'btn-primary']
3.对象 btnCls = {btn:true,'btn-primary':true}
-->
<button [class]="btnCls">Primary</button>
<!-- 或者使用ngClass -->
<button [ngClass]="btnCls">Primary</button>

<!-- 5.3绑定单个style -->


<!-- 6.绑定html自带的属性，那么还可以这样绑定 -->
<h1 [class]="classStr">class</h1>

<!-- 7. 动态绑定html,会转义，不会以标签的形式插入或执行JavaScript，很安全-->
<h1>{{htmlStr}}</h1>
<h1 [innerHtml]='htmlStr'></h1>
```

```ts
//app.component.ts文件
// 写typescript文件
import { Component } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

//在angular核心模块里导入组件装饰器
//装饰器定义组件元数据
//selector：相当于组件的名称
//templateUrl：组件模板文件，定义组件布局和内容
//styleUrls：模板的css样式文件
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'hello wong';
  msg = "这是一个索引";
  classStr = 'bgBlue';
  htmlStr = "<span>helloword<script>location.href='http://www.baidu.com'</script></span>"
  sum(a:any,b:any){
    return a+b
  }
  clickEvent(){

  }
}
```

#### class中get写法定义属性

class中使用get定义属性，使用时同属性用法一致，必须有返回值

```ts
export class AppComponent {
  //下面声明变量方法等价
  job1 = '战士'
  get job():string{
    return '战士'
  }
}
```

#### Angular 样式

```html
<!-- 定义变量的方式:跟vue一致，会自动将变量和原有的class相加 -->
<!-- 1.字符串模式 -->
<h1 class="abc" class="{{classStr}}">class</h1>
<h1 [class]='classStr'>class2</h1>
<h1 [attr.class]='classStr'></h1>

<!-- 2.对象模式 -->
<h1 [class]="classObj">class对象模式</h1>
<h1 [class]="{bgBlue:isShow}">class对象模式</h1>
<!-- 3.数组模式 -->
<h1 [class]="['bgBlue','active','abc']"></h1>
<h1 [class]='classArr'>classArr</h1>
<!-- 4. 动态绑定某个样式 -->
<h1 [style.height]='styleHeight'>动态绑定某个样式</h1>
<h1 style="width: 100px;">h1</h1>

```

#### Angular 绑定事件

```html
<button (click)='changeColor()'>改变颜色</button>
<!--改事件当前按钮颜色 -->
<button (click)='changeButton($event)'>改变颜色</button>
<input type="text" (keyup)="onKeyup($event)" />
```

```ts
onKeyup(event:keyboardEvent){
  console.log('onKeyup',(event.target as HTMLIputElement).value)
}
```



#### Angular 条件渲染

```html
<div *ngIf="person=='广东人'">
    广东人：1000
</div>
<div *ngIf="person=='湖北人'">
    湖北：4000
</div>
<button (click)='togglePerson()'>切换身份</button>
<!-- 使用样式进行条件渲染 -->
<div [style.display]="person=='广东人'?'block':'none'">
    广东人：1000
</div>
<div [style.display]="person=='湖北人'?'block':'none'">
    湖北：4000
</div>

<!-- 条件渲染，匹配多种情况 -->
<div [ngSwitch]="orderState">
    <div *ngSwitchCase="1">待付款</div>
    <div *ngSwitchCase="2">已付款</div>
    <div *ngSwitchCase="3">发货</div>
    <div *ngSwitchCase="4">已发货</div>
    <div *ngSwitchDefault>丢失</div>
</div>
```

#### Angular 循环

```html
<!-- 列表循环获取索引值 -->
<ul>
    <li *ngFor="let item of arr">{{item}}</li>
</ul>
<!-- 列表循环获取索引值 -->
<ul>
    <li *ngFor="let item of arr;let i=index">索引值：{{i}}；内容：{{item}}</li>
</ul>

<!-- 将列表的内容传入事件 -->
<ul>
    <li *ngFor="let item of arr;let i=index" (click)="choosePerson(item,i)">索引值：{{i}}；内容：{{item}}</li>
</ul>
```

#### Angular双向绑定

```html
<!-- app.component.html 文件--> 
<div>
    <label for="">用户名</label>
    <input type="text" [(ngModel)]='username'/>
    
    <label for="">密码</label>
</div>
<h1>用户名：{{username}}</h1>

<!-- 设置临时变量绑定DOM对象 -->
<!-- 表单获取数据 -->
<div>
    <label for="">用户名</label>
    <!-- 获取元素 -->
    <input #input1 type="text"/>
</div>
<div>
    <label for="">密码</label>
    <input #input2 type="text"/>
</div>
<button (click)='clickGetFun(input1.value,input2.value)'>获取账号和密码</button>
```

```ts
//app.module.ts 需要导入 FormsModule 模块

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NewsComponent } from './views/news/news.component';
import { from } from 'rxjs';

@NgModule({
  //组件声明
  declarations: [
    AppComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  //这里放首页需要挂载的哪个组件
  bootstrap: [AppComponent]
})
export class AppModule { }

```

#### Angular获取元素

使用 #xxx 来定义元素名称

ts.文件中获取元素需导入 ViewChild 模块，

注入该模块：@**ViewChild**('refreshIcon')  refreshIcon:any 之后使用this.refreshIcon 就可拿到该元素了

```html
 <img #refreshIcon ref='refreshIcon' class="refresh" src="/assets/refresh.png"/>
```

```ts
import { Component, OnInit, ViewChild } from '@angular/core';
export class RedComponent implements OnInit {
  @ViewChild('refreshIcon') refreshIcon:any
  //换一批点击事件
  batchAction(){
    this.refreshIcon.nativeElement.style.animation = 'rotation 1s linear infinite'//rotation是css文件中定义的一个动画
    setTimeout(()=>{
        this.refreshIcon.nativeElement.style.animation = ''
    },1000)
    this.getClassList()
  }
}
```

````less
@-webkit-keyframes rotation{
  from{
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to{
    -webkit-transform: rotate(360deg);
    transform: rotate(0deg);
  }
}
@keyframes rotation{
  from{
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to{
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
````

#### Angular 管道

Angular 的管道可以让你在模板中声明显示值的转换逻辑。 带有 `@Pipe` 装饰器的类中会定义一个转换函数，用来把输入值转换成供视图显示用的输出值。

Angular 自带了很多管道，比如 [date](https://angular.cn/api/common/DatePipe) 管道和 [currency](https://angular.cn/api/common/CurrencyPipe) 管道，完整的列表参见 [Pipes API 列表](https://angular.cn/api?type=pipe)。你也可以自己定义一些新管道。

要在 HTML 模板中指定值的转换方式，请使用 [管道操作符 (|)](https://angular.cn/guide/template-syntax#pipe)。

```html
{{interpolated_value | pipe_name}}
```

+ 系统自带：

```html
<!-- 管道 相当于vue的过滤器 -->
<!-- 显示时会把username转化成大写 -->
<h1>用户名：{{username | uppercase}}</h1>
<!-- 显示对象的json格式 -->
<h1>json格式：{{student | json}}</h1>
<!-- 时间转化 date管道-->
<h1>显示时间：{{time | date:"yyyy-MM-dd"}}</h1>
<!-- 把数字转换成金额字符串 date管道  currency：货币的意思-->
<!-- 转化后显示 $1,111.00 -->
<h1>currency 管道:{{1111 | currency}}</h1>
<!-- percent管道：把数字转换成百分比字符串， 根据本地化规则进行格式化，这些规则会决定分组大小和分组分隔符、小数点字符以及其它与本地化环境有关的配置项。 -->
<h1>percent 管道：{{0.4 | percent }}</h1>
```

+ 自定义管道

  创建自定义管道文件：ng g pipe filter/lcUppercase

  使用命令创建自定义管道，在app.module.ts中会自动增加**LcUppercasePipe**模块

  会在app路劲下增加filter文件，filter文件下增加lcUppercase管道文件

```html
<!-- 自定义管道默认 -->
<h1>{{msg2 | lcUppercase}}</h1>
<!-- 自定义管道传参 -->
<!-- msg2是模板变量，lcUppercase是转换函数，冒号后面是参数 -->
<h1>{{msg2 | lcUppercase:'元'}}</h1>
```

```ts
//管道文件 lc-uppercase.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lcUppercase'
})
export class LcUppercasePipe implements PipeTransform {
	//...args接收参数，是个数组
  transform(value:string, ...args:string[]):string {
    //实现返回的业务逻辑
    //return value.toUpperCase();
    return '¥' + value + args[0]
  }
}
```

+ 管道可转化多次

```html
<!-- 管道可转多次 依次进行-->
<!-- 先转化成大写，后转化成小写 -->
<h1>{{'abcdega' | uppercase | lowercase}}</h1>
```

#### Angular父子组件传值

+ 父子组件传值 

  *创建子组件：ng g component views/child*

  ```html
  <app-child [item]='sendChildMsg' (childMsg)="getEvent($event)"></app-child>
  <h1>子组件发来信息：{{getChildMsg}}</h1>
  ```

  ```ts
  sendChildMsg = "这是给子元素的数组，希望在子组件中显示"
  getChildMsg = ''
  // 父组件接收子组件传过来的值
  getEvent(event:any){
    this.getChildMsg = event.msg
  }
  ```

  ```ts
  //child.component.ts 子组件ts文件
  
  // 子组件接收父组件传过来的值 需要导入 Input 装饰器
  // 子组件给父组件传值 需要导出 Output,EventEmitter 装饰器
  import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
  
  @Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.less']
  })
  export class ChildComponent implements OnInit {
    //通过Input装饰器来调用
    //Input输入的值尽量不要在子组件进行修改，通知父组件修改
    @Input() item:any = undefined;//可设置默认值
    @Output() childMsg=new EventEmitter()
    constructor() { }
  
    ngOnInit(): void {
    }
    sendMsg(){
      this.childMsg.emit({msg:'我是子组件，这是我发给父组件的消息'})
    }
  }
```
  
  ```html
  <!-- child.component.html 子组件模板内容 接收父组件传过来的值-->
  <p>child works!</p>
  <h1>{{item}}</h1>
  
  <!-- 子组件给父组件传值 -->
  <button (click)='sendMsg()'>我是子组件</button>
  ```

#### Angular生命周期

Angular 会按以下顺序调用钩子方法：

- `ngOnChanges` - 在[输入属性 (input)](https://angular.cn/guide/glossary#input)/[输出属性 (output)](https://angular.cn/guide/glossary#output)的绑定值发生变化时调用。
- `ngOnInit` - 在第一次 `ngOnChanges` 完成后调用。
- `ngDoCheck` - 开发者自定义变更检测。
- `ngAfterContentInit` - 在组件内容初始化后调用。
- `ngAfterContentChecked` - 在组件内容每次检查后调用。
- `ngAfterViewInit` - 在组件视图初始化后调用。
- `ngAfterViewChecked` - 在组件视图每次检查后调用。
- `ngOnDestroy` - 在指令销毁前调用。

```ts
export class AppComponent {
  constructor() {
    console.log('组件构造函数调用')
    //这里做ajax请求
  }
  ngOnChanges(){
    console.log('数据发生变化之时就会调用此函数ngOnChanges')
  }
  ngOnInit(){
    console.log('初始化：第一次显示数据绑定和指令输入输入属性之后，就会调用，只调用一次ngOnInit')
  }
  ngDoCheck(){
    console.log('在ngOnChanges和ngOnInit发生之后，会进行一次检测ngDoCheck')
  }
  ngAfterContentInit(){
    console.log('将数据内容渲染到视图之后调用ngAfterContentInit')
  }
  ngAfterContentChecked(){
    console.log('将数据内容渲染视图检测之后调用ngAfterContentCheck')
  }
  ngAfterViewInit(){
    console.log('完成组件和子组件初始化调用ngAfterViewInit')
  }
  // 每个操作完成后都会有个检测
  ngAfterViewChecked(){
    console.log('完成组件和子组件初始化检查后调用ngAfterViewChecked')
  }
  ngOnDestory(){
    console.log('销毁组件调用ngOnDestory')
  }
}
```

#### Angular自定义指令

查看所有命令：ng g 回车

创建指令命令：ng g directive directive/syhstyle

```html
<h1 [appSyhstyle]="'abc'">自定义指令</h1>
<!-- 渲染后等于  -->
<h1 class="abc">自定义指令渲染后</h1>
```

指令.ts文件

```ts
import { Directive,ElementRef,Input } from '@angular/core';
@Directive({
  selector: '[appSyhstyle]'
})
export class SyhstyleDirective {
  @Input() appSyhstyle:any;

  constructor(public ref:ElementRef) { 
    console.log('constructor')
  }
  ngOnChanges(){
    console.log('指令~~~~')
    console.log('数据发生变化之时就会调用此函数ngOnChanges')
    console.log(this.appSyhstyle)
    console.log(this.ref)
    //给到类名
    this.ref.nativeElement.className = this.appSyhstyle
    //给到内容
    this.ref.nativeElement.innerHTML = this.appSyhstyle
    //添加点击事件 需要匿名函数 不会改变this指向
    this.ref.nativeElement.addEventListener('click',()=>{
      this.ref.nativeElement.style.background = 'blue'
    })
  }
}
```

#### Angular 网络请求 axios

安装： npm install axios

ts中导入模块axios：import axios from 'axios';

```ts
//app.component.ts
classList = [];
constructor() {
  console.log('组件构造函数调用')
  //这里做ajax请求
  axios('http://114.255.225.99:86/ibrdc-api/class/getList?className=&page=1&limit=3&timestamp=1606721039000&respType=json')
    .then((res) => {
    console.log(res.data.data.rows)
    this.classList = res.data.data.rows
  })
    .catch((err)=>{
    console.log(err)
  })
}
```

```html
<!-- 网络请求 -->
<ul>
    <li  *ngFor="let item of classList">
        <!-- 接口给的json格式为 {'className':'xxx'} 需要item['className'] 来获取。用点语法会报错-->
        <!-- <p>item格式：{{item | json}}</p> -->
        <p>课程名称：{{item['className']}}</p>
        <p>课程类型：{{item['classType']}}</p>
    </li>
</ul>
```

#### Angular 封装网络请求服务

创建服务命令：ng g service service/ajax 

目录下会生成一个service/ajax服务

安装axios：npm install axios

Angular 只会通过依赖注入来帮你更容易地将应用逻辑分解为服务，并让这些服务可用于各个组件中。

```ts
//ajax.service.ts 服务文件
import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor() { }
  async getClassList(){
    let httpUrl = 'http://114.255.225.99:86/ibrdc-api/class/getList?className=&page=1&limit=3&timestamp=1606721039000&respType=json'
    let result = await axios.get(httpUrl);
    return result.data.data
  }
  async getRecomentList(){
    let httpUrl = 'http://114.255.225.99:86/ibrdc-api/class/getList?className=&page=1&limit=3&timestamp=1606721039000&respType=json'
    let result = await axios.get(httpUrl);
    return result.data.data
  }
}
```

```ts
//网络请求服务导入
import { AjaxService } from './service/ajax.service';
export class AppComponent {
  classList = []
  constructor(public ajaxSer:AjaxService){
    //使用注入的服务进行网络请求
    ajaxSer.getClassList().then((res)=>{
      this.classList = res.rows
    })
  }
}
```

#### Angular 路由基础配置

新建项目的时候选择安装路由。默认会在app文件夹下多一个app-routing.module.ts 文件

新建页面命令：

+ ng g views/index

+ ng g views/about

+ ng g views/news

```ts
//app-routing.module.ts 路由文件

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//页面组件导入
import {IndexComponent} from './views/index/index.component'
import {NewsComponent} from './views/news/news.component'
import {AboutComponent} from './views/about/about.component'
import {Page404Component} from './views/Page404Component/Page404Component.component'
//配置路由对象
const routes: Routes = [
  {
    // 首页不需要加斜杠，会自动加
    path:'',
    component:IndexComponent
  },
  {
    path:'news',
    component:NewsComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    //匹配所有进行兜底操作
    path:'**',
    component:Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

```html
<!-- app.component.html 文件 -->

<!-- 根据路径的变化，显示不同组件 -->
<!-- 类似vue中<router-view/> -->
<div>
  <span [routerLink]="['/']" routerLinkActive="router-link-active">首页</span>
  <span [routerLink]="['/about']" routerLinkActive="router-link-active">about</span>
  <span [routerLink]="['/news']" routerLinkActive="router-link-active">news</span>
</div>
<router-outlet></router-outlet>
```

#### Angular 动态路由传值

```ts
//配置路由文件动态配置
{
    path:'news/:id',
    component:NewsComponent
}
```

#### Angular 获取路由参数

```ts
import { Component, OnInit } from '@angular/core';
// 路由依赖注入
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {

  constructor(public route:ActivatedRoute) {
    console.log(route)
    // 获取路由上的值
    //http://localhost:53855/news/123?search=abc#qwr
    console.log(route.params['value'].id); //获取53855
    console.log(route.queryParams['value'].search); //获取abc
    console.log(route.fragment['value']); //获取qwr锚点值
    
    //获取路由上的值使用sub回调 讲师使用方式
    route.params.subscribe((params)=>{
      console.log(params.id); //获取53855
    })
    route.queryParams.subscribe((queryParams)=>{
      console.log(queryParams.search); //获取abc
    })
    route.fragment.subscribe((fragment)=>{
      console.log(fragment); //获取qwr锚点
    })
  }
  ngOnInit(): void {
    
  }
}
```

#### Angular子路由配置

新建子路由文件：

+ ng g component views/admin/user
+ ng g component views/admin/product

```ts
//app-routing.module.ts 路由配置文件
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//页面组件导入
import {IndexComponent} from './views/index/index.component'
import {NewsComponent} from './views/news/news.component'
import {AboutComponent} from './views/about/about.component'
import {Page404Component} from './views/page404/page404.component'
// 子路由
import {AdminComponent} from './views/admin/admin.component'
import {ProductComponent} from './views/admin/product/product.component'
import {UserComponent} from './views/admin/user/user.component'

import { from } from 'rxjs';
//配置路由对象
const routes: Routes = [
  {
    // 首页不需要加斜杠，会自动加
    path:'',
    component:IndexComponent
  },
  {
    path:'news/:id',
    component:NewsComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  // 嵌套子路由
  {
    path:'admin',
    component:AdminComponent,
    children:[
      {
        path: 'user',
        component:UserComponent
      },
      {
        path: 'product',
        component:ProductComponent
      }
    ]
  },
  {
    path:"**",
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

```html
<!-- admin.component.html 模板文件 -->
<p>admin works!</p>
<div class="admin">
    <div class="left">
        这是侧边栏
        <div [routerLink]="['/admin/user']" routerLinkActive="router-link-active">user</div>
        <div [routerLink]="['/admin/product']" routerLinkActive="router-link-active">product</div>
    </div>
    <div class="main">
        <router-outlet></router-outlet>
    </div>
</div>
```

#### Angular编程式导航，路由跳转

注入Router; 跳转用 router.navigate(['news','1111'],{参数...})

```html
<button (click)='goHome()'>跳转到首页</button>
```

```ts
import { Component, OnInit } from '@angular/core';
// 路由依赖注入route 导入 Router
import {ActivatedRoute,Router} from '@angular/router'
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
	//注入route 和 router
  constructor(public route:ActivatedRoute,public router:Router) {
   
  }
  goHome(){
    console.log('aaa')
    this.router.navigate([''],{
      queryParams:{
        username:'admin'
      }
    })
    //传fragment锚点
    this.router.navigate([''],{
      fragment:'abc'
    })
    // 动态路由传值跳转
    this.router.navigate(['news','123455'],{
      queryParams:{
        username:'admin'
      },
      fragment:'abc',
      replaceUrl:true //跳转是否要替换，不可后退
    })
    this.router.navigate([''],{
      replaceUrl:true //跳转是否要替换，不可后退 好像不起作用
    })
  }
  ngOnInit(): void {
  }
}
```

#### angular UI 框架 [**NG-ZORRO**](https://ng.ant.design/)

**安装样式**

```
ng add ng-zorro-antd
```

**引入组件模块**

最后你需要将想要使用的组件模块引入到你的 `app.module.ts` 文件和[特性模块](https://angular.cn/guide/feature-modules)中。

以下面的 `NzButtonModule` 模块为例，先引入组件模块：

```ts
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NzButtonModule
  ]
})
export class AppModule { }
```

**模板中使用**

```html
<button nz-button nzType="primary">Primary</button>
```

#### 使用内联模式

如果内容很少，不需要使用外部文件引入，也可使用内联模式

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.less']
  template:`
    <b>inline mode</b>
    <h1 class="title">{{title}}</h1>
    <p>name: {{heroName}}</p>
  `,
  styles:[`
    b{
      color:red;
    }
		p{
      color:blue
    }
  `]
})
export class AppComponent {
  isCollapsed = false;
  title = "内联模式";
  heroName = '这是一个标题'
}
```

#### Angular静态文件获取

Angular静态文件获取只能放在assets文件夹下，获取路径如下：

http://localhost:4200/assets/les-miserables.gexf

