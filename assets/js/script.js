import {criptografar,descriptografar} from './criptografia.js'
import copiar from './areaDeTransferencia.js';

let text = document.querySelector("#cripto");
let result = document.querySelector(".result-container");
let botaoCopiar = document.querySelector(".copy")

botaoCopiar.onclick= () => {

    copiar(result.innerText)
}

document.querySelector('#criptografar').onclick = () => {
    
    document.querySelector('.hide').style.marginTop = '0px'
    
    result.innerText = criptografar(text.value);
    text.value = ""
};

document.querySelector('#descriptografar').onclick= () => {

    result.innerText = descriptografar(text.value);
    text.value = ""
}