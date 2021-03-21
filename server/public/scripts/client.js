console.log('js');

$(document).ready(onReady);

function onReady() {
    // run on start
    getTasks();
    // click handlers
    $('#submit-btn').on('click', newTask);
    // dynamic click handlers

}// end onReady

function displayTasks(array) {
    console.log('in displayTasks:', array);
    $('#new-tasks-here').empty();
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        let completeness = '&#9744;';
            if (element.complete === true) {
                completeness = '&#9745;';
            }
        $('#new-tasks-here').append(`
            <tr data-id="${element.id}">
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