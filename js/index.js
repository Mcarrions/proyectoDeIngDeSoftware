var usuarios = [{
    "email": "alejandro@hotmail.com",
    "password": "alejandro",
	balanceUsuario: 0
}]

balance = usuarios[0].balanceUsuario;

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

function setUserBalanceCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function checkCookie(){
	var userBalance=getCookie("userBalance");
     if (user != ""){
		 this.balance = parseFloat(user);
	 }
	 else if(user != "0"){
		this.balance = parseFloat(user);
	 }
	 else{
		  setCookie("userBalance", 0, 30);
		  userBalance=getCookie("userBalance");
		  this.balance = parseFloat(user);
	 }
	
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
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


