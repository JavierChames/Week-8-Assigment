document.addEventListener("DOMContentLoaded", () => { //Wait till page finally loaded
    let tasks = 0;
    let todo = 0;

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


    let doneList = document.getElementById('doneList');
    let taskList = document.getElementById("taskList");
    function addItemToList(myTxt) {
        tasks++;
        let listOfItems = document.getElementById("taskList");
        let listItem = document.createElement("li");
        let trashIcon = document.createElement("img");

        $(listItem).attr(
            {
                "class": "listItem"
            });
        $(trashIcon).attr(
            {
                "src": "../images/trash.png",
                "align": "right",
                "id": "trashIconId",
                "class": "trashIconClass",
                "title": "Remove task"
            });

        listItem.appendChild(document.createTextNode(` ${myTxt}`));
        listItem.appendChild(trashIcon);
        listOfItems.appendChild(listItem);
        trashIcon.onclick = removeItem;
        listItem.onclick = doneItem;
    }

    function removeItem(e) {
        if (e.target.nodeName === "IMG" && e.target.parentElement.parentElement.className === "taskList") {
            tasks--;
        }
        if (e.target.nodeName === "IMG" && e.target.parentElement.parentElement.className === "doneList") {
            todo--;
        }
        e.target.parentElement.remove(e.target);

    }
    function doneItem(e) {
        if (e.target.nodeName === "LI") {
            if (e.target.parentElement.id === "taskList") {
                tasks--;
                todo++;
                e.target.remove(e.target);
                e.target.classList.remove("listItem");
                e.target.classList.add("doneList");
                doneList.appendChild(e.target);
            } else if (e.target.parentElement.id === "doneList") {
                tasks++;
                todo--;
                e.target.remove(e.target);
                e.target.classList.remove("doneList");
                e.target.classList.add("listItem");
                taskList.appendChild(e.target);
            }
        }
    }
}); 