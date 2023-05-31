function startBlinking() {
  var link = document.getElementById("myText");
  link.classList.add("blinking");
  setTimeout(function() {
    link.classList.remove("blinking");
  }, 10000); // 10 seconds
}
document.getElementById("myButton").addEventListener("click", function(event) {
	// alert("")
  event.preventDefault(); // Prevents the default link behavior

  setTimeout(function() {
    var newTab = window.open("https://akshitchilkoti.netlify.app", "_blank"); // Replace with your desired link
    newTab.focus();
  }, 8000); // 5000 milliseconds = 5 seconds
});

document.getElementById("myButton").addEventListener("click", function() {
  alert("If the link does not opens in 10 seconds, please enable pop ups in your web browser. Also you can see about me HERE ON THE TOP→");
});

