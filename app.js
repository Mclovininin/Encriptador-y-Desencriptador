const textArea = document.querySelector('#txtencriptar');
const mensaje = document.querySelector('#resultado');
const inst = document.querySelector('#none');
const img = document.querySelector('#imagen')
let btnCopy = document.querySelector('#copiar')
let texto = document.querySelector("texto-copiado")

const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]

function btnencriptar(){
    if (textArea.value == ""){
        return
    } else{
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado;
        textArea.value = ""

        mensaje.style.display = "flex"
        btnCopy.style.display = "block"
        img.style.display = "none"
        inst.style.display = "none";
    }
}

function btndesencriptar(){
    if (textArea.value == ""){
        return
    } else {
        const textoDesencriptado = desencriptar(textArea.value)
        mensaje.value = textoDesencriptado
        textArea.value = ""

        mensaje.style.display = "flex"
        btnCopy.style.display = "block"
        img.style.display = "none"
        inst.style.display = "none";   
    }
}

function encriptar(stringEncriptado) {
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado
}

function desencriptar(stringDesencriptado) {
    for (let i = 0; i < stringDesencriptado.length; i++) {
        for (let j = 0; j < matrizCodigo.length; j++) {
            const codigo = matrizCodigo[j];
            if (stringDesencriptado.substring(i).startsWith(codigo[1])) {
                stringDesencriptado = stringDesencriptado.substring(0, i) + codigo[0] + stringDesencriptado.substring(i + codigo[1].length);
                break; 
            }
        }
    }
    return stringDesencriptado;
}

async function copy(){
    let txt = mensaje.value
    await navigator.clipboard.writeText(txt);
}

btnCopy.addEventListener("click",copy)