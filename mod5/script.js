/*console.log(document.getElementById("title"));
console.log(document instanceof HTMLDocument);
*/
function Sayhello(){
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