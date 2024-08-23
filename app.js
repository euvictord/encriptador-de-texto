function criptografar() {
    const texto = document.getElementById("inputText").value;
    const textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    document.getElementById("outputText").innerText = textoCriptografado;
}

function descriptografar() {
    const texto = document.getElementById("inputText").value;
    const textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    document.getElementById("outputText").innerText = textoDescriptografado;
}

function copiarTexto() {
    const texto = document.getElementById("outputText").innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado para a área de transferência!");
    });
}
