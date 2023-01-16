
// TODO: solo dígitos
// TODO:  validar número
// TODO:  imprimir si es "válida" o no
// TODO
// TODO



const valid = false;

const dangerDiv = document.getElementById("danger");
const successDiv = document.getElementById("success");

const replacement = document.getElementById("toRemove");

// Create new h3 and p elements
const tittleBox = document.createElement("h3");
const msgBox = document.createElement("p");

let result;
let description;

function validate() {
  //Get card number from user
  // const valid = isValid(document.getElementById("cardnumber").value)
  if (valid) {
    //Show success in div#result
    successDiv.appendChild(tittleBox);
    successDiv.appendChild(msgBox);
    document.getElementById("success").style.display = "inline";
    replacement.replaceWith(successDiv);

    result = "Tarjeta Válida";
    description = "Operación exitosa. </br>La información bancaria ingresada es correcta.";
  }
  else {
    // TODO: Show error message in div#result
    dangerDiv.appendChild(tittleBox);
    dangerDiv.appendChild(msgBox);
    document.getElementById("danger").style.display = "inline";
    replacement.replaceWith(dangerDiv);

    result = "Tarjeta Inválida.";
    description = "Debe ingresar nuevamente la información de su tarjeta.";
  }
  tittleBox.classList.add("alert-heading");

  // Give h1 and p content
  const h3Content = document.createTextNode(result);
  const pContent = document.createTextNode(description);

  tittleBox.appendChild(h3Content);
  msgBox.appendChild(pContent);

}

function isValid(creditCardNumber) {

   // Validate if card number is integer
  if (Number.isInteger(creditCardNumber)){
    //TODO: Split input

    //TODO: 


  } else {
    alert("En 'Número de' debes ingresar sólo dígitos.")
  }
  // is creditCardNumber valid?
  //


  return false
}
