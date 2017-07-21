var cargarPagina = function(){
	$("#aut").keyup(validarAuth);
	$("form").submit(redirigir);
}

var validarAuth = function(){
	var numAuth = $("#aut").val();
	var long = $(this).val().trim().length
	var $boton = $("#autorizar");
	if (long === 4){
          $boton.removeAttr("disabled")
	}else if (long> 4){
		alert("Introduce clave de seguridad válida");
		$boton.attr("disabled", true);
	}

};

var redirigir = function(e){
     e.preventDefault();
	location.href = "http:/ultima.html";
}


$(document).ready(cargarPagina);
