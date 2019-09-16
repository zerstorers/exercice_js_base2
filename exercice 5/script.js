for (let i = 1; i < 6; i++) {    
     document.getElementById("image"+i).addEventListener("mouseover", function(){
     document.getElementById("image"+i).src = "images/image"+i+"_2.jpg"
 })
     document.getElementById("image"+i).addEventListener("mouseleave", function(){
     document.getElementById("image"+i).src = "images/image"+i+".jpg"
 })
}