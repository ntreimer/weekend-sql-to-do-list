console.log('js');

$(document).ready(onReady);

function onReady() {
    // run on start
    getTasks();
    // click handlers
    $('#submit-btn').on('click', newTask);
    // dynamic click handlers
    $(document).on('click', '.completeBtn', updateCompletion);
    $(document).on('click', '.deleteBtn', removeTask);
}// end onReady

function displayTasks(array) {
    console.log('in displayTasks:', array);
    $('#new-tasks-here').empty();
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(element);
        let completeness = '&#9744;';
        let background = 'incomplete-task';
            if (element.complete === true) {
                completeness = '&#9745;';
                background = 'complete-task'
            }
        $('#new-tasks-here').append(`
            <tr data-id="${element.id}" data-completion="${element.complete}" class="${background}">
                <td>${completeness}</td>
                <td>${element.task}</td>
                <td><button class="completeBtn">Complete task</button></td>
                <td><button class="deleteBtn">Delete task</button></td>
            </tr>
        `);
    }
}// end displayTasks

function getTasks() {
    console.log('in getTasks');
    $.ajax({
        method: 'GET',
        url: '/toDo'
    }).then(function(response){
        console.log('back from toDo GET with:', response);
        displayTasks(response);
    }).catch(function(err){
        console.log(err);
    })// end ajax
}// end getTasks

function newTask() {
    
    let objectToSend = {
        task: $('#task-input').val(),
        complete: false
    }
    $.ajax({
        method: 'POST',
        url: '/toDo',
        data: objectToSend
    }).then(function(response){
        console.log('back from POST with:', response);
        getTasks(response);
    }).catch(function(err){
        console.log('error!', err);
    })
}// end newTask

function removeTask() {
    let myID = $(this).parent().parent().data('id');
    $.ajax({
        method: 'DELETE',
        url: `/toDo/${myID}`
    }).then(function(response){
        console.log(response);
        getTasks();
    }).catch(function(err){
        console.log(err);
    })
}// end removeTask

function updateCompletion() {
    let myID = $(this).parent().parent().data('id');
    let objectToSend = {
        complete: $(this).parent().parent().data('completion')
    }
    console.log('object to send', objectToSend);
    $.ajax({
        method: 'PUT',
        url: `/toDo/${myID}`,
        data: objectToSend
    }).then(function(response){
        console.log(response);
        getTasks();
    }).catch(function(err){
        console.log(err);
    })
}// end updateCompletion