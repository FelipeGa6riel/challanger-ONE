import {criptografar,descriptografar} from './criptografia.js';
import copiar from './areaDeTransferencia.js';

let text = document.querySelector("#cripto");
let result = document.querySelector(".result-container");
let botaoCopiar = document.querySelector(".copy");

document.querySelector('#btn-copy').style.display = 'none'

text.addEventListener("input", function(){
    const value = this.value.toLowerCase()
                            .replace(/[áàâãä]/g,'a')
                            .replace(/[éèêë]/g, 'e')
                            .replace(/[íìîï]/g, 'i')
                            .replace(/[óòôõö]/g, 'o')
                            .replace(/[úùûü]/g, 'u')
                            .replace(/["'+=_\-`~!@#$%^&*()]/g, '');
    this.value = value;
})

botaoCopiar.onclick= () => {

    copiar(result.innerText);
}

document.querySelector('#criptografar').onclick = () => {
    
    document.querySelector('.hide').style.marginTop = '0px';

    result.innerText = criptografar(text.value);
    text.value = "";
};

document.querySelector('#descriptografar').onclick= () => {

    result.innerText = descriptografar(text.value);
    text.value = "";
}