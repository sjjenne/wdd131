function validateForm(event) {
  const theForm = event.target;
  const errors = [];

  let isValid = true;
  
  if (!isValid) {
    event.preventDefault();
    showErrors(errors);
    return false;
  }
}

function togglePaymentDetails(e) {
  const theForm = document.querySelector("#checkoutForm");

  const creditCardContainer = document.getElementById("creditCardNumberContainer");
  const paypalContainer = document.getElementById("paypalUsernameContainer");

  creditCardContainer.classList.add("hide");
  paypalContainer.classList.add("hide");

  theForm.creditCardNumber.required = false;
  theForm.paypalUsername.required = false;

  if (theForm.paymentMethod.value === "creditCard") {
    creditCardContainer.classList.remove("hide");
    theForm.creditCardNumber.required = true;
  } else if (theForm.paymentMethod.value === "paypal") {
    paypalContainer.classList.remove("hide");
    theForm.paypalUsername.required = true;
  }

}

function showErrors(errors) {
  const errorEl = document.querySelector(".errors");
  const html = errors.map((error) => `<p>${error}</p>`);
  errorEl.innerHTML = html.join("");
}


// attach a change event handler to the paymentMethod input

document
  .querySelector("#paymentMethod")
  .addEventListener("change", togglePaymentDetails);