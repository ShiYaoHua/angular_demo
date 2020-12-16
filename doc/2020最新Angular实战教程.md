### 2020最新Angular实战教程

### 1 TypeScript类型定义：

> boolean，number，null，undefined，任意类型any，联合类型

```ts
// 正确定义
let isDone: boolean = false;
let isCheck: boolean = Boolean(1)

// 错误定义
// let isCheck2: boolean = new Boolean(1)

// 数值类型定义
let num: number = 1;
let num16: number = 0xf00a;
let notNum: number = NaN;
let infNum: number = Infinity;

// 字符串类型定义
let userName: string = 'laochen';
let age: number = 30;
let juzi: string = `我的年龄是${age}`;

//任意类型
let something;
//something在声明时未定义类型，也没有赋值，就会被定义为任意值类型
something = 'abc'
something = 123

//something2在声明时未定义类型，但是由于赋值为字符串，typescript有类型推断规则，会将赋值的类型定义成变量的类型
let something2 = 'abc'
// something2 = 123 //会报错

// 增加 any类型 这样就不会报错
let something3: any = 'abc'
something3 = 123 

//联合类型：表示取值可以取多个类型
let cat:string | number;
cat = 1;
cat = '花花'

let cat1:string | number = '花花';
cat1 = 1
```

### 2 TypeScript 接口

什么是接口？行为的抽象，具体行动需要由类去实现（接口抽象出来的内容）。

相当于定义类的描述。

```ts
//1.接口定义一个类有哪些属性 没有赋值操作
interface Persion{
    name: string;
    age: number;
}
let tom:Persion = {
    name: 'tom',
    age: 16
}
//约束tom这个对象，必须和接口一致属性。
//一般接口的首字母大写。
//用接口定义的对象，属性不能多写，也不能少写
let tom1:object = {
    name:'abc',
    age:20
}

//2.接口属性可选,但不可多写
interface Student{
    name:string;
    age?:number
}
let s1:Student = {
    name: 'tom',
    age: 16
}

//3.接口属性任意
interface Teacher{
    name:string;
    age?:number;
    [propName:string]:any;
}
let s2:Teacher = {
    name: 'wong',
    age: 16,
    sex: '女',
    school:'清华'
}

//4. 只读属性：只能进行一次赋值，后面不可以再修改，但是可以获取
interface Cat{
    readonly name:string; //name为只读属性
    color:string;
    age:number;
}
let c1:Cat = {
    name: '波斯猫',
    color: '白色',
    age: 10
}
// c1.name = '中华猫' //会报错

//5. 接口限制到类里面
//implements：类实现接口的关键词
class SmallCat implements Cat{
    name: string = '小猫';
    color: string = '黑色';
    age: number = 16;
    constructor(){

    }
}
let c2 = new SmallCat()
console.log(c2.name)
```

### 3 TypeScript函数

```ts
//1. TypeScript 函数声明写法：
//TypeScript会对函数的输入和输出有约束
//输入和输出时会定义类型，参数传入（参数定义类型），返回值（定义类型）
function sum1(x:number,y:number){
  return x+y;
}
let result:number = sum1(3,4)

//2. TypeScript函数表达式写法
//这种写法，实质上仅将右侧匿名函数进行了类型的定义。对左边sum2这个变量没有实质的定义；
let sum2 = function(x:number,y:number):number{
    return x+y;
} 
//对上边左边返回值类型的一个限制
let sum3:(x:number,y:number) => number = function(x:number,y:number):number{
    return x+y;
}
//TypeScript中函数的参数，是不能随意传任意数量的值，设定多少传多少个。
// sum3(3,4,5) //会报错

//可选参数,通过问好设置这个参数是可选参数
function sumName(firstname:string,lastname?:string):string{
    return firstname+lastname
}
//注意：可选参数必须放置到必须参数的后面，可选参数后面不允许放置必须参数
sumName('lao','chen')
sumName('lao')

//参数默认值
function sunName3(firstname:string='chen',lastname:string = 'li'){
    return firstname + lastname
}

//剩余参数获取
function fnpush(...items){
}
function fnpush2(...items:any[]):string{
    return 'abc'
}

//重载：允许一个函数，可以接收不同数量或类型的参数
function setNum(x:number|string):number|string{
    return x; //number或string
}
function fnAbc(x:number):number;
function fnAbc(x:string):string;
function fnAbc(x:number|string):number|string{
    if(typeof x==='number'){
        return x;
    }else{
        return x;
    }
}
```

