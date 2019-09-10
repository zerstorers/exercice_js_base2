var message = "Merci pour votre participation";
 var nameInput = document.getElementById("nom")

 nameInput.addEventListener("focusout", function(){
     alert(message)
 });