const PASS_1 = "241225";
const PASS_2 = "Bruna";

function checkPass1() {
    const input = document.getElementById('pass1').value;
    if(input === PASS_1) {
        document.getElementById('login-screen').classList.remove('active');
        document.getElementById('main-content').classList.add('active');
        const audio = document.getElementById('bgMusic');
        audio.play().catch(e => console.log("Áudio precisa de interação direta"));
        startHearts();
    } else {
        alert("Senha incorreta, tente novamente!");
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

const targetDate = new Date("April 21, 2026 19:30:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;
    if (diff < 0) return;

    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}, 1000);

function startHearts() {
    const container = document.getElementById('heart-container');
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 15 + 10) + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 400);
}
