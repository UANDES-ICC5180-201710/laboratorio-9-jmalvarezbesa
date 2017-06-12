// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
//
$(document).ready(function() {
  var $addPersonForm = $('#addPersonAndEnrollment form');

  $addPersonForm.on('ajax:success', function(e, data, status, xhr)  {
    var $newHtml = $(data);
    $addPersonForm.html($newHtml.find('form#new_person').html());
  }).on('ajax:error', function(e, xhr, status, error) {
    alert(error);
  });
    $("span").click(function(){
        if ( $(this).hasClass("active") ) {
            $(this).removeClass("active");

        }
        else {
            $(this).addClass("active");
            $.ajax({
                type: "POST",
                url: 'courses/ajaxFunction',
                data: {"course_id": 1},
                datatype: 'json',
                contentType: 'application/json; charset=utf-8'
            }).done(function (msg) {
                alert('done');
            }).fail(function (msg) {
                alert("Sorry couldn't find what you want");
            })
        }
    });
});

