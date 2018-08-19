// function json(file,callback){

// 	var xhr=new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange=function(){
// 		if (xhr.readyState=="4" && xhr.status=="200") {
// 			callback(xhr.responseText);
// 		}
// 	}
// 	xhr.send(null);
// }
// json("data.json",function(text){
// 	let d=JSON.parse(text);
// 	console.log(d);
// 	basics(d.basicdetails);
// 	edu(d.education);
// 	carrer(d.carrier );
// 	techskills(d.skills);
// 	ache(d.Achivements);
// 	desc(d.Description);

// })
//Fetch API
fetch("data.json")
.then(function(response){
	return response.json();
})
.then(function(d){
	console.log(d);
	basics(d.basicdetails);
	edu(d.education);
	carrer(d.carrier);
	techskills(d.skills);
	ache(d.Achivements);
	desc(d.Description);
})
var main=document.querySelector(".first");
var l=document.createElement("div");
l.classList.add("left"); 
l.setAttribute("id","nirula");
main.appendChild(l);
function basics(b){
	var i=document.createElement("img");
	i.src=b.image;
	i.alt="profile photo";
	l.appendChild(i);
	var nam=document.createElement("h3");
	nam.textContent=b.name;
	l.appendChild(nam);
	var phn=document.createElement("h4");
	phn.textContent=b.phone;
	l.appendChild(phn);
	var mail=document.createElement("h5");
	mail.textContent=b.email;
	l.appendChild(mail);
	var add=document.createElement("h6");
	add.textContent=b.address;
	l.appendChild(add);
}
var r=document.createElement("div");
r.classList.add("right");
main.appendChild(r);

function edu(e){
var e1=document.createElement("div");
e1.classList.add("educa");
r.appendChild(e1);
var head=document.createElement("h2");
head.textContent="Educational Details";
e1.appendChild(head);
head.appendChild(document.createElement("HR"));
for (var i = 0; i < e.length; i++){
	var h=document.createElement("h2");
	h.textContent=e[i].course;
	e1.appendChild(h);
	var u=document.createElement("ul");
	e1.appendChild(u);
	var list=document.createElement("li");
	list.textContent=e[i].college;
	u.appendChild(list);
	var list1=document.createElement("li");
	list1.textContent=e[i].percentage;
	u.appendChild(list1);


}

}
function techskills(ls){
	var d=document.createElement("div");
	d.textContent="Skills set";
	r.appendChild(d);
	var tab=document.createElement("table");
	var row="";
	for(i=0; i<ls.length; i++){
		row+="<tr><td>"+ls[i].name+"</td><td>"+ls[i].value+"</td></tr>";
	}
	tab.innerHTML=row;
	d.appendChild(tab);

}
function carrer(c){
	var c1=document.createElement("div");
	r.appendChild(c1);
	var h1=document.createElement("h1");
	h1.textContent="carrier objective";
	c1.appendChild(h1);
	var para=document.createElement("p");
	para.textContent=c.ca;
	c1.appendChild(para);
}
function ache(ach){
	var d=document.createElement("div");
	d.setAttribute("id","Achivements");
	r.appendChild(d);
	var h=document.createElement("h1");
	h.textContent="Achivement";
	d.appendChild(h);
	h.appendChild(document.createElement("HR"));
	for(i in ach){
		var u=document.createElement("ul");
		d.appendChild(u);
		var list=document.createElement("li");
		list.textContent=ach[i];
		u.appendChild(list);
	}
}
function desc(D)
{
	var c1=document.createElement("div");
	r.appendChild(c1);
	var h1=document.createElement("h1");
	h1.textContent="Description";
	c1.appendChild(h1);
	h1.appendChild(document.createElement("HR"));
	var para=document.createElement("h3");
	para.textContent=D.des;
	c1.appendChild(para);
}





