var obj1={name:"binu",view:function(msg,date){
    console.log("Name :",this.name,msg,date)
}
}
var obj2={name:"ram"}

obj1.view.call(obj2,"good boy",new Date())   // object function to call function of obj1 to obj2
obj1.view.apply(obj2,["bad boy",new Date()]) //same function as call arguments passed in array
let f=obj1.view.bind(obj2,"introvert",new Date()) //bind function return function and we can give partial arguments

f() //calling return function of bind

let f1=obj1.view.bind(obj2,"extrovert")// bind function giving partial arguments

f1(new Date()) //setting last argument, so bind is working

let arr=["hello","ram",10]
let d=arr.join("-")
console.log(d,typeof d)
let bin=[1,2,3]
console.log(bin[10])