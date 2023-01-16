//Play initial animations on page load.
$(function() {
    $('#load-first').css('opacity', '0').fadeTo(2000, 1);
    $('#load-second').css('opacity', '0').delay(500).fadeTo(2000, 1);
});


// Preload Jet image
var image = new Image();
image.src = "jet2.jpg";