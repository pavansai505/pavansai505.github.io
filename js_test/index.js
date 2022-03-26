
function sendname(){
    var imyname=document.getElementById("exampleFormControlInput1").value;
    sessionStorage.setItem("value",imyname);
    window.location.href="./main.html";
}
