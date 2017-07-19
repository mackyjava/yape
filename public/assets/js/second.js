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
    if(caracteres == 10) {
    	$('#terms').on( 'click', function() {
  	      var $addButton = $("#add-button");
            if( $(this).is(':checked')){
            	$addButton.removeAttr("disabled");
            	acepTerms = true;
                return acepTerms;
              
            } else {
                
               $addButton.attr("disabled", true);
               acepTerms = false;
               return acepTerms;
            }
          });console.log(telephone);
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
  	   localStorage[resp] = resp;
  	   console.log(localStorage[resp]);
       });
    }
$(document).ready(cargarPagina);
