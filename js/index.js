var usuarios = [{
    "email": "alejandro@hotmail.com",
    "password": "alejandro"
}, {
    "email": "prueba",
    "password": "prueba"
}]

var balance;

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

function calcularIngreso(valor) {
    balance +=valor;
	return balance;
}

function calcularEgreso(valor) {
    balance -=valor;
	return balance;
}

