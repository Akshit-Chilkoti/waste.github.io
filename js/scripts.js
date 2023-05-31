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
    var newTab = window.open("about.html", "_blank"); // Replace with your desired link
    newTab.focus();
  }, 2000); 
});

document.getElementById("myButton").addEventListener("click", function() {
  alert("If the link does not opens in 5 seconds, please enable pop ups in your web browser or click HERE ON THE TOP→");
});


document.addEventListener('DOMContentLoaded', function() {
  var myModal = new bootstrap.Modal(document.getElementById('popup'), {
    backdrop: 'static',
    keyboard: false
  });
  myModal.show();
});

