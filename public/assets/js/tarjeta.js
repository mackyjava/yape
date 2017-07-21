var valida = false;
var mesVal = false;
var yearVal = false;
var numTar = 0;
var month = 0;
var digAnio = 0;

var cargarPagina = function(){
	$("#tarjeta").keyup(validarTarjeta);
	$("#mes").keyup(validarMes);
	$("#year").keyup(validarYear);
	$("form").submit(guardarDatos);
	   
}

var validarTarjeta = function(){
	var tarjeta = $("#tarjeta").val();
	var index =$(this).val().trim().length
	if(index === 16){
		numTar = tarjeta;
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
     	  month = mes;
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
          digAnio = year;
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
var guardarDatos = function(e){
	e.preventDefault();
	 
  	   localStorage.setItem("cardNumber", numTar);
       localStorage.setItem("cardMonth",month);
       localStorage.setItem("cardYear", digAnio);
       location.href = "http:/tarjcod.html"	
}


$(document).ready(cargarPagina);