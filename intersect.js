var sideNavigation = document.getElementById("sidenav");
var toggleButton = document.getElementById("toggle-button");

/* Toggle Side Navigation */
toggleButton.addEventListener("click", function () {
    sideNavigation.classList.toggle('active');
});

var addToTable = document.getElementById("submit-button");
addToTable.addEventListener("click", function() {
    
    var gas = document.getElementById("gas").value;
    var insurance = document.getElementById("insurance").value;
    var carNote = document.getElementById("car-note").value;
    var table = document.getElementsByTagName("table")[0];
    
    var newRow = table.insertRow(1);
    
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    
    cell1.innerHTML = gas;
    cell2.innerHTML = insurance;
    cell3.innerHTML = carNote;
    
});

    
