function peso(){

    let quilo = parseFloat(document.getElementById('quilo').value);

    let altura = parseFloat(document.getElementById('altura').value);

    let imc = quilo/(altura*altura).toFixed(2);
    let res = imc;

    document.getElementById('resultado').textContent = "Tu IMC es: " +res;

    document.getElementById('tabla').style.visibility = 'visible'; 
}

function apagar(){

    location.reload();
}