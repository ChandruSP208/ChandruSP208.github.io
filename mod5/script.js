/*console.log(document.getElementById("title"));
console.log(document instanceof HTMLDocument);
*/
document.addEventListener("DOMContentLoaded",
function (event){
function Sayhello(event){
    this.textContent="said it!"
	var name=document.getElementById("name").value
   var message="<h2>Hello "+name+"!</h2>";

   document
   .getElementById("content")
   .innerHTML=message;
   if(name=="Student"){
   	var title=document
   	.querySelector("#title")
   	.textContent;
   	title+=" &love it read it";
   	var mess=document.querySelector("#title") //h1===id firse selector h1
   	.textContent=title;
   }
}
//unobstructive event binding
document.querySelector("button")
.addEventListener("click",Sayhello);
document.querySelector("button").onclick=Sayhello;
document.querySelector("body")
.addEventListener("mousemove",
    function (event){
        if(event.altKey===true){
            console.log("x:"+event.clientX);
             console.log("y:"+event.clientY);
        }
    }
);
}
);