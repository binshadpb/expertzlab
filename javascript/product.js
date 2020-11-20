function Pro_list(id,name,price){
this.id=id
this.name=name
this.price=price
//this.display=function(){
    //console.log("ID :"+this.id)
   // console.log("Name :"+this.name)
  //  console.log("ID :"+this.price)
//}
}

let pro_array=[]

//function for display details and add items to object & array
function additem(){
let pro_id=document.getElementById("id").value
let pro_name=document.getElementById("name").value
let pro_price=document.getElementById("price").value
//console.log(pro_id,pro_name,pro_price)
let pro1=new Pro_list(pro_id,pro_name,pro_price)
pro_array.push(pro1)
console.log(pro1)
let para=document.createElement("p")
//para.innerHTML=pro1.display()
//console.log(para)
//document.getElementById("mydiv").appendChild(para)
var x, txt = ""
for (x in pro1) {
   txt +=  "<br><li>"+pro1[x] 
    }
    
    para.innerHTML = txt;
    document.getElementById("mydiv").appendChild(para)

}
function arr_disp(){
    console.log(pro_array)
}