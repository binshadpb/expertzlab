
//Array operations

var collection=[10,20,30,40,50]
console.table(collection)
collection[3]=90
console.table(collection)
collection[10]=100
console.table(collection)
var names=["anu","binu","ansu","glen","varsha"]
console.log(names)
names.push("avya")  //add to end of array
console.log(names)
names.pop()       //remove from end of array
console.log(names)
names.shift()   //remove first element
console.log(names)
names.unshift("anu")    //add first element
console.log(names)
names.splice(2,1)  //function used to remove element from any index specify the count of deleted elements
console.log(names)
for(let i=0;i<names.length;i++){
    console.log(names[i])
}
console.log("next loop")
for(let x of names){       //print array with of keyword with foreach array
    console.log(x)
}

for(let y in names){
    console.log(y)       //print index with in keyword
}

names.forEach((element)=>{
    console.log(element)
})

let arr1=collection.filter((z)=>{
    if(z%2==0){
        return z
    }
})
console.log(arr1)