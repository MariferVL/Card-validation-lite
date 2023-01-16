
// Test Data: 4137894711755904

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
  const valid = isValid(document.getElementById("cardnumber").value)
  if (valid) {
    //Show success in div#result
    successDiv.appendChild(tittleBox);
    successDiv.appendChild(msgBox);
    document.getElementById("success").style.display = "inline";
    replacement.replaceWith(successDiv);

    result = "Tarjeta Válida";
    description = "Operación exitosa.<br>La información bancaria ingresada es correcta.";
  }
  else {
    // Show error message in div#result
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
  let valid = false;

  // Validate if card number is integer
  if (Number.isInteger(Number(creditCardNumber))) {
    // Split input
    const cardDigits = creditCardNumber.split('');

    let stringToNum = cardDigits.map(function(str) {
      // using map() to convert array of strings to numbers
      return parseInt(str); });

    // Double value of every 2nd digit
    for (let index = 0; index < stringToNum.length; index += 2) {
      const doubleNum = Number(stringToNum[index]) * 2;
      stringToNum[index] = doubleNum;

      // Check each doubleNum if is greater than 9
      if (doubleNum > 9) {

        // Add the digits in doubleNum
        const digitsSum = sumDigits(doubleNum);
        stringToNum[index] = digitsSum;

      }
    }
    console.log("Lista post suma dig: ",stringToNum);

    // Calculate the sum using forEach
    let sumCardDigits = 0;
    stringToNum.forEach(x => {sumCardDigits += x;});
    console.log("Total digitos = " + sumCardDigits);

    //TODO: Check if the sum of all digits is 0
    if (sumCardDigits % 10 === 0) {
      valid = true;
    }

  } else {
    alert("En 'Número de Tarjeta' debes ingresar sólo dígitos.")
  }
  console.log("Resultado de valid :",valid);

  return valid
}


function sumDigits(n) {
  return (--n % 9) + 1;
}


