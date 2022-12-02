var diaryEntryNum = 1
var lockState = false;
var password;
var passwordInputted;

function add(){
    diaryEntryNum += 1
    var newLabel = document.createElement('label');
    $(newLabel).html(diaryEntryNum + '. ');
    $('#text').append(newLabel);

    var newEntry = document.createElement('textarea');
    $(newEntry).attr('id', 'entry_' + String(diaryEntryNum));
    $(newEntry).attr('class', 'entry');
    $(newEntry).attr('rows', '7');
    $('#text').append(newEntry);
}

$(document).ready(function(){
    $("#passForm").on("submit", function(event){
        event.preventDefault()
        passwordInputted = $('#passText').val()
        
        $.post('/diary', function(data){
            password = data

            if (password == passwordInputted && lockState == false){
                $("#text").css("display", 'none');
                $('#passForm').css('margin-top', '200px')
                $('#passForm').css('border', 'solid 2px');
                $('#passForm').css('display', 'inline-block');
                $('#passForm').css('width', '200px');
                $('#passForm').css('height', '200px');
                $('#passButton').css('margin-top', '75px');
                $('#add').css('display', 'none');
                lockState = true;
                document.getElementById('passText').value = ''
            }
            else if (password == passwordInputted && lockState == true){
                $("#text").css('display', 'inline-block')
                document.getElementById('passForm').removeAttribute('style');
                document.getElementById('passButton').removeAttribute('style');
                $('#add').css('display', 'inline-block');
                lockState = false;
                document.getElementById('passText').value = ''
            }
            else{
                alert('Error: Incorrect input!');
            }

        })
    })
})