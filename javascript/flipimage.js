function changeimage() {
    document.getElementById("image2").style.visibility = "visible"
    document.getElementById("image1").style.visibility = "hidden"
    document.getElementById("heading").innerText = "Second Image"
}
function disp() {
    document.getElementById("image2").style.visibility = "hidden"
}

function change2() {

    document.getElementById("image2").style.visibility = "hidden"
    document.getElementById("image1").style.visibility = "visible"
    document.getElementById("heading").innerText = "First Image"
}