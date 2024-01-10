let earningsElement = document.querySelector(".js-formFieldEarnings");
let bruttoNettoElement = document.querySelector(".js-formBruttoNetto");
let nettoBruttoElement = document.querySelector(".js-formNettoBrutto");
let formCalculateElement = document.querySelector(".js-formCalculate");
let typeOfContractElement = document.querySelector(".js-formTypeOfContract");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let rateUOP = 5*5 +250;
  let rateUOD = 6;
  let rateUZ = 7;
  let rateB2B = 8;
  
  let bruttonetto = 2;
  let nettobrutto = 3;

  let earnings = +earningsElement.value;
  let typeOfContract = typeOfContractElement.value;

  let result;
  
  switch (typeOfContract) {
    case "UOP":
      result = earnings / rateUOP;
      break;

    case "UOD":
      result = earnings * rateUOD;
      break;

    case "UZ":
      result = earnings + rateUZ;
      break;

    case "B2B":
      result = earnings - rateB2B;
      break;
      
  }

  resultElement.innerHTML = `<strong>${result.toFixed(2)} PLN</strong>`;
});
