const resultInitial = document.getElementById('resultInitial');
const resultFinaly = document.getElementById('resultFinaly');

// função para limitar texto em 
// apenas letras minúsculas e sem acento.
function formatText() {
  var input = document.getElementById('inputText');
  var textFormated = input.value
    .toLowerCase() // Converter para minúsculas
    .normalize('NFD') // Normalizar para decompor acentos
    .replaceAll(/[\u0300-\u036f]/g, '') // Remover acentos
    .replaceAll(/[^a-z0-9\s]/g, ''); // Remover caracteres especiais 
  input.value = textFormated;
  
  if (!inputText.value || !inputText.value.trim()) {
    var text = document.getElementById('textResult');
    text.innerHTML = "";

    resultInitial.style.display = "flex";
    resultFinaly.style.display = "none";
  }
}

// função de criptografar texto
function handleEncrypt() {
  var input = document.getElementById('inputText');
  if (input.value.trim()) {
    var textEncrypt = input.value.trim()
      .replaceAll('e','enter')
      .replaceAll('i','imes')
      .replaceAll('a','ai')
      .replaceAll('o','ober')
      .replaceAll('u','ufat');
  
    var text = document.getElementById('textResult');
    text.innerHTML = textEncrypt;

    resultInitial.style.display = "none";
    resultFinaly.style.display = "flex";
  }
}

// função de descriptografar texto
function handleDecrypt() {
  var input = document.getElementById('inputText');
  if (input.value.trim()) {
    var textDecrypt = input.value.trim()
      .replaceAll('enter','e')
      .replaceAll('imes','i')
      .replaceAll('ai','a')
      .replaceAll('ober','o')
      .replaceAll('ufat','u');
  
    var text = document.getElementById('textResult');
    text.innerHTML = textDecrypt;
    
    resultInitial.style.display = "none";
    resultFinaly.style.display = "flex";
  }
}

// função de copiar texto
function handleCopy(e) {
  var text = document.getElementById('textResult');
  if (text.value.trim()) {
    text.select();
    text.setSelectionRange(0, 99999);
    text.selectionStart = text.selectionEnd;
    navigator.clipboard.writeText(text.value.trim());
  }
}