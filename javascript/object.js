let person={name:"binshad",age:22}
console.log(person)
student=Object.create(person)
student.roll=101
Object.seal(student)
console.log(Object.isSealed(student))
let obj1={x:10,y:20}
let obj2={x:10,y:20}
obj1=obj2
console.log(obj1==obj2)

 //creating functional constructors

function Department(did,name,age){  //creating functional constructors
    this.Did=did
    this.Name=name
    this.Age=age
    this.display=function(){
        console.log("Name "+this.Name)
        
        
    }
}
let dep1=new Department(100,"binu",22)
console.log(dep1)
dep1.display()
for(let x of Object.keys(student)){
    console.log(x)
}

function greetings(){
    
}

