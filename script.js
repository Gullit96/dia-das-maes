// efeito de digitação
const texto = "Obrigado por tudo que você faz por mim 💖";
let i = 0;

function digitar() {
  if (i < texto.length) {
    document.getElementById("typing").innerHTML += texto.charAt(i);
    i++;
    setTimeout(digitar, 50);
  }
}
digitar();

// corações animados
function criarCoracao() {
  const coracao = document.createElement("span");
  coracao.innerHTML = "💖";
  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.fontSize = Math.random() * 20 + 10 + "px";

  document.querySelector(".background").appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 10000);
}
setInterval(criarCoracao, 300);

// botão surpresa + música
function surpresa() {
  document.getElementById("mensagemFinal").innerText =
    "Eu te amo mais que tudo nesse mundo 💖";

  const musica = document.getElementById("musica");
  musica.play();
}
