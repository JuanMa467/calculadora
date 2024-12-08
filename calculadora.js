function verificarNumero(x) {
    if (!x) {
        alert("Ingrese un número");
        return false;
    }else if (isNaN(x)) {
        alert("Solo se deben ingresar números");
        return false;
    }
    else{
        return x;
    }
}

function sumarNumero() {
    const numeroInput = document.getElementById("numero");
    const numero = numeroInput.value;
    const numeroVerificado = verificarNumero(numero);
    const resultado = document.getElementById("resultado");

    
    data={'p_num1':numeroVerificado}
        $.ajax({
            type: 'POST',
            url: '/realizar_suma',
            data: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (response) {
                resultado.innerHTML = response.respuesta;
                numeroInput.value = "";
            },
            error: function (response) {
                alert("HUBO UN ERROR");
            }
        });
}
function restarNumero() {
    const numeroInput = document.getElementById("numero");
    const numero = numeroInput.value;
    const numeroVerificado = verificarNumero(numero);
    const resultado = document.getElementById("resultado");

    
    data={'p_num1':numeroVerificado}
        $.ajax({
            type: 'POST',
            url: '/realizar_resta',
            data: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (response) {
                resultado.innerHTML = response.respuesta;
                numeroInput.value = "";
            },
            error: function (response) {
                alert("HUBO UN ERROR");
            }
        });
}
function multiplicarNumero() {
    const numeroInput = document.getElementById("numero");
    const numero = numeroInput.value;
    const numeroVerificado = verificarNumero(numero);
    const resultado = document.getElementById("resultado");

    
    data={'p_num1':numeroVerificado}
        $.ajax({
            type: 'POST',
            url: '/realizar_multiplicación',
            data: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (response) {
                resultado.innerHTML = response.respuesta;
                numeroInput.value = "";
            },
            error: function (response) {
                alert("HUBO UN ERROR");
            }
        });
}
function dividirNumero() {
    const numeroInput = document.getElementById("numero");
    const numero = numeroInput.value;
    const numeroVerificado = verificarNumero(numero);
    const resultado = document.getElementById("resultado");
    if(numeroVerificado==0){
        alert("No se puede dividir por cero");
        return
    }
    data={'p_num1':numeroVerificado}
        $.ajax({
            type: 'POST',
            url: '/realizar_division',
            data: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (response) {
                resultado.innerHTML = response.respuesta;
                numeroInput.value = "";
            },
            error: function (response) {
                alert("HUBO UN ERROR");
            }
        });
}
function porcentajeNumero() {
    const numeroInput = document.getElementById("numero");
    const numero = numeroInput.value;
    const numeroVerificado = verificarNumero(numero);
    const resultado = document.getElementById("resultado");

    
    data={'p_num1':numeroVerificado}
        $.ajax({
            type: 'POST',
            url: '/realizar_porcentaje',
            data: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (response) {
                resultado.innerHTML = response.respuesta;
                numeroInput.value = "";
            },
            error: function (response) {
                alert("HUBO UN ERROR");
            }
        });
}
function raizNumero() {
    const numeroInput = document.getElementById("numero");
    const numero = numeroInput.value;
    const numeroVerificado = verificarNumero(numero);
    const resultado = document.getElementById("resultado");

    
    data={'p_num1':numeroVerificado}
        $.ajax({
            type: 'POST',
            url: '/realizar_raíz',
            data: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: function (response) {
                resultado.innerHTML = response.respuesta;
                numeroInput.value = "";
            },
            error: function (response) {
                alert("HUBO UN ERROR");
            }
        });
}
function borrarNumero() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value = "";
}
function borrarTodo() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value = "";
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    $.ajax({
        type: 'POST',
        url: '/AC',
        data: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (response) {
            resultado.innerHTML = response.respuesta;
            numeroInput.value = "";
        },
        error: function (response) {
            alert("HUBO UN ERROR");
        }
    });
}
function numero1() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += "1";
}
function numero2() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += "2";
}
function numero3() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += "3";
}   
function numero4() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += "4";
}
function numero5() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += "5";
}
function numero6() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += "6";
}
function numero7() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += "7";
}
function numero8() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += "8";
}
function numero9() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += "9";
}
function coma() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += ",";
}
function numero0() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value += "0";
}
function igual() {
    const numeroInput = document.getElementById("numero");
    numeroInput.value = "";
    const resultado = document.getElementById("resultado");
    $.ajax({
        type: 'POST',
        url: '/resultado',
        data: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (response) {
            resultado.innerHTML = response.respuesta;
            numeroInput.value = "";
        },
        error: function (response) {
            alert("HUBO UN ERROR");
        }
    });
}