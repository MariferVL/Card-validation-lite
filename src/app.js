
// TODO: Permitir insertar número de tarjeta 
// TODO: solo dígitos
// TODO: campo requerido
// TODO:  validar número
// TODO:  imprimir si es "válida" o no
// TODO
// TODO


function validate() {
  const valid = isValid(document.getElementById("cardnumber").value)
  if (valid) {
    // Show success in div#result
  }
  else {
    // Show error message in div#result
  }
}

function isValid(creditCardNumber) {
  // is creditCardNumber valid?

  
  return false
}
