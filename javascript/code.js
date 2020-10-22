function add(x,y){
    let sum=x+y
    console.log("sum is",sum)
    return sum
}

let result=add(3,2)
console.log(result)
add()

function changecontent(){
    document.getElementById("p1").innerText="change content"
}

function getchosendata(){
    
    
   let x=document.getElementById("colors").value
   document.getElementById("color").value=x
}