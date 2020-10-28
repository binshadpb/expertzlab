
count = 0

function add() {
    let para = document.createElement("p")
    count++
    para.innerText = "you clickeed the button" + count
    document.getElementById("mydiv").appendChild(para)


    
    let input=document.createElement("input")
    input.value=new Date()
    document.getElementById("mydiv").appendChild(input)
}