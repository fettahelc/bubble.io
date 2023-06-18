function display(){
    user.display.value += ""+user.name.value;
}

function displayWelcomeMessage() {
  const name = document.getElementById("name").value;
  document.getElementById("userName").textContent = name;
  document.getElementById("loginForm").reset();
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("welcomeMessage").style.display = "block";
}