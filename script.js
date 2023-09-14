let button = document.querySelector("button");
let numeroAleatorio = Math.floor(Math.random() * 100);
button.addEventListener('click', () => {
    let num1 = Number(document.getElementById("h1").value);
    let h2 = document.querySelector("h2");
    let img = document.getElementById("imagem");
    let imagem = document.querySelector("img");

    
    if (num1 == numeroAleatorio ){
    h2.innerHTML = "EM CHEIO, PARABÉNS";
    Acertou.src = "https://media.tenor.com/g3e1NX-xdQYAAAAC/goddamn-right-yes.gif";
    Acertou.style.display = "block";

    /*ESTILOS IMAGEM*/ 
    img.style.backgroundColor = "blueviolet";
    img.style.textAlign = "center";
    img.style.paddingTop = "25px";
    img.style.paddingBottom = "25px";
    imagem.style.display = "block";
    imagem.style.margin = "auto";

    }
    else
        if (num1 < numeroAleatorio){
        h2.innerHTML = `QUASE LÁ, AUMENTE O SEU NÚMERO`
        Acertou.src = "https://i.giphy.com/media/KFUx0Rtz7p0HTzbJ7x/giphy.webp";
        Acertou.style.display = "block";

        /*ESTILOS IMAGEM*/ 
        img.style.backgroundColor = "blueviolet";
        img.style.textAlign = "center";
        img.style.paddingTop = "25px";
        img.style.paddingBottom = "25px";
        imagem.style.display = "block";
        imagem.style.margin = "auto";
        }
    
    else{
    h2.innerHTML = `QUASE LÁ, DIMINUA O SEU NÚMERO!`
    Acertou.src = "https://media.tenor.com/pbVaJ3JVt8IAAAAC/elmo-fire.gif";
    Acertou.style.display = "block";

    /*ESTILOS IMAGEM*/ 
    img.style.backgroundColor = "blueviolet";
    img.style.textAlign = "center";
    img.style.paddingTop = "25px";
    img.style.paddingBottom = "25px";
    imagem.style.display = "block";
    imagem.style.margin = "auto";


    }
});