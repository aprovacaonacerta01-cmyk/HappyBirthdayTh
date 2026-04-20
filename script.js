const PASS_1 = "241225";
const PASS_2 = "Bruna";

function checkPass1() {
    const input = document.getElementById('pass1').value;
    if(input === PASS_1) {
        document.getElementById('login-screen').classList.remove('active');
        document.getElementById('main-content').classList.add('active');
        document.getElementById('bgMusic').play();
        startHearts();
    } else {
        alert("Senha incorreta!");
    }
}

function askPass2() {
    const input = prompt("Qual o nome da mulher da sua vida?");
    if(input && input.toLowerCase() === PASS_2.toLowerCase()) {
        document.getElementById('secret-details').classList.remove('hidden');
        document.getElementById('btnReveal').style.display = 'none';
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
        alert("Senha incorreta!");
    }
}

// Contador para Amanhã às 19:30
const targetDate = new Date("April 21, 2026 19:30:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;
    if (diff <= 0) return;

    document.getElementById('hours').innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById('minutes').innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('seconds').innerText = Math.floor((diff % (1000 * 60)) / 1000);
}, 1000);

function startHearts() {
    const container = document.getElementById('heart-container');
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 300);
}
