// Function to handle the toggler click event
function handleTogglerClick() {
  $("#navbar1").toggleClass("show");
  const icon = $(".navbar-toggler i");
  icon.toggleClass("fa-bars fa-times");
}

// Function to handle click outside of the collapsible div to close it
function handleOutsideClick(event) {
  if (!$(event.target).closest(".navbar").length) {
    $("#navbar1").removeClass("show");
    $(".navbar-toggler i").removeClass("fa-times").addClass("fa-bars");
  }
}

// Check if the cookie banner should be displayed
function shouldShowCookieBanner() {
  return !localStorage.getItem("cookieConsent");
}

// Close the cookie banner and store the user's consent
function closeCookieBanner() {
  document.getElementById("cookiePopup").style.display = "none";
  localStorage.setItem("cookieConsent", "true");
}

// Event listener for the "Got it!" button
document.getElementById("cookieClose").addEventListener("click", function (e) {
  e.preventDefault();
  closeCookieBanner();
});

// Event listener for the toggler click
$(".navbar-toggler").click(handleTogglerClick);

// Event listener for click outside of the collapsible div
$(document).click(handleOutsideClick);

// Display the cookie banner if the user has not consented yet
$(document).ready(function () {
  if (shouldShowCookieBanner()) {
    document.getElementById("cookiePopup").style.display = "block";
  }
});
