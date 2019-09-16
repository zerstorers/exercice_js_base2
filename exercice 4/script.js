var nom = document.getElementById("nom");
var prenom = document.getElementById("prenom");
var ville = document.getElementById("ville");
var button = document.getElementsByTagName("button")[0];
    
    button .addEventListener ("click", function(){
    nom.value = "";
    prenom.value = "";
    ville.value = "";    
});