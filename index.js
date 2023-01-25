
// Get the element with the ID "menu"
var menu = document.getElementById("menu");

// Add a click event listener to the menu
menu.addEventListener("click", function() {
  // When the menu is clicked, toggle the class "open"
  menu.classList.toggle("open");
});
