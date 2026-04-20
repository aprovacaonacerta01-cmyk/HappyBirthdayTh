// SENHA 1
function verificarSenha() {
  const senha = document.getElementById("senha").value;
  if (senha === "241225") {
    document.getElementById("login").style.display = "none";
    document.getElementById("site").style.display = "block";
    document.getElementById("musica").play();
  } else {
    alert("Senha incorreta 😢");
  }
}

// SENHA 2
function verificarSenha2() {
  const senha = document.getElementById("senha2").value;
  if (senha === "Bruna") {
    document.getElementById("detalhes").style.display = "block";
  } else {
    alert("Senha incorreta 😢");
  }
}

// CONTADOR (amanhã 19:30)
const timer = document.getElementById("timer");

function atualizarContador() {
  const agora = new Date();

  const amanha = new Date();
  amanha.setDate(agora.getDate() + 1);
  amanha.setHours(19,30,0);

  const diff = amanha - agora;

  const h = Math.floor(diff / 1000 / 60 / 60);
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  timer.innerHTML = `${h}h ${m}m ${s}s`;
}

setInterval(atualizarContador, 1000);

// FADE
const fades = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  fades.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// CORAÇÕES
function criarCoracao() {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random()*3+2)+"s";

  document.querySelector(".hearts").appendChild(heart);

  setTimeout(()=>heart.remove(),5000);
}

setInterval(criarCoracao,300);
