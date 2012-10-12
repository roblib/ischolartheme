if (Drupal.jsEnabled) {
  $(document).ready(function(){
    $('.menu-item-id-279').bind('click', function(e) {

      // Prevent Default Link Behavior
      e.preventDefault();

      // Toggle the Login Box
      $('.region-user-first').slideToggle('slow', function() {});
        
      // Toggle the Login Text
      var text = $('.menu-item-id-279').text();
      $('.menu-item-id-279').text(text == "Menu" ? "Close" : "Menu");

      // Return False for Good Measure
      return false;
    });
  });
}