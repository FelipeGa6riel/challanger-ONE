const mostraButton = () => document.querySelector('.copy').style.display = 'block'

function descriptografar(valor) {
        
    const textoDescriptografado = valor.replace(/ai|enter|ober|imes|ufat/g, function(mudar){

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
        return mudar
    })
    return textoDescriptografado

}

const criptografar = (valor) => {
    
    let criptoText = "";
    let letras = valor.split('')    
    
    limpaImg()
    mostraButton()

    criptoText = letras.map(letra => {

        if (letra === "a") {
            return "ai";
        } else if (letra === "e") {
            return "enter";
        } else if (letra === "i") {
            return "imes";
        } else if (letra === "o") {
            return "ober";
        } else if (letra === "u") {
            return "ufat";
        }
        return letra
    }).join('');

    return criptoText
};

function limpaImg () {

    document.querySelector('.img').style.display = 'none'
    document.querySelector('.hide > h2').style.display ='none'
    document.querySelector('.save').style.display ='none'
    document.querySelector('#btn-copy').style.display = 'block'
    document.querySelector('.nav').style.justifyContent = 'space-between'
}

// function mostraImg () {

//     document.querySelector('.img').style.display = 'block'
//     document.querySelector('.hide > h2').style.display = 'block'
//     document.querySelector('.save').style.display = 'block'
//     result.innerText = ''
// }

export { criptografar, descriptografar }