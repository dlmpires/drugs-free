$('#popUpSections').hide()

$('#aboutUs').click(function () {
    if ($('#popUp').hasClass('showPopup')) {
        $('#popUpSections').fadeOut(500)
        setTimeout(function() { $('#popUp').toggleClass('showPopup') }, 500)
        $('html, body').css({
            overflow: 'auto'
        });
    }
    else {
        $('#popUpSections').fadeIn(500)
        $('#popUp').toggleClass('showPopup')
        $('html, body').css({
            overflow: 'hidden'
        });
    }
})

$('#popupClose').on('click', function () {
    $('#popUpSections').fadeOut(500)
    setTimeout(function() { $('#popUp').toggleClass('showPopup') }, 500)
    $('html, body').css({
        overflow: 'auto'
    });
})


function showPopup() {
    $('#popUpSections').fadeOut(500)
    setTimeout(function() { $('#popUp').toggleClass('showPopup') }, 500)
    $('html, body').css({
        overflow: 'auto'
    });
}

function hidePopUp() {
    $('#popUpSections').fadeOut(500)
    setTimeout(function() { $('#popUp').toggleClass('showPopup') }, 500)
    $('html, body').css({
        overflow: 'auto'
    });
}
