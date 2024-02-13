function displayList(listID) {
    const lists = document.querySelectorAll(".hidden-lists"); // querySelectorAll looks for elements of class type
    var id = "";

    lists.forEach(function (list) {
        if (list.style.display === 'flex') {
            id = list.id;
            list.style.display = 'none';
        } else {
            list.style.display = 'none';
        }
    });

    if (id === listID) {
        const selectedList = document.getElementById(listID);
        selectedList.style.display = 'none';
        const buttonBar = document.getElementById("listButtons");
        buttonBar.style.paddingBottom = '120';
    } else {
        const selectedList = document.getElementById(listID);
        selectedList.style.display = 'flex';
        const buttonBar = document.getElementById("listButtons");
        buttonBar.style.paddingBottom = '0';
    }
}

var checkbox = document.getElementById("anonCheck");

function contactSubmit() {
    if (checkbox.checked) {
        const messageField = document.getElementById("contactMessageField");
        if (messageField.value === "") {
            alert("You cannot submit an empty message!");
        } else {
            
        }
    } else {
        const messageField = document.getElementById("contactMessageField");
        const nameField = document.getElementById("contactNameField");
        if (messageField.value === "" || nameField.value === "") {
            alert("You tried to submit the form with message or name empty!");
        } else {

        }
    }
}

checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        const nameField = document.getElementById("contactNameField");
        const nameFieldLabel = document.getElementById("contactNameFieldLabel");
        nameFieldLabel.style.display = 'none';
        nameField.style.display = 'none';
    } else {
        const nameField = document.getElementById("contactNameField");
        const nameFieldLabel = document.getElementById("contactNameFieldLabel");
        nameFieldLabel.style.display = 'flex';
        nameField.style.display = 'flex';
    }
})