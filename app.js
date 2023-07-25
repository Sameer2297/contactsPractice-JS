const saveBtn = document.getElementById("savebtn");
const deleteBtn = document.getElementById("deletebtn");

const rows = [];

saveBtn.onclick = function () {
    const nameEl = document.getElementById("name").value;
    const numberEl = document.getElementById("num").value;
    
    if (nameEl && numberEl) {
        rows.push({name: nameEl, num: numberEl});
        updateTable();
    }else{
        alert("Please enter both Name and Number!");
    }

    console.log(rows);
}

deleteBtn.onclick = function () {
    const nameToDelete = document.getElementById('name');
    if (nameToDelete.value === "" && rows.length>0) {
        rows.splice(rows.length-1,1);
        updateTable();
    }else{
        if (rows.length > 0) {
            for (var i=0; i<rows.length;i++) {
                if (rows[i].name === nameToDelete.value) {
                    rows.splice(i,1);
                }else{
                    alert("Name not found!")
                }
            }
            updateTable();
        }else{
            alert("First add contacts to delete them!!!");
        }
    }
    console.log(rows);
}

function updateTable() {
    
    const nameEl = document.getElementById("name").value;
    const numberEl = document.getElementById("num").value;

    const table = document.getElementById('table');
    table.innerHTML = "";

    rows.map(each => {
        const table = document.getElementById("table");

        const newRow = document.createElement('tr');

        const nameCell = document.createElement('td');
        const numCell = document.createElement('td');

        document.getElementById("name").value = "";
        document.getElementById("num").value = "";

        nameCell.innerHTML = each.name;
        nameCell.onclick = function() {
            nameCell.classList.toggle('change-bg');
        }
        numCell.innerHTML = each.num;
        numCell.onclick = function() {
            numCell.classList.toggle('change-bg');
        }

        newRow.appendChild(nameCell);
        newRow.appendChild(numCell);
        table.appendChild(newRow);
    })
    console.log(rows);
}