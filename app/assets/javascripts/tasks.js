// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

getTasks = function(){
	$.get('/tasks.json', function(data){
		$('ul').text("");
	for(var node = 0; node < data.length; node++){
			var goal = data[node].goal;
			var date = data[node].due_date;
			$('ul').append("<li>"+ goal + " "+ date + "</li>")
		}
	});
}

postTasks = function(){
	var text = $('#new_task').val();
	var date = $('#new_due_date').val();
	var path = $('#add-task').attr('action');
	$.post( path, { 
		task: { 
			goal: text,
			due_date: date
		}
	});
	getTasks();
}

addTask = function(){
	$('#add-task').on('submit', function(e){
		e.preventDefault();
		postTasks();
		$("#new_task").val("");
	});
}

runScript = function(){
	
	setTimeout(function(){
		getTasks()
	}, 10000);

	addTask();
}

$(document).ready(runScript);
$(document).on('page:load', runScript);