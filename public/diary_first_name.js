//to play the project, typing in "node app.js" in the terminal, and type in "localhost:3000" in any browser
$(document).ready(function(){
    $.post('/diary_start/first_name', function(data){
        document.getElementById('setupHeading').innerHTML = data + "'s" + document.getElementById('setupHeading').innerHTML
    })
})