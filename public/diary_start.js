/*to play the project, typing in "node app.js" in the terminal, and type in "localhost:3000" in any browser*/
var password;

$(document).ready(function(){
    $("#start").on("submit", function(event){
        passwordInputted = $('#unlockPass').val()

        $.post('/diary_start/password', function(data){
            if (data != passwordInputted){
                alert('Error: Incorrect password');
                event.preventDefault();
            }
        })
    })
})