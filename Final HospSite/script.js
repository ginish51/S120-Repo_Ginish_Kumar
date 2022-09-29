function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
function bgChange() {
  let colour = document.getElementById("bgChoice").value;
  document.body.style.backgroundColor = colour;
  localStorage.setItem("bgColour", colour);
}

function bgSave(colour) {
  document.body.style.backgroundColor = colour;
  localStorage.setItem("bgColour", colour);
}

let bgChoice = localStorage.getItem("bgColour");
if (bgChoice != null) {
  bgSave(bgChoice);
}

function resetDefault() {
  bgSave("#C78969");
}