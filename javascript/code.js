function add(x, y) {
    let sum = x + y
    console.log("sum is", sum)
    return sum
}

let result = add(3, 2)
console.log(result)
add()

//function for change content in the paragraph and style

function changecontent() {
    document.getElementById("p1").innerText = "change content"
    document.getElementById("p1").style.color="red"
    document.getElementById("p1").style.fontSize="50px"
}
//function for alert a message as input value on onblur effect

function contentalert() {             
    let y = document.getElementById("input").value
    alert(y)
}


//function for dropdown box
function getchosendata() {

    let x = document.getElementById("colors").value
    document.getElementById("color").value = x
}