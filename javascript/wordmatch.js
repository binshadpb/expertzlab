var text = document.getElementById("mytextarea")
var reg = document.getElementById("regex")




function check(){
    //console.log(text.value)
    var reg_ex= new RegExp(reg.value,"g")
    //console.log(reg_ex)
   // var change=reg.value
   var change=reg.value
   var result=text.value.replace(reg_ex,"<span style='background-color:yellow'>"+change+"</span>")
   document.getElementById("newcontent").innerHTML=result
   
   
}