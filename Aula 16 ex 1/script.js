let num = document.getElementById("numeroid");
let tabela = document.getElementById("tabelaid");
let lista = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, lista)) {
    alert("tudo ok");
  } else {
    alert("algo errado");
  }
}
