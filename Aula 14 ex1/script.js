function contar() {
  var inicio = Number(document.getElementById("inicioid").value);
  var fim = Number(document.getElementById("fimid").value);
  var passo = Number(document.getElementById("passoid").value);
  var resposta = document.getElementById("res");

  if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
    resposta.innerText = `Preencha as informações corretamente`;
  } else {
    for (inicio; inicio <= fim; inicio = inicio + passo) {
      resposta.innerText = `${resposta.innerText + inicio} + \u{1F449} `;
    }
  }
}
