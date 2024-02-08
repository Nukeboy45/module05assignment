function displayList(listID) {
    const lists = document.querySelectorAll(".hidden-lists"); // querySelectorAll looks for elements of class type
    lists.forEach(list => list.style.display = 'none');

    const selectedList = document.getElementById(listID);
    selectedList.style.display = 'flex';

    const buttonBar = document.getElementById("listButtons");
    buttonBar.style.paddingBottom = '0';
}