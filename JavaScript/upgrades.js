goldminelvl=1;
forestlvl=1;
foodfieldlvl=1;

document.addEventListener("DOMContentLoaded", ready);



function ready(){
    includeHTML();
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

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }
  