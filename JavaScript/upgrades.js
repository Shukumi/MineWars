goldminelvl=1;
forestlvl=1;
foodfieldlvl=1;
goldpersecond=1;
goldpersecond=1;
woodpersecond=1;
foodpersecond=1;
goldlimit=5000;
woodlimit=5000;
foodlimit=5000; 

document.addEventListener("DOMContentLoaded", ready);



function ready(){
    document.getElementById("goldminelvl").innerHTML = "Goldmine lvl: " + goldminelvl;
    document.getElementById("forestlvl").innerHTML = "Forest lvl: " + forestlvl;
    document.getElementById("foodfieldlvl").innerHTML = "Foodfield lvl: " + foodfieldlvl;
}

function gotomainmenu(){
    window.location.href="../HTML/mainmenu.html";
}

function upgradegold(){
    goldminelvl++;
    goldpersecond++;
    goldlimit+1000;
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