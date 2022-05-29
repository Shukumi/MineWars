goldvalue=0;
woodvalue=0;
foodvalue=0;
swordvalue=0;
archervalue=0;
tankervalue=0; 

document.addEventListener("DOMContentLoaded", ready);

 function ready() {
	document.getElementById("gold").innerHTML = "Gold: " + goldvalue;
	document.getElementById("wood").innerHTML = "Wood: " + woodvalue;
	document.getElementById("food").innerHTML = "Food: " + foodvalue;
	document.getElementById("sword").innerHTML = "Sword: " + swordvalue;
	document.getElementById("archer").innerHTML = "Archer: " + archervalue;
	document.getElementById("tank").innerHTML = "Tank: " + tankervalue;
  }
