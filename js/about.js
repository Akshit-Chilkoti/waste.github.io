

function checkPassword() {
  var password = prompt("Opening...");

  if (password === "You Want to see my Account? Ha") {
    window.open("https://linktr.ee/akshitchilkoti", "_blank");
  } else {
    alert("There was an error, please restart your web browser or your computer.");
  }
}


function checkSite() {
  var srno = prompt("Please Enter the Serial Number: 1 For Personal Webpage, 2 For Animator8 Inc. Webpage");

  if (srno == 1) {
    window.open("https://akshitchilkoti.netlify.app", "_blank");
  } else if (srno == 2) {
    window.open("https://animator8.netlify.app")
  }
  else {
    alert("Wrong Serial Number, Please retry.")
  }
}

// window.addEventListener("DOMContentLoaded", showPopup);

// function showPopup() {
//   var popup = document.getElementById("popup");
//   popup.style.display = "block";
// }

// function hidePopup() {
//   var popup = document.getElementById("popup");
//   popup.style.display = "none";
// }
