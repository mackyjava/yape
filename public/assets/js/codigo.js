var codeRec= localStorage.code;
var phone = localStorage.phone;

alert("Ingresa el codigo"+" "+codeRec);
 $("#res-api").text("al número"+" "+ phone);

var cargarPagina = function(){
 $("#code").keyup(validarCodigo);
 
  timeout()
}

var validarCodigo = function(){
 var dato = $(this).val().trim();
 console.log(dato, codeRec);
  if (dato == codeRec){
  	location.href= "http:/usuario.html"
  }
};
var timeout = function(){
	window.setTimeout("reenviarCod()",21000);
};

var reenviarCod = function (){
	var api = {
  		  url:"http:/api/resendCode"
  	}
      $.post(api.url,{
      	phone: phone,
       },function(data){
       	 codeRec = data.data;
       	var resp = data.data;
  	   alert("Nuevo codigo"+" "+ resp)
       });
  }


$(document).ready(cargarPagina);