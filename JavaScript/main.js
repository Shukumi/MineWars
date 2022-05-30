function testFunction() {
	if(document.getElementById("test").style.color == "blue")
		document.getElementById("test").style.color = "red";
	else
		document.getElementById("test").style.color = "blue";

	}
	
	function test2Function() {

		document.getElementById("test").style.color = "black";

	}

function initiateAccount() {
	let user = new player(Steven, 0, 2, 10, 11, 12, 13)
	return user.foodvalue;
}