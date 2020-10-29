var todo = []
function addelement() {

    var inputvalue = document.getElementById("inputbox").value
    todo.push(inputvalue)
    var list_item = document.createElement("li").value = inputvalue
    console.log(list_item)
    document.getElementById("listitem").appendChild(list_item)


    // console.log(todo)

}