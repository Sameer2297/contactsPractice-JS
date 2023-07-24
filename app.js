const saveBtn = document.getElementById("savebtn");
const deleteBtn = document.getElementById("deletebtn");

saveBtn.onclick = function () {
    const name = document.getElementById("name").value;
    const number = document.getElementById("num").value;

    if (name === "" || number === "") {
        alert("Please enter both Name and Number!");
        return;
    }

    document.getElementById("name").value = "";
    document.getElementById("num").value = "";
    
    const table = document.getElementById("table");

    const newRow = document.createElement('tr');

    const nameCell = document.createElement('td');
    const numCell = document.createElement('td');

    nameCell.innerHTML = name;
    nameCell.onclick = function() {
        nameCell.classList.add('change-bg');
    }
    numCell.innerHTML = number;
    numCell.onclick = function() {
        numCell.classList.add('change-bg');
    }

    newRow.appendChild(nameCell);
    newRow.appendChild(numCell);
    table.appendChild(newRow);
}

deleteBtn.onclick = function () {
    const table = document.getElementById("table");
    const lastRow = table.rows.length - 1;

    if (lastRow > 0) {
        table.deleteRow(lastRow);
    }else{
        alert("First add contacts to delete them!!!");
    }
}