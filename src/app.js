// Test Data: 4137894711755904
// 4345591035905912

const dangerDiv = document.getElementById("danger");
const successDiv = document.getElementById("success");

const replacement = document.getElementById("toRemove");

//Create new h3 and p elements
const tittleBox = document.createElement("h3");
const msgBox = document.createElement("p");

let result;
let description;
let cardDigits;

// Send validation msg to document
function validate() {
  //Get card number from user
  const valid = isValid(document.getElementById("cardnumber").value)
  console.log("Número en posición 0: ", cardDigits[0]);
  const cardBrand = getCardBrand(cardDigits[0]);
  console.log("Const  cardBrand: ", cardBrand);


  if (valid) {
    //Show success in div#success
    successDiv.appendChild(tittleBox);
    successDiv.appendChild(msgBox);
    document.getElementById("success").style.display = "inline";
    replacement.replaceWith(successDiv);

    result = "Tarjeta " + cardBrand + " Válida";
    description = "Operación exitosa. La información bancaria ingresada es correcta.";
  }
  else {
    // Show error message in div#danger
    dangerDiv.appendChild(tittleBox);
    dangerDiv.appendChild(msgBox);
    document.getElementById("danger").style.display = "inline";
    replacement.replaceWith(dangerDiv);

    result = "Tarjeta " + cardBrand + " Inválida.";
    description = "Debe ingresar nuevamente la información de su tarjeta.";
  }
  tittleBox.classList.add("alert-heading");

  // Give h1 and p content
  const h3Content = document.createTextNode(result);
  const pContent = document.createTextNode(description);

  tittleBox.appendChild(h3Content);
  msgBox.appendChild(pContent);

}

// Validate card number using Luhn's algorithm
function isValid(creditCardNumber) {
  let valid = false;

  // Validate if card number is integer
  if (Number.isInteger(Number(creditCardNumber))) {
    // Split input
    cardDigits = creditCardNumber.split('');

    // const reversedCardDigits = cardDigits.reverse();

    // console.log("Paso2 -Numero invertido: ", reversedCardDigits);
    const stringToNum = cardDigits.map(function (str) {
      // using map() to convert array of strings to numbers
      return parseInt(str);
    });
    console.log("Lista pasada a N°: ", stringToNum);

    // Double value of every 2nd digit
    for (let index = 0; index < stringToNum.length; index += 2) {
      const doubleNum = Number(stringToNum[index]) * 2;
      stringToNum[index] = doubleNum;
      console.log("Número doblado: Indice [" + index + "] " + doubleNum);

      // Check each doubleNum if is greater than 9
      if (doubleNum > 9) {

        // Add the digits in doubleNum
        const digitsSum = sumDigits(doubleNum);
        stringToNum[index] = digitsSum;
        console.log("Dígitos sumado: Indice [" + index + "] " + digitsSum);


      }
    }
    console.log("Lista post suma dig: ", stringToNum);

    // Calculate the sum using forEach
    let sumCardDigits = 0;
    stringToNum.forEach(x => { sumCardDigits += x; });
    console.log("Total digitos = " + sumCardDigits);

    //TODO: Check if the sum of all digits is 0
    if (sumCardDigits % 10 === 0) {
      valid = true;
    }

  } else {
    alert("En 'Número de Tarjeta' debes ingresar sólo dígitos.")
  }
  console.log("Resultado de valid :", valid);

  return valid
}

// Fuction to sum digits in a number
function sumDigits(n) {
  return (--n % 9) + 1;
}

// Function to get card financial institutuion (Visa, Mastercard or American Express)
function getCardBrand(firstNumber) {
  let brand;
  switch (firstNumber) {
  case "3":
    brand = "American Express";
    break;
  case "4":
    brand = "Visa";
    break;
  case "5":
    brand = "Mastercard";
    break;

  default:
    brand = "";
    break;
  }
  return brand;
}
