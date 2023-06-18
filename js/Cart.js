function numgenerator() {
    var num = Math.floor(Math.random() * 3000 + 500);
    document.getElementById("display").value = num;
}
function closes(){
    document.getElementById("all").style.display="none";
    document.getElementById("myDiv").style.display = "block";
}