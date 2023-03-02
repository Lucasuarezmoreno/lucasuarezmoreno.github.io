function enviarCorreo(){
  var Nombre = $("#Nombre");
  var Email = $("#Email");
  var Mensaje = $("#Mensaje");
  var valido = 1;
  var validacion_correo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
  var datos = 'Email=' + correo + '&Mensaje=' + mensaje;
        $.ajax({
			type: "POST",
			url: "enviar.php",
			data: datos,
			success: function(res) {
 
			},
			error: function(res) {
			}
		});
}