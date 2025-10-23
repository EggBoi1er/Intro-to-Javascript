const h1 = document.getElementById("heading"); // this will return null if the script is in the head without defer
// also returns if there is no element with that id
// use querySelector to get by class or tag name so instead of heading you can do ".heading" or "h1"
h1.textContent = "Hello CS 2250, from JS";
