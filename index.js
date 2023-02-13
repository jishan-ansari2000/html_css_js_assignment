function myFunction() {
  var x = document.getElementById("mynav");
  console.log(x);
  if (x.className === "navbarRightBottom") {
    x.className += " responsive";
  } else {
    x.className = "navbarRightBottom";
  }
}
