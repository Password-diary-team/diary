/*to play the project, typing in "node app.js" in the terminal, and type in "localhost:3000" in any browser*/
var diaryEntryNum = 1
var lockState = false;
var password;
var passwordInputted;

function add(){
    diaryEntryNum += 1
    var newLabel = document.createElement('label');
    $(newLabel).attr('id', 'label_' + diaryEntryNum)
    $(newLabel).html(diaryEntryNum + '. ');
    $('#text').append(newLabel);

    var newEntry = document.createElement('textarea');
    $(newEntry).attr('id', 'entry_' + diaryEntryNum);
    $(newEntry).attr('rows', '7');
    $('#text').append(newEntry);
}

function remove(){
    if (diaryEntryNum != 1){
        var diaryEntryRemoved = parseInt(prompt("Enter the entry you want to remove: "));

        if (diaryEntryRemoved > diaryEntryNum || diaryEntryRemoved < 0){
            alert('Invalid entry')
        }
        else{
            $('#entry_' + diaryEntryRemoved).remove();
            $('#label_' + diaryEntryRemoved).remove();

            for (var i = diaryEntryRemoved+1; i <= diaryEntryNum; i++){
                var label = $('#label_' + i)
                var entry = $('#entry_' + i)
                label.attr('id', 'label_' + (i-1));
                label.html((i-1) + '. ');
                entry.attr('id', 'entry_' + (i-1));
            }

            diaryEntryNum--;
        }
    }
    else{
        alert("You can't delete the first entry.");
    }
}

$(document).ready(function(){
    $("#passForm").on("submit", function(event){
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
                $('#remove').css('display', 'none');
                lockState = true;
                document.getElementById('passText').value = ''
            }
            else if (password == passwordInputted && lockState == true){
                $("#text").css('display', 'inline-block')
                document.getElementById('passForm').removeAttribute('style');
                document.getElementById('passButton').removeAttribute('style');
                $('#add').css('display', 'inline-block');
                $('#remove').css('display', 'inline-block');
                lockState = false;
                document.getElementById('passText').value = ''
            }
            else{
                alert('Error: Incorrect input!');
            }

        })
        event.preventDefault()
    })
})