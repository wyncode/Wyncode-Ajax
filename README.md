# AJAX ToDo List

## Objective
(Partially) convert the scaffold ToDo list into a SPA (single-page application) with AJAX.

These instructions don't match the code yet, but this is how I run the tutorial now.

## Tasks

- rails g scaffold task name --javascript-engine=js
- make task index page the root
- render new task form on task index page
- make the new task form AJAXy with remote: true
- add a JavaScript callback on document ready for the form ajax:success and ajax:error events
    - http://edgeguides.rubyonrails.org/working_with_javascript_in_rails.html#form-for
    - https://github.com/rails/jquery-ujs/wiki/ajax
- try window.location.reload() on success
- examine the arguments passed to the callback. How can we recycle this instead of throwing it away?
    - It seems to be showing the contents of Tasks#show for the new task created. Maybe we can reuse that.
- turn off the layout in Tasks#show with render layout: !request.xhr?
- append the ajax response to the body
- update the index page to render task partials instead of table rows
- update the Tasks#show to render the task partial if request.xhr? 
- in JavaScript, reset the form after submit 
- linkify the task name in the task partial
- demo how turbolinks breaks the form when you view a task and come back, then fix it with page:load

## Bugs
- flash message shows up on refresh sometimes

## Bonus
- refresh list
  - This will require using a delegated event to reattach the event handlers to the form if you update the entire page (and not if you just update the list).
- refactor Task#show to use view partial
- show task detail in a modal popup
