 var telephone = 0;
 var acepTerms = 0;
var cargarPagina= function(){
	$("form").submit(cargarDatos);
	$("#phone").keyup(validarDatos);
	
} 
var validarDatos = function () {
	  var $addButton = $("#add-button");
    var caracteres =$(this).val().trim().length
       telephone = parseInt($("#phone").val());
    if(caracteres === 10) {
    	$('#terms').on( 'click', function() {
  	      var $addButton = $("#add-button");
            if( $(this).is(':checked')){
            	$addButton.removeAttr("disabled");
            	acepTerms = true;
                return acepTerms; 
            }
          });console.log(telephone);
        }else if(caracteres > 10) {
                alert("ingresa numero valido");
                var $input = $("#phone");
                $("#phone").val('');
                telephone = 0;
              }
      };
  var cargarDatos = function(e){
  	e.preventDefault();
  	var api = {
  		  url:"http:/api/registerNumber"
  	}
      $.post(api.url,{
      	phone: telephone,
      	terms:acepTerms,
       },function(data){
       	var resp = data.data.code;
        var phone = data.data.phone
  	   localStorage.setItem("code", resp);
       localStorage.setItem("phone",phone);
  	    redirigir()
       });
    }
    var redirigir = function(){
      location.href = "http:/codigo.html"
    }
$(document).ready(cargarPagina);
