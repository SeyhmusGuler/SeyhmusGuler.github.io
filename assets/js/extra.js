function toggleElementDisplay(elementID) {
    var element = document.getElementById(elementID),
        style = window.getComputedStyle(element),
        display = style.getPropertyValue("display");

    if (display == "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}

$('.expedition-info-link').on('click', function() {
  $('i', this).toggleClass('fa-angle-down fa-angle-up');
});
