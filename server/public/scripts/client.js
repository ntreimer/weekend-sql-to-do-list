console.log('js');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery');
    getTasks();
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
            <td>${completeness}</td>
            <td>${element.task}</td>
            <td><button class="completeBtn">Complete task</button></td>
            <td><button class="deleteBtn">Delete task</button></td>
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