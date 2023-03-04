//--------------Declare variables for error message------------//

var nameError = document.getElementById("nameErr");
var numberError = document.getElementById("numberErr");
var dateError = document.getElementById("dateErr");
var yearError = document.getElementById("yearErr");
var cvcError = document.getElementById("cvcErr");

//-------------Call functions for all inputs---------------//

function validateName() {

	var username = document.getElementById("chname").value;

	if (username == "") {
		nameError.innerHTML = "Can't be blank";
		document.getElementById("chname").style.border = "1px solid hsl(0, 100%, 66%)";
		return false;
	}
	
	const regex = /^[A-Za-z]*\s{1}[A-Za-z]*$/;

	if (regex.test(username) === false) {
		nameError.innerHTML = "Enter full name";
		document.getElementById("chname").style.border = "1px solid hsl(0, 100%, 66%)";
		return false;
	}
	nameError.innerHTML = "";
	document.querySelector(".holdername").innerHTML = document.getElementById("chname").value;
	document.getElementById("chname").style.border = "1px solid green";
	return true;

}


function validateNumber() {

	var cardNumber = document.getElementById("cnumber").value;

	if (cardNumber == "") {
		numberError.innerHTML = "Can't be blank";
		document.getElementById("cnumber").style.border = "1px solid hsl(0, 100%, 66%)";
		return false;
	}
	
	const regex = /^(?=.*\d)[\d ]{19}$/;

	if (regex.test(cardNumber) === false) {
		numberError.innerHTML = "Wrong format, numbers only";
		document.getElementById("cnumber").style.border = "1px solid hsl(0, 100%, 66%)";
		return false;
	}
	numberError.innerHTML = "";
	document.querySelector(".card-number").innerHTML = document.getElementById("cnumber").value;
	document.getElementById("cnumber").style.border = "1px solid green";
	return true;

}


function validateMonth() {

	var expiryMonth = document.getElementById("month").value;

	if (expiryMonth == "") {
		dateError.innerHTML = "Can't be blank";
		document.getElementById("month").style.border = "1px solid hsl(0, 100%, 66%)";
		return false;
	}
	
	const regex = new RegExp('^[0-9]{2}$');

	if (regex.test(expiryMonth) === false) {
		dateError.innerHTML = "Wrong format, numbers only";
		document.getElementById("month").style.border = "1px solid hsl(0, 100%, 66%)";
		return false;
	}
	dateError.innerHTML = "";
	document.querySelector(".month-1").innerHTML = document.getElementById("month").value;
	document.getElementById("month").style.border = "1px solid green";
	return true;

}

function validateYear() {

	var expiryYear = document.getElementById("year").value;

	if (expiryYear == "") {
		yearError.innerHTML = "Can't be blank";
		document.getElementById("year").style.border = "1px solid hsl(0, 100%, 66%)";
		return false;
	}
	
	const regex = new RegExp('^[0-9]{2}$');

	if (regex.test(expiryYear) === false) {
		yearError.innerHTML = "Wrong format, numbers only";
		document.getElementById("year").style.border = "1px solid hsl(0, 100%, 66%)";
		return false;
	}
	yearError.innerHTML = "";
	document.querySelector(".year-1").innerHTML = document.getElementById("year").value;
	document.getElementById("year").style.border = "1px solid green";
	return true;

}

function validateCVC() {

	var cvv = document.getElementById("cvc").value;

	if (cvv == "") {
		cvcError.innerHTML = "Can't be blank";
		document.getElementById("cvc").style.border = "1px solid hsl(0, 100%, 66%)";
		return false;
	}
	
	const regex = new RegExp('^[0-9]{3}$');

	if (regex.test(cvv) === false) {
		cvcError.innerHTML = "Wrong format, numbers only";
		document.getElementById("cvc").style.border = "1px solid hsl(0, 100%, 66%)";
		return false;
	}
	cvcError.innerHTML = "";
	document.querySelector(".cvv").innerHTML = document.getElementById("cvc").value;
	document.getElementById("cvc").style.border = "1px solid green";
	return true;

}

//-----------Validate form with submit button------------//

function validateForm() {
	
	if ((!validateName() || !validateNumber() || !validateMonth() || !validateYear() || !validateCVC()) === true) {
		return false;
	}

	else {
		nameError.innerHTML = "";
		numberError.innerHTML = "";
		dateError.innerHTML = "";
		yearError.innerHTML = "";
		cvcError.innerHTML = "";
		document.querySelector(".form").style.display = "none";
		document.querySelector(".thank-you").style.display = "flex";
		return true;
	}
}
