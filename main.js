// Play initial animations on page load.
$(window).on('load', function() {
    $('.hidden').removeClass('hidden');
});

// Preload Jet image
var image = new Image();
image.src = "jet2.jpg";