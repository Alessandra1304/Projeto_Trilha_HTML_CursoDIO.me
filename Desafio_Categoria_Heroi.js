let valores = gets().split(" ");  
let nome = valores[0]; 
let xp = valores[1]; 

let mensagem = "";

if (isNaN(xp)) {
    mensagem = "Erro: valor de XP inválido.";
}

else {
    xp = parseInt(xp);
    let categoria = "";
    if (xp<=1000){
        categoria = "Ferro";
    }
    else if (xp<=2000){
        categoria = "Bronze";
    }
    else if (xp<=5000){
        categoria = "Prata";
    }
    else if (xp<=7000){
        categoria = "Ouro";
    }
    else if (xp<=8000){
        categoria = "Platina";
    }
    else if (xp<=9000){
        categoria = "Ascendente";
    }
    else if (xp<=10000){
        categoria = "Imortal";
    }
    else {
        categoria = "Radiante";
    }
     
    mensagem = `O Herói de nome ${nome} está no nível de ${xp}`;
}

print(mensagem);
