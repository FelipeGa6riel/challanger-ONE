

let text = document.querySelector("#cripto");
let result = document.querySelector("#result");

const criptografar = () => {

    let valor = text.value;

    if(!valor) return mostraImg()

    let mudar = valor.replace(/a|e|i|o|u/g, function (mudar) {
        if (mudar === "a") {
            return "ai";
        } else if (mudar === "e") {
            return "enter";
        } else if (mudar === "i") {
            return "imes";
        } else if (mudar === "o") {
            return "ober";
        } else if (mudar === "u") {
            return "ufat";
        }
    });
    limpaImg()
    return (result.innerHTML = `${mudar}`);
};

const descriptografar = () => {

    let valor = text.value;

    let mudar = valor.replace(/ai|enter|ober|imes|ufat/g, function(mudar){

        if(mudar === "ai"){
            return "a";
        }else if(mudar === "enter") {
            return "e";
        }else if (mudar === "imes"){
            return "i";
        }else if(mudar === "ober") {
            return "o";
        }else if(mudar === "ufat") {
            return "u";
        }
    })
    limpaImg()
    return (result.innerHTML = `${mudar}` );
}

function limpaImg () {

    document.querySelector('.img').style.visibility = 'hidden'
    document.querySelector('.hide > h2').style.display ='none'
    document.querySelector('.save').style.display ='none'
}

function mostraImg () {

    document.querySelector('.img').style.visibility = 'visible'
    document.querySelector('.hide > h2').style.display = 'block'
    document.querySelector('.save').style.display = 'block'
    result.innerText = ''
}
