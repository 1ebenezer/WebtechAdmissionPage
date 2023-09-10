function see(){
    var x=document.getElementById("1");

    if (x.type === "password"){
        x.type="text";
    }
    else{
        x.type="password";
    }
}


function validation(){
    var password=document.getElementById("1");
    var length=document.getElementById("length");

    if(password.value.length >=8)
    {
        alert("login is successful");
        window.location.replace("admission.html")
        return false;
    }
    else{
        alert("password too short");
        }
}
