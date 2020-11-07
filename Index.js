var tog = document.getElementById('tog');
var nav = document.getElementById('nav');
var li = document.getElementById('link');

	
tog.onclick = ()=>{ 
	nav.classList.toggle('nav_1'); 
	tog.classList.toggle('tore');
}

titleone = document.getElementById('titleone');

window.onload = ()=>{
	titleone.style.transform = ('translateX(0)');
}


let animado = document.querySelectorAll(".animado");

function scrollMostrar(){

	let scrollTop = document.documentElement.scrollTop;
	for (i = 0; i < animado.length; i++ ) {
		let alturanimado = animado[i].offsetTop; 

	if (alturanimado - 600 < scrollTop ) {
		animado[i].style.opacity = 1;

	}
 }
}


window.addEventListener("scroll", scrollMostrar);
