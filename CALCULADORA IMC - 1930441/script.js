function calcularIMC() {
  var nombre = document.getElementById('nombre').value;
  var alturaEnCentimetros = parseInt(document.getElementById('altura').value);
  var alturaEnMetros = alturaEnCentimetros / 100;
  var pesoEnKilos = parseInt(document.getElementById('peso').value);

  var imc = Math.round(pesoEnKilos / (alturaEnMetros * alturaEnMetros));
  var clasificacion;
  
  if (imc < 18.5) {
    clasificacion = 'Ups.. estás muy delgado';
  } else if (imc < 25) {
    clasificacion = 'Felicidades.. estás saludable';
  } else {
    clasificacion = 'tienes sobrepeso.. ¡Ve al doctor!';
  }
  /* Consejo:
  
  */
  var respuesta = 'Hola, tu IMC es ' + imc + ' y tu ' + clasificacion;
  alert(respuesta);
}