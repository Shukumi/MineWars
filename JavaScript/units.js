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