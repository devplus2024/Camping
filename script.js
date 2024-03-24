const element = document.getElementById("myElement");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", function () {
  if (element.classList.contains("existingClass")) {
    element.classList.remove("existingClass");
    element.classList.add("newClass");
  } else {
    element.classList.remove("newClass");
    element.classList.add("existingClass");
  }
});


