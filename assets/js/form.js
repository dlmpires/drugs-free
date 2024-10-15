let formStepsNum = 0

$('.form-checkbox').each(function() {
  $(this).load('../include/checkbox-svg.html')
})

$('.btn-proximo').each(function() {
  $(this).on('click', function () {
    if (checkForInvalidInputs($('#'+$(this).attr('data-form-step-id'))) == false) {
      formStepsNum++
      updateFormSteps()
    }
  })
})

$('.btn-anterior').each(function () {
  $(this).on('click', function () {
    formStepsNum--
    updateFormSteps()
  })
})

$('.btn-resetar').each(function () {
  $(this).on('click', function () {
    formStepsNum = 0
    updateFormSteps()
    $('#Form')[0].reset()
  })
})

$(".mainCbx").change(function() {
  if(this.checked) {
    $('.otherCbx').each(function() {
      $(this).attr('disabled', false)
    })
  }
  else {
    $('.otherCbx').each(function() {
      $(this).attr('disabled', true).prop('checked', false)
    })
  }
})

function updateFormSteps() {
  $('.form-step').each(function () {
    $(this).removeClass('form-step-active')
  })
  $('.form-step').eq(formStepsNum).addClass('form-step-active')
  updateProgressbar()
}

function updateProgressbar() {
  $('.progress-step').each(function() {
    if ($('.progress-step').index($(this)) < formStepsNum + 1) {
      $(this).addClass('progress-step-active')
    } else {
      $(this).removeClass('progress-step-active')
    }
  })
  $('.progress').width((($('.progress-step-active').length - 1) / ($('.progress-step').length - 1)) * 100 + '%')
}

function checkForInvalidInputs(formStep) {
  var msg = 'Introduza os seguintes campos:\n'
  var rtn = false

  formStep.find('input').each(function() {
    if (!$(this).val()) {
      msg += '・ ' + $(this).attr('name').charAt(0).toUpperCase() + $(this).attr('name').slice(1) + '\n'
      rtn = true
    }
  })
  if (msg.length >= 35) alert(msg.slice(0, -1))
  return rtn
}