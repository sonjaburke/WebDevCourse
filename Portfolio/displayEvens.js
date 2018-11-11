function clearErrors() {
  for (var loopCounter = 0;
    loopCounter < document.forms["numberFun"].elements.length;
    loopCounter++) {
    if (document.forms["numberFun"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {

      document.forms["numberFun"].elements[loopCounter].parentElement.className = "form-group";
    }
  }
}

function resetForm() {
  clearErrors();
  document.forms["numbersFun"]["num1"].value = "";
  document.forms["numbersFun"]["num2"].value = "";
  document.getElementById("results").style.display = "none";
  document.getElementById("submitButton").innerText = "Submit";
  document.forms["numberFun"]["num1"].focus();
}

function validateItems() {
  clearErrors();
  var startNumber = document.forms["numberFun"]["startNumber"].value;
  var endNumber = document.forms["numberFun"]["endNumber"].value;
  var stepNumber = document.forms["numberFun"]["stepNumber"].value;
  if (startNumber == "" || isNaN(startNumber)) {
    alert("Starting Number must be filled in with a number.");
    document.forms["numberFun"]["startNumber"].parentElement.className = "form-group has-error";
    document.forms["numberFun"]["startNumber"].focus();
    return false;
  } else if (endNumber <= startNumber) {
    alert("Starting Number must be a less than Ending Number");
    document.forms["numberFun"]["startNumber"].parentElement.className = "form-group has-error";
    document.forms["numberFun"]["startNumber"].focus();
    return false;
  }
  if (endNumber == "" || isNaN(endNumber)) {
    alert("Ending Number must be filled in with a number.");
    document.forms["numberFun"]["endNumber"].parentElement.className = "form-group-has-error"
    document.forms["numberFun"]["endNumber"].focus();
    return false;
  }
  if (stepNumber == "" || isNaN(stepNumber)) {
    alert("Step Number must be filled in with a number.");
    document.forms["numberFun"]["stepNumber"].parentElement.className = "form-group-has-error"
    document.forms["numberFun"]["StepNumber"].focus();
    return false;
  }
  if (stepNumber < 0) {
    alert("Step Number must be a positive number.");
    document.forms["numberFun"]["stepNumber"].parentElement.className = "form-group has-error";
    document.forms["numberFun"]["stepNumber"].focus();
    return false;
  }

}

function calculateItems() {
  validateItems();
  var startNumber = Number(document.forms["numberFun"]["startNumber"].value);
  var endNumber = Number(document.forms["numberFun"]["endNumber"].value);
  var stepNumber = Number(document.forms["numberFun"]["stepNumber"].value);
  document.getElementById("results").style.display = "block";
  document.getElementById("submitButton").innerText = "Recalculate";
  var results = new Array();
  var subarraylength = Math.floor((endNumber - startNumber) / stepNumber)
  for (i = 0; i <= subarraylength; i++) {
    if ((startNumber + i * stepNumber) % 2 == 0) {
      results[results.length] = startNumber + i * stepNumber
    }
  }
  document.getElementById("results").innerText = results
  return false;

}
