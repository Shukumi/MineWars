goldminelvl=1;
forestlvl=1;
foodfieldlvl=1;

document.addEventListener("DOMContentLoaded", ready);

function ready(){
    document.getElementById("goldminelvl").innerHTML = "Goldmine lvl: " + goldminelvl;
    document.getElementById("forestlvl").innerHTML = "Forest lvl: " + forestlvl;
    document.getElementById("foodfieldlvl").innerHTML = "Foodfield lvl: " + foodfieldlvl;
}

function upgradegold(){
    goldminelvl++;
    document.getElementById("goldminelvl").innerHTML = "Goldmine lvl: " + goldminelvl;
}

function upgradeforest(){
    forestlvl++;
    document.getElementById("forestlvl").innerHTML = "Forest lvl: " + forestlvl;
}
function upgradefood(){
    foodfieldlvl++;
    document.getElementById("foodfieldlvl").innerHTML = "Foodfield lvl: " + foodfieldlvl;
}