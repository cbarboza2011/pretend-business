$(document).ready(function() {

  // OPEN NAV MENU ON MOBILE
  $('#navbutton').on('click', function() {
    if ($('#navlist').is(':visible')) {
      $('#navlist').slideToggle();
      $('#navbutton').text('☰');
    } else {
      $('#navlist').slideToggle();
      $('#navbutton').text('X');
    }
  });

});
