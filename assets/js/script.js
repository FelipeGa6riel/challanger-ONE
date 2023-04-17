


let criptografar = () => {

    let text = document.querySelector("#cripto");
    let result = document.querySelector("#result");
    let local = text.value;

    let mudar = local.replace(/a|e|i|o|u/g, function (mudar) {
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
    console.log(mudar)
    return (result.innerHTML = `${mudar}`);
};

let descriptografar = () => {

    let text = document.querySelector('#cripto');
    let result = document.querySelector('#result');
    let local = text.value;

    let mudar = local.replace(/ai|enter|ober|imes|ufat/g, function(mudar){

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
    console.log(mudar)
    return (result.innerHTML = `${mudar}` );
}

// let cripto = criptografar;
