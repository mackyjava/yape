var nombreValido = 0;
var mailValido = 0;
var clave = 0;
var telefono = localStorage.phone;
var nombreR = 0;
var mailR = 0;
var passR = 0;



var cargarPagina= function(){
	$("#name").keyup(validarNombre);
	$("#email").keyup(validarMail);
	$("#pass").keyup(validarPass);
	$("form").submit(cargarDatosUsuario);
	
}

var validarNombre =function(){
	var nombre = $("#name").val();
	var filtro = /^[A-Za-z\s\xF1\xD1]+$/;
  var igData = filtro.test(nombre)
    if(nombre.length > 13 && igData == true ) {
    	nombreValido = true;
      nombreR = nombre;
  }console.log(nombreR);
};

var validarMail = function(){
	var mail = $("#email").val();
	var filtro =   /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
	 if(mail.length > 0 && mail.match(filtro)) {
        mailValido = true;
        mailR = mail;
  }

};
 
var validarPass = function(){
	var pass = parseInt($("#pass").val());
	var conteo =$(this).val().trim().length
	// var filtro = /^[0-9]$/;
	console.log(pass);
	 if(conteo === 6){
            clave = true;
            passR = pass;
            habilitarBoton();
	 }else if(conteo > 6) {
                alert("Ingresa contraseña valida solo 6 digitos");
                $("#pass").val('');
                clave = 0;
	 }

};

var habilitarBoton = function(){
	  var $boton = $("#crear");
	if(nombreValido == mailValido == clave){
    console.log(nombreValido, mailValido, clave, telefono);

		      $boton.removeAttr("disabled");
       }
};

 var cargarDatosUsuario = function(e){
  	e.preventDefault();
  	var api = {
  		  url:"http:/api/createUser"
  	}
      $.post(api.url,{
      	phone:telefono,
      	name: nombreR,
      	email: mailR,
      	password: passR,
       },function(data){
       	var nombre = data.data.name;
        var email = data.data.email;
        var password =data.data.password;
  	   localStorage.setItem("name", nombre);
       localStorage.setItem("email", email);
       localStorage.setItem("password",password);
  	    redirigir()
       });
    }
    var redirigir = function(){
      location.href = "http:/listo.html"
    }


$(document).ready(cargarPagina);



