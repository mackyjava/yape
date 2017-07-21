var valida = false;
var mesVal = false;
var yearVal = false;

var cargarPagina = function(){
	$("#tarjeta").keyup(validarTarjeta);
	$("#mes").keyup(validarMes);
	$("#year").keyup(validarYear);
	$("form").submit(redireccionar);
	   
}

var validarTarjeta = function(){
	var tarjeta = $("#tarjeta").val();
	var index =$(this).val().trim().length
	if(index === 16){
         valida = true;
         habilitarBoton()
	}else if(index > 16){
		valida = false;
		alert("Introduce un número de tarjeta válido")
	}
}
var validarMes = function(){
   var mes = $("#mes").val();
   var index = $(this).val().trim().length
     if(index ==1|| index ==2 && mes < 13 && mes>0){
          mesVal = true;
          console.log(mesVal)
     }else if(index>2){
     	alert("Introduce un mes válido")
     }
}

var validarYear = function(){
   var year = $("#year").val();
   var index =$(this).val().trim().length
     if(index ===2 && year < 28 && year>17){
          yearVal = true;
          habilitarBoton();
          console.log(yearVal)
     }else if(index>3){
     	alert("Introduce un año válido");
     }
}

var habilitarBoton = function(){
	var $boton = $("#continuar");
	if(valida ===true && mesVal === true && yearVal===true){
		console.log(valida, mesVal, yearVal)
		$boton.removeAttr("disabled")
	}
}
var redireccionar = function(e){
	e.preventDefault();
	location.href = "http:/tarjcod.html"
}


$(document).ready(cargarPagina);