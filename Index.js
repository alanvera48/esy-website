
titleone = document.getElementById('titleone');

window.onload = ()=>{
	titleone.style.transform = ('translateX(0)');
}




var tog = document.getElementById('tog');
var nav = document.getElementById('nav');
var li = document.getElementById('link');

	
tog.onclick = ()=>{ 
	nav.classList.toggle('nav_1'); 
	tog.classList.toggle('tore');
}



let animado = document.querySelectorAll(".animado");

function scrollMostrar(){

	let scrollTop = document.documentElement.scrollTop;
	for (i = 0; i < animado.length; i++ ) {
		let alturanimado = animado[i].offsetTop; 

	if (alturanimado - 700 < scrollTop ) {
		animado[i].style.opacity = 1;

	}
 }
}


window.addEventListener("scroll", scrollMostrar);



send = document.getElementById('send');
mensage = document.getElementById('mensage');
popup =document.getElementById('popup');
close = document.getElementById('btn-cerrar');

send.addEventListener('click', function(){
 mensage.classList.add('active');
 popup.classList.add('escala');

});

close.addEventListener('click', function () {
	popup.classList.remove('escala'); 
	mensage.classList.remove('active');
	
});