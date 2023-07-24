(function($) {
  // Function to handle the toggler click event
  $(".navbar-toggler").click(function() {
    // Toggle the "show" class on the collapsible div
    $("#navbar1").toggleClass("show");

    // Toggle the rotation of the toggle icon
    $(this).find("i").toggleClass("fa-bars fa-times");
  });

  // Function to handle click outside of the collapsible div to close it
  $(document).click(function(event) {
    if (!$(event.target).closest(".navbar").length) {
      $("#navbar1").removeClass("show");
      $(".navbar-toggler i").removeClass("fa-times").addClass("fa-bars");
    }
  });
})(jQuery);

// Function to set the cookie when the user clicks "Got It!"
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// Function to check if the user has already accepted the cookies
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) == 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}

// Function to show or hide the cookie consent banner
function checkCookieConsent() {
  var cookieConsentBanner = document.getElementById('cookieConsentBanner');
  if (!getCookie('cookie_consent')) {
    cookieConsentBanner.style.display = 'block';
  }
}

// Function to hide the cookie consent banner when the user clicks "Got It!"
function acceptCookies() {
  var cookieConsentBanner = document.getElementById('cookieConsentBanner');
  setCookie('cookie_consent', 'true', 365); // Set the cookie to last for one year
  cookieConsentBanner.style.display = 'none';
}

// Event listener for the "Got It!" button
document.getElementById('cookieConsentButton').addEventListener('click', acceptCookies);

// Check the cookie consent when the page loads
window.addEventListener('load', checkCookieConsent);
