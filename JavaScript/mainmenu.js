goldvalue=0;
woodvalue=0;
foodvalue=0;
swordvalue=0;
archervalue=0;
tankervalue=0;
goldpersecond=1;
woodpersecond=1;
foodpersecond=1;
goldlimit=5000;
woodlimit=5000;
foodlimit=5000; 

document.addEventListener("DOMContentLoaded", ready);

setInterval(function(){ 
    if(goldvalue<goldlimit){
		document.getElementById("gold").innerHTML = "Gold: " + goldvalue;
		document.getElementById("wood").innerHTML = "Wood: " + woodvalue;
		document.getElementById("food").innerHTML = "Food: " + foodvalue;
		goldvalue+=goldpersecond;
		woodvalue+=woodpersecond;
		foodvalue+=foodpersecond;
	}
}, 1000);

function gotoupgrade(){
	window.location.href="../HTML/upgrade.html";
}

 function ready() {
	document.getElementById("gold").innerHTML = "Gold: " + goldvalue;
	document.getElementById("wood").innerHTML = "Wood: " + woodvalue;
	document.getElementById("food").innerHTML = "Food: " + foodvalue;
	document.getElementById("sword").innerHTML = "Sword: " + swordvalue;
	document.getElementById("archer").innerHTML = "Archer: " + archervalue;
	document.getElementById("tank").innerHTML = "Tank: " + tankervalue
	
	 
  }

  class ressources{

	costFkt = 1;
  	constructor(goldvalue, woodvalue, foodvalue){
  		this.goldvalue = goldvalue;
  		this.woodvalue = woodvalue;
  		this.foodvalue = foodvalue;
  	}


  }

  class player {
  	constructor(_name, _level, _numOfBuildings, _numOfUnits, _goldvalue, _woodvalue, _foodvalue){
  		this.id = _name;
  		this.level = _level;
  		this.numOfBuildings = _numOfBuildings;
  		this.numOfUnits = _numOfUnits;
  		this.goldvalue = _goldvalue;
  		this.woodvalue = _woodvalue;
  		this.foodvalue = _foodvalue;

  	}
	
	playerInfo(){
		return "Player ${this.id} is level ${this.level}"
	}


  }
 
  class units {
  	constructor(_typeOfUnit, _hp, _dmg, _armor, _attackType){
  		this.typeOfUnit = _typeOfUnit;
  		this.hp = _hp;
  		this.dmg = _dmg;
  		this.armor = _armor;
  		this.attackType = _attackType;
  	}
	

  }
  class swordsmen extends units {
	  constructor(_typeOfUnit, _hp, _dmg, _armor, _attackType){
		  super(_hp, _dmg, _armor);
		  this.typeOfUnit = _typeOfUnit;
		  this.attackType = _attackType;
	  }

	  set setStats(_typeOfUnit){
		  this.hp = 1000;
		  this.dmg = 100;
		  this.armor = 50;
		  this._attackType = "Melee";
		  this.typeOfUnit = "Swordsmen";
	  }
  }

  class archer extends units {
	  constructor(_typeOfUnit, _hp, _dmg, _armor, _attackType){
		  super(_hp, _dmg, _armor);
		  this.typeOfUnit = _typeOfUnit;
		  this.attackType = _attackType;
	  }

	  set setStats(_typeOfUnit){
		  this.hp = 750;
		  this.dmg = 125;
		  this.armor = 35;
		  this._attackType = "Ranged";
		  this.typeOfUnit = "Archer";
	  }
  }

  class tank extends units {
	  constructor(_typeOfUnit, _hp, _dmg, _armor, _attackType){
		  super(_hp, _dmg, _armor);
		  this.typeOfUnit = _typeOfUnit;
		  this.attackType = _attackType;
	  }

	  set setStats(_typeOfUnit){
		  this.hp = 1500;
		  this.dmg = 50;
		  this.armor = 75;
		  this._attackType = "Melee";
		  this.typeOfUnit = "Tank";
	  }
  }
  

  class buildings {
  	constructor(_typeOfBuilding){

  	}
  }