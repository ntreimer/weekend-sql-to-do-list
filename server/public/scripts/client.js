console.log('js');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery');
    getTasks();
}// end onReady

function getTasks() {
    console.log('in getTasks');
    $.ajax({
        method: 'GET',
        url: '/toDo'
    }).then(function(response){
        console.log('back from toDo GET with:', response);
    }).catch(function(err){
        console.log(err);
    })// end ajax
}// end getTasks