$(document).ready(bindEvents);

function bindEvents() {
	$("#flash").click(flashTrever);
	$("#slide").click(flashTrever);
	$("#color").click(flashTrever);
}

function flashTrever() {
	$("#trever").fadeToggle("fast").fadeToggle("fast").fadeToggle("fast").fadeToggle("fast");
}

function slideTrever() {

}

function colorTrever() {
	
}