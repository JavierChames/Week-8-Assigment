document.addEventListener("DOMContentLoaded", () => { //Wait till page finally loaded

    function GetTextFromUser() { //Check if appear text in Textbox
        if ($('#taskText').val()) {
            let taskName = $('#taskText').val();
            return taskName;
        }
    }

    $("#addTask").click(function () { //Added listener to addButton
        if (GetTextFromUser()){
        let myTxt=GetTextFromUser();
        // addItemToList(myTxt);
        $('#taskText').val("");
        
        }
    });

    $("#taskText").keyup(function (e) { //If enter pressed
        if (e.keyCode == 13 && GetTextFromUser()) {
            let myTxt=GetTextFromUser();
            // addItemToList(myTxt);
            $('#taskText').val("");
        }
    });


});