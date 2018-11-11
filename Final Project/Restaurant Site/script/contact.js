//Name: Sonja Burke
//Date Created: 10/30/18
//Most recent revision: 11/10/18

function validateItems() {
  var name = document.forms["contactform"]["name"].value;
  var email = document.forms["contactform"]["email"].value;
  var phone = document.forms["contactform"]["phone"].value;
  var reason = document.forms["contactform"]["reason"].value;
  if (name != "" && email != "" && phone != "" && reason != "") {
    alert("All required information is valid.");
    return false;
  }
}
