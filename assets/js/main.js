


$('input').keydown(function(e) {
  if (e.keyCode == 13)
    macBounce($('#lock'), 4, '20px', 50);
});

function macBounce(element, times, distance, speed) {
  for (i = 0; i < times; i++) {
    element.animate({
        'margin-left': '-=' + distance
      }, speed)
      .animate({
        'margin-left': '+=' + distance
      }, speed);
  }
}

var flag = false;

function cancel() {
  $('body').toggleClass('clickedBody');
  $('#lock').toggleClass('clickedIcon');
  $('.cancel').toggleClass('clickedIcon');
  flag = flag ? false : true;
}

$('#icon').click(cancel);