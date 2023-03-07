const calcular = () =>{
    let nm_marca = document.getElementById("marca").value;
    let nm_modelo = document.getElementById("modelo").value;
    let km = document.getElementById("km").value;
    let gasolina = document.getElementById("gasolina").value;
    let consumo = km / gasolina;
    document.querySelector("#resposta").innerHTML = "Seu " + nm_marca + " " + nm_modelo + " fez " +  consumo + " Quilometros por Litro";
}

let botao = document.querySelector("button");

botao.addEventListener("click",calcular);