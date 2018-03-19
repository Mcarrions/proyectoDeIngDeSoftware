var usuarios = [{
    "email": "alejandro@hotmail.com",
    "password": "alejandro",
	balanceUsuario: 50
}]

var usuario = {}

var balance = usuarios[0].balanceUsuario;

$(document).ready(function () {

    $('.message a').click(function () {
        $('form').animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
    });

    $('.login-form').submit(function(event) {
        var email = $('#login-email').val();
        var password = $('#login-password').val();
        

        for (var i = 0; i < usuarios.length; i++) {
            if (usuarios[i].email == email && usuarios[i].password == password) {
                
                return true;
                break;
            }
        }
        alert("Login was unsuccessful, please check your username and password");
        return false;
    });

});

function calcularIngreso() {
	var valor = document.getElementById("valorIn").value;
	if(isNaN(valor) || parseFloat(valor)==0){
		alert("Ingresar un numero o valor correcto!");
	}
	else{
		balance = balance + parseFloat(valor);
		document.getElementById("balanceDisplay").innerHTML = balance;
		usuarios[0].balanceUsuario = balance;
	}
    
}

function calcularEgreso() {
	var valor = document.getElementById("valorEg").value;
	if(isNaN(valor) || parseFloat(valor)==0.0){
		alert("Ingresar un numero o valor correcto!");
	}
	else{
		balance = balance - parseFloat(valor);
		document.getElementById("balanceDisplay").innerHTML = balance;
		usuarios[0].balanceUsuario = balance;
	}
}

function getBalance(){
	
	document.getElementById("balanceDisplay").innerHTML = balance;
}

