function validateForm() {
    let x = document.forms["myForm"]["Name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    let y = document.forms["myForm"]["Email"].value;
    if (y == "") {
      alert("Email address must be provided");
      return false;
    }
  }