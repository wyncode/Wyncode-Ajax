// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

ready = function(){
	
	// setInterval(function(){
	// 	getTasks();
	// }, 5000);

	$('body').on('ajax:complete', '#new_task', function(xhr, obj){
		console.dir(arguments);
		console.log(obj.responseText);
		$('body').html(obj.responseText);
	});
}

$(document).ready(ready);
$(document).on('page:load', ready);