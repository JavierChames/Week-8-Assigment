document.addEventListener("DOMContentLoaded", () => { //Wait till page finally loaded

    class Dolist {
        constructor() {
            name
            checked

            alert("hi");
        }
    }

    let taskId = 0;

    function GetTextFromUser() { //Check if appear text in Textbox
        if ($('#taskText').val()) {
            let taskName = $('#taskText').val();
            return taskName;
        }
    }

    $("#addTask").click(function () { //Added listener to addButton
        if (GetTextFromUser()) {
            let myTxt = GetTextFromUser();
            addItemToList(myTxt);
            $('#taskText').val("");
        }
    });

    $("#taskText").keyup(function (e) { //If enter pressed
        if (e.keyCode == 13 && GetTextFromUser()) { //Check if enter pressed & txt is not empty
            let myTxt = GetTextFromUser();
            addItemToList(myTxt);
            $('#taskText').val("");
        }
    });

    let lst = document.querySelector('.lst');

    function addItemToList(myTxt) {
        taskId++;
        let ul = document.getElementById("mainList");
        let listItem = document.createElement("li");
        let checkBoxItem = document.createElement("input");
        let trashIcon = document.createElement("img");
        let SpanToolTip = document.createElement("span");
        checkBoxItem.setAttribute("type", "checkbox");
        listItem.setAttribute("id", `taskID${taskId}`); //String Literal
        listItem.setAttribute("class", "listItem");
        trashIcon.setAttribute("src", "../images/trash.png");
        trashIcon.setAttribute("align", "right");
        trashIcon.setAttribute("id", "trashIcon");
        trashIcon.setAttribute("class", "trashIconClass");
        trashIcon.setAttribute("title", "Remove task");
        listItem.appendChild(checkBoxItem);
        listItem.appendChild(document.createTextNode(` ${myTxt}`));
        listItem.appendChild(trashIcon);
        ul.appendChild(listItem);
        $(".listItem").on("click", function (event) {
            this.remove();
        });
    }
});