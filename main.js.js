function json(file,callback){

     var xhr=new XMLHttpRequest();
     xhr.overrideMimeType("application/json");
     xhr.open("GET",file,true);
     xhr.onreadystatechange=function(){
     	if (xhr.readyState===4 && xhr.status===200) {
     		callback(xhr.responseText);
     	}
     }
     xhr.send(null);
}
json("data.json",function(text){
    let d=JSON.parse(text);
    console.log(d)
    basics(d.basicdetails);
    carrier(d.carrier);
    edu(d.Education);
    techskills(d.skills);
    ache(d.Achievements);
    desc(d.Description);
    
})

var main=document.querySelector(".first");
var l=document.createElement("div");
l.classList.add("left");
l.setAttribute("id","nirula");
main.appendChild(l);
function basics(basic){
var i=document.createElement("img");
i.src=basic.image;
i.alt="profile picture";
l.appendChild(i);
var nam=document.createElement("h3");
nam.textContent=basic.name;
l.appendChild(nam);
var email=document.createElement("h3");
email.textContent=basic.email;
l.appendChild(email);
var num=document.createElement("h4");
num.textContent=basic.phone;
l.appendChild(num);
}
var r=document.createElement("div");
r.classList.add("right");
main.appendChild(r);

function edu(e){
   
   var e1=document.createElement("div");
   e1.classList.add("education");
   r.appendChild(e1);
   var head=document.createElement("h2");
   head.textContent="Education Details";
   e1.appendChild(head);
   head.appendChild(document.createElement("HR"));
   for(var i=0;i<e.length;i++){
   	var h=document.createElement("h2");
   	h.textContent=e[i].Course;
   	e1.appendChild(h);
   	var u=document.createElement("ul");
   	e1.appendChild(u);
   	var list=document.createElement("li");
   	list.textContent=e[i].College;
   	u.appendChild(list);
   	var list1=document.createElement("li");
   	list1.textContent=e[i].Percentage;
   	list.appendChild(list1);



 }

}
function techskills(s){
	var d=document.createElement("div");
	d.textContent="skills set";
	r.appendChild(d);
	var tab=document.createElement("table");
	var row="";
	for(var i=0; i<s.length; i++){
		row+="<tr><td>"+s[i].name+"</td><td>"+s[i].value+"</td></tr>";
	}
	tab.innerHTML=row;
	d.appendChild(tab);
}
function carrier(c){
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
	d.setAttribute("id","Achievements");
	r.appendChild(d);
	var h=document.createElement("h2");
	h.textContent="Achievements";
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
		h1.textContent="Description:";
		c1.appendChild(h1);
		h1.appendChild(document.createElement("HR"));
		var para=document.createElement("h3");
		para.textContent=D.des;
		c1.appendChild(para);
	}