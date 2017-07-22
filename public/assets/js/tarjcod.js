var user = localStorage.phone;
var cardN = localStorage.cardNumber;
var cardM = localStorage.cardMonth;
var cardY = localStorage.cardYear;
var password = 0;
console.log(user, cardN, cardM, cardY);



var cargarPagina = function(){
	$("#aut").keyup(validarAuth);
	$("form").submit(mandarDatos);
	$("#numerotar").text("Num. Tarjeta"+ " "+"**********"+cardN[11] + cardN[12]+cardN[13]+cardN[14]+ cardN[15]);
}

var validarAuth = function(){
	var numAuth = $("#aut").val();
	var long = $(this).val().trim().length
	var $boton = $("#autorizar");
	if (long === 4){
          $boton.removeAttr("disabled");
          localStorage.setItem("password",numAuth);

	}else if (long> 4){
		alert("Introduce clave de seguridad válida");
		$boton.attr("disabled", true);
	}

};

var mandarDatos = function(e){
     e.preventDefault();
      password= localStorage.password;

     var api = {
  		  url:"http:/api/registerCard"
  	}
      $.post(api.url,{
      	phone: user,
      	cardNumber:cardN,
      	cardMonth: cardM,
      	cardYear: cardY,
      	cardPassword: password,
       },function(data){
       	
        localStorage.setItem("card",cardN);
        localStorage.setItem("month",cardM);
        localStorage.setItem("year",cardY);
        localStorage.setItem("password",password);
        location.href = "/ultima.html"
       });
	
}

$(document).ready(cargarPagina);
