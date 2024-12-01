function obterValores() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    return { quantidade, de, ate };
}

function sortear() {
    const { quantidade, de, ate } = obterValores();
    alert(`Quantidade: ${quantidade}; Do número: ${de}; Até o número ${ate}`)
}