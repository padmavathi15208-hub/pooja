
document.querySelector("button")
.addEventListener("click",function(){

alert(
"Welcome to AI-SkillConnect Portal 🚀"
);

});



let buttons=document.querySelectorAll(".card button");


buttons.forEach(btn=>{

btn.onclick=function(){

alert(
"Redirecting to Portal Login..."
);

}

});
