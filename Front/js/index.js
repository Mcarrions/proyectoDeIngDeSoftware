var usuarios = [{
	"email": "alejandro@hotmail.com",
	"password": "alejandro",
	balanceUsuario: 0
}]

balance = usuarios[0].balanceUsuario;

$(document).ready(function () {
	jQuery.support.cors = true;
	$('.message a').click(function () {
		$('form').animate({
			height: "toggle",
			opacity: "toggle"
		}, "slow");
	});

	//Codigo alejandro

	$("#submit-form-login").submit(function (event) {
		var dataRed = $(this).attr('data-redirect');
		var emailInput = $("#login-email");
		var passwordInput = $("#login-password");

		var email = $("#login-email").val();
		var pass = $("#login-password").val();

		var dataPOST = {};
		dataPOST.email = email;
		dataPOST.password = pass;

		//console.log(dataPOST.stringify);
		$.ajax({
			type: 'POST',
			data: JSON.stringify(dataPOST),
			dataType: 'JSON',
			jsonp: true,
			contentType: 'application/json',
			//reemplazar por  direccion ngrok
			url: 'http://24004de5.ngrok.io/api/login',
			success: function (result, status, XHR) {

				/*
				window.localStorage.setItem("CS_TOKEN_USERNAME", result.user[0].username);
				window.localStorage.setItem("CS_TOKEN", result.token);
				*/

				window.location.replace(dataRed);
				event.preventDefault();
				return false;
			},
			error: function (request, status, error) {

				console.log("Error " + status);
				emailInput.css("border-color", "red");
				passwordInput.css("border-color", "red");
				passwordInput.val('');
				//agregar roast message
			}

		})

		return false;
	});
	var goToPage = function (hrefPage) {
		
		$.get(hrefPage, function (data) {
			setTimeout(function () {
				//document.title = response.pageTitle;
				window.history.pushState({
					"html": data,
					"pageTitle": ''
				}, "", hrefPage);
				$("body").html(data);
				window.scrollTo(0, 0);
			}, 1);
		});
	};

});

function calcularIngreso() {
	var valor = document.getElementById("valorIn").value;
	if (isNaN(valor) || parseFloat(valor) == 0) {
		alert("Ingresar un numero o valor correcto!");
	} else {
		balance = balance + parseFloat(valor);
		document.getElementById("balanceDisplay").innerHTML = balance;
		usuarios[0].balanceUsuario = balance;
	}

}

function calcularEgreso() {
	var valor = document.getElementById("valorEg").value;
	if (isNaN(valor) || parseFloat(valor) == 0.0) {
		alert("Ingresar un numero o valor correcto!");
	} else {
		balance = balance - parseFloat(valor);
		document.getElementById("balanceDisplay").innerHTML = balance;
		usuarios[0].balanceUsuario = balance;
	}
}

function getBalance() {
	document.getElementById("balanceDisplay").innerHTML = balance;
}

function setUserBalanceCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function checkCookie() {
	var userBalance = getCookie("userBalance");
	if (user != "") {
		this.balance = parseFloat(user);
	} else if (user != "0") {
		this.balance = parseFloat(user);
	} else {
		setCookie("userBalance", 0, 30);
		userBalance = getCookie("userBalance");
		this.balance = parseFloat(user);
	}

}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}