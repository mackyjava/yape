var cargarPagina = function(){
	timeout();
}
var timeout = function(){
	window.setTimeout("redirect()",3000)
}
var redirect = function(){
	location.href= "http:/tarjeta.html"
}

$(document).ready(cargarPagina);