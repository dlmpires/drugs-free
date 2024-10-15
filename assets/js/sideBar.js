$(window).click(function (e) {
  if (!$('.sidebar').is(e.target) && $('.sidebar').has(e.target).length === 0 & $('.sidebar').hasClass('open')) {
    toggleSidebar();
  }
});

$('#sidebar-btn').click(function () {
  toggleSidebar();
});

$('.bx.bx-search').click(function () {
  toggleSidebar();
});

// Change BTN Icon
function toggleSidebar() {
  $('.sidebar').toggleClass('open');
  if ($('.sidebar').hasClass('open')) {
    $('#btn').removeClass('fa-bars').addClass('fa-xmark');
  }
  else {
    $('#btn').removeClass('fa-xmark').addClass('fa-bars');
  }
}
