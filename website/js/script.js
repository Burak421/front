(function($) {
  // Function to handle the toggler click event
  $(".navbar-toggler").click(function() {
    // Toggle the "show" class on the collapsible div
    $("#navbar1").toggleClass("show");

    // Toggle the rotation of the toggle icon
    $(this).find("i").toggleClass("fa-bars fa-times");
  });
})(jQuery);

// Check if the cookie banner should be displayed
function shouldShowCookieBanner() {
  return !localStorage.getItem('cookieConsent');
}

// Close the cookie banner and store the user's consent
function closeCookieBanner() {
  document.getElementById('cookieBanner').style.display = 'none';
  localStorage.setItem('cookieConsent', 'true');
}

// Event listener for the "Got it!" link
document.getElementById('cookieClose').addEventListener('click', function (e) {
  e.preventDefault();
  closeCookieBanner();
});

// Display the cookie banner if user has not consented yet
if (shouldShowCookieBanner()) {
  document.getElementById('cookieBanner').style.display = 'block';
}
