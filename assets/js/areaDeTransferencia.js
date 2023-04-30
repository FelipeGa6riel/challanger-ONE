export default function copiar (texto) {

    navigator.clipboard.writeText(texto).then(()=>{

        alert('Texto copiado')
    }).catch(()=>{
        alert('Deu erro')
    })
}