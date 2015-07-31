// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

function ready() {
  console.log('document ready');

  $('#new_task').on("ajax:success", function(evt, data) {
    console.log(arguments);
    // window.location.reload();
    $('#task_name').val('');
    $('body').append(data);
  }).on('ajax:error', function() {
    alert('Oops!');
  });
}

// $(ready);
// $(document).on('page:load', ready);

$(document).on('ready page:load', ready);