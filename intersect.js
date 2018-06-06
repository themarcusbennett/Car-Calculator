var sideNavigation = document.getElementById("sidenav");
var toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click", function(){
    sideNavigation.classList.toggle('active');
});

var total = document.getElementById("total");

total.keyup(function(e) {
  if(e.keyCode == 13) {
    (this).next().focus();
  }
});
/*var monthlyPayment = function (car, month) {
    month = prompt("How many months would you like to calculate this span over?");
	var gas = prompt("How much money do you spend on gas a month?");
	var carNote = prompt("How much is your monthly car note? If not applicable enter 0");
	var insurance = prompt("How much is your monthly insurance?");
	car = parseInt(gas) + parseInt(carNote) + parseInt(insurance);
	alert("You will pay " + car * month + " dollars to keep this car for " + month + " months.");
}*/

