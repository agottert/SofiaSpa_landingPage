var initPS = function(selector) {
  var $pswp = $('.pswp')[0];
  $(selector).each(function() {
    var $pic = $(this);
    var items = $.map($pic.find('a'), function(elem) {
      var $size = $(elem).data('size').split('x');
      return {
        src: $(elem).attr('href'),
        w: $size[0],
        h: $size[1]
      }
    });
    $pic.on('click', 'a', function(event) {
      event.preventDefault();
      var index = $('a', $pic).index(event.currentTarget);
      var options = {
        history: false,
        index: index,
        showHideOpacity: true
      }

      // Initialize PhotoSwipe
      var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
      lightBox.init();
    });
  });
}
