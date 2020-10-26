var hidename = document.getElementById("divname")
//hidng div for alert on load event
function hide() {

    hidename.style.display = "none"
}



function validate() {

    var name = document.getElementById("examplename")
    var mail = document.getElementById("exampleemail1")
    var password = document.getElementById("examplepassword1")
    var mobile = document.getElementById("examplemobile")

    //validating name
    if (name.value == "") {
        //alert("Name cannot be empty")
        document.getElementById("divname").innerHTML="<p>Name cannot be empty</p>"
        name.focus()
        return false
    }




    //validating mail
    if (mail.value == "") {
        alert("mail cannot be empty")
        mail.focus()
        return false
    }




    //validating pasword
    if (password.value == "") {
        alert("password cannot be empty")
        password.focus()
        return false
    }





    //validating mobile number
    if (mobile.value == "") {
        alert("mobile cannot be empty")
        mail.focus()
        return false
    }

    if (mobile.value.length != 10 || isNaN(mobile.value)) {
        alert("Incorrect Mobile Number")
        mail.focus()
        return false
    }






}