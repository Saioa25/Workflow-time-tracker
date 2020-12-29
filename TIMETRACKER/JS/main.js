var counter = 1; 
var intervalo; 
var currentItem;
var currentSince;



function start () {
	var list = document.getElementById("time-list");
	var template = document.getElementById("itemtemplate");
	var dupTemplate = template.cloneNode (true);
	var childs = dupTemplate.children;
	childs[0].innerHTML = "Time" + counter;
	currentSince = new Date();
	childs[1].innerHTML = currentSince.getHours() + ":" + currentSince.getMinutes () + ":" + currentSince.getSeconds ();
	childs[2].innerHTML = "-";
	childs[3].id = "timer" + counter; 
	intervalo = setInterval(chrono, 1000);
	currentItem = dupTemplate;
	counter = counter + 1;
	list.classList.add ("active");

	list.appendChild(dupTemplate);


}

function stop(){
	var childs = currentItem.children;
	clearInterval (intervalo);
	var date = new Date();
	date = date.getHours() + ":" + date.getMinutes () + ":" + date.getSeconds ();
	childs[2].innerHTML = date; 

}

function chrono(){
	var childs = currentItem.children;
	var date = new Date();
	date = Math.abs(date - currentSince); 
	date = new Date (date);
	var seconds = (date/1000).toFixed(0);
	var minutes = (date/(1000 * 60)).toFixed(0);
	var hours = (date/(1000 * 60 * 60)).toFixed(0);
	date = hours + ":" + minutes + ":" + seconds;
	childs[3].innerHTML = date; 
	
}

function activate(){
	var menu = document.getElementById ("menu");
	var portada = document.getElementById ("portada");
	var logo = document.getElementById ("LOGO");
	logo.classList.add ("active");
	menu.classList.add ("active");
	portada.classList.add ("active");
	var childs = menu.children;
	window.setTimeout(()=>{

	for (var i = childs.length - 1; i >= 0; i--) {
		childs[i].classList.add("active");
	}


	}, 450)
	;
}

function changeName() {

}




function closed() {
	var menu = document.getElementById ("menu");
	var portada = document.getElementById ("portada");
	var logo = document.getElementById ("LOGO");
	menu.classList.remove ("active");
	portada.classList.remove ("active");
	logo.classList.remove ("active");
	var childs = menu.children;
	for (var i = childs.length - 1; i >= 0; i--) {
		childs[i].classList.remove("active");
	}
}




