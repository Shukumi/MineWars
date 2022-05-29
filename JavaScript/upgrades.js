goldminelvl=1;
forestlvl=1;
foodfieldlvl=1;

document.addEventListener("DOMContentLoaded", upgrades);

function upgrades(){
    document.getElementById("goldminelvl").innerHTML = "Goldmine lvl: " + goldminelvl;
    document.getElementById("forestlvl").innerHTML = "Forest lvl: " + forestlvl;
    document.getElementById("foodfieldlvl").innerHTML = "Foodfield lvl: " + foodfieldlvl;

}

function upgradegold(){
    document.getElementById("goldminelvl").innerHTML = "Goldmine lvl: " + goldminelvl;
    goldminelvl++;
}

function upgradeforest(){
    document.getElementById("forestlvl").innerHTML = "Forest lvl: " + forestlvl;
    forestlvl++;
}
function upgradefood(){
    document.getElementById("foodfieldlvl").innerHTML = "Foodfield lvl: " + foodfieldlvl;
    foodfieldlvl++;
}