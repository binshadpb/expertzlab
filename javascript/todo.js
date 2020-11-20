var todo = []
function addelement() {
   //code to add items to array and display to the <li> tag
    var inputvalue = document.getElementById("inputbox")
    todo.push(inputvalue)
    //console.log(todo)
    var listitem = document.getElementById("listitem")
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(inputvalue.value));
    listitem.appendChild(li)
   inputvalue.value=""
// creating delete and move buttons
let but_delete=document.createElement("button")   
//but_delete.type = 'button'
but_delete.innerHTML = 'delete'
but_delete.className = 'btn btn-primary'
but_delete.style.display="inline"
document.getElementById("listdiv").appendChild(but_delete)

} 