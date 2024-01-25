const resultInitial = document.getElementById('resultInitial');
const resultFinaly = document.getElementById('resultFinaly');

// função para limitar texto em 
// apenas letras minúsculas e sem acento.
function formatText() {
  var input = document.getElementById('inputText');
  var textoFormatado = input.value
    .toLowerCase() // Converter para minúsculas
    .normalize('NFD') // Normalizar para decompor acentos
    .replace(/[\u0300-\u036f]/g, '') // Remover acentos
    .replace(/[^a-z0-9\s]/g, ''); // Remover caracteres especiais 
  input.value = textoFormatado;
  
  if (!inputText.value) {
    resultInitial.style.display = "flex";
    resultFinaly.style.display = "none";
  }
}

// função de criptografar texto
function handleEncrypt() {
  var inputText = document.getElementById('inputText');
  if (inputText.value) {

    resultInitial.style.display = "none";
    resultFinaly.style.display = "flex";
  }
}

// função de descriptografar texto
function handleDecrypt() {
  var inputText = document.getElementById('inputText');
  if (inputText.value) {
    
    resultInitial.style.display = "none";
    resultFinaly.style.display = "flex";
  }
}

// função de copiar texto
function handleCopy() {
}