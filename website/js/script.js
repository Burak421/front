jQuery(document).ready(function() {
  $(".navbar-toggler").click(function() {
    // Toggle the "show" class on the collapsible div
    $("#navbar1").toggleClass("show");

    // Toggle the rotation of the toggle icon
    $(this).find("i").toggleClass("fa-bars fa-times");
  });

  // Handle click outside of the collapsible div to close it
  $(document).click(function(event) {
    if (!$(event.target).closest(".navbar").length) {
      $("#navbar1").removeClass("show");
      $(".navbar-toggler i").removeClass("fa-times").addClass("fa-bars");
    }
  });
});
