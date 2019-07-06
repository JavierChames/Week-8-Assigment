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


    let doneList = document.getElementsByClassName('doneList');
    let titleNameTasks = document.getElementById("taskTitleId");
    let titleNameDone = document.getElementsByClassName("doneTitle")

    function addItemToList(myTxt) {
        tasks++;
        // showHideTitle(titleNameTasks);
        let listOfItems = document.getElementById("taskList");
        let listItem = document.createElement("li");
        let checkBoxItem = document.createElement("input");
        let trashIcon = document.createElement("img");
        checkBoxItem.setAttribute("type", "checkbox");

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

        listItem.appendChild(checkBoxItem);
        listItem.appendChild(document.createTextNode(` ${myTxt}`));
        listItem.appendChild(trashIcon);
        listOfItems.appendChild(listItem);
        trashIcon.onclick = removeItem;
        listItem.onclick = doneItem;
    }

    function removeItem(e) {
        if (e.target.nodeName === "IMG" && e.target.parentElement.parentElement.className === "lst") {
            tasks--;
        }
        if (e.target.nodeName === "IMG" && e.target.parentElement.parentElement.className === "doneList") {
            todo--;
        }
        e.target.parentElement.remove(e.target);

    }
    function doneItem(e) {
        if (e.target.nodeName === "LI" && e.target.parentElement.id === "taskList") {
            tasks--;
            todo++
            e.target.remove(e.target);
            e.target.classList.remove("listItem");
            e.target.classList.add("doneTitle");
            doneList[0].appendChild(e.target);
        }
    }
}); 