// =========================
// MIKAIL BJK SYSTEM
// =========================

let clickCount = 0;

// Şifre Kontrolü
function checkPassword() {

    const password =
    document.getElementById("password").value;

    const error =
    document.getElementById("error");

    const eagleSound =
    document.getElementById("kartalSesi");

    const messages = [

        "🦅 Mikail'e yakalandın!",

        "⚫⚪ Bu sistem sadece gerçek Beşiktaşlılar içindir!",

        "🦅 Kartal seni izliyor!",

        "🏆 1903 ruhunu taşımıyorsun!",

        "⚠️ Yetkisiz giriş tespit edildi!"

    ];

    if (password === "1903") {

        if (eagleSound) {

            eagleSound.play().catch(() => {});

        }

        error.style.color = "#00ff88";
        error.innerHTML = "✓ Giriş Başarılı";

        document.body.style.opacity = "0.8";

        setTimeout(() => {

            window.location.href = "home.html";

        }, 1500);

    }

    else {

        error.style.color = "red";

        error.innerHTML =
            messages[Math.floor(Math.random() * messages.length)];

    }

}

// Enter Tuşu
document.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        const passwordBox =
        document.getElementById("password");

        if (passwordBox) {

            checkPassword();

        }

    }

});

// =========================
// KURULUŞ SAYACI
// =========================

function updateCounter() {

    const counter =
    document.getElementById("counter");

    if (!counter) return;

    const founded =
    new Date("1903-03-03");

    const now =
    new Date();

    const diff =
    now - founded;

    const years =
    Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

    const days =
    Math.floor(diff / (1000 * 60 * 60 * 24));

    counter.innerHTML = `

    <h2>${years} Yıllık Efsane</h2>

    <h3>${days.toLocaleString()} Günlük Tarih</h3>

    <p>
    Beşiktaş 1903'ten beri yaşamaya devam ediyor.
    </p>

    `;

}

setInterval(updateCounter, 1000);

updateCounter();

// =========================
// TARAFTAR KARTI
// =========================

function createCard() {

    const nameInput =
    document.getElementById("name");

    const photoInput =
    document.getElementById("photo");

    const cardName =
    document.getElementById("cardName");

    const cardNo =
    document.getElementById("cardNo");

    const preview =
    document.getElementById("preview");

    let userName =
    nameInput.value.trim();

    if (userName === "") {

        userName = "Mikail";

    }

    cardName.innerText =
    userName.toUpperCase();

    cardNo.innerText =
    "BJK-" +
    Math.floor(
        100000 + Math.random() * 900000
    );

    if (
        photoInput.files &&
        photoInput.files[0]
    ) {

        const reader =
        new FileReader();

        reader.onload =
        function (e) {

            preview.src =
            e.target.result;

        };

        reader.readAsDataURL(
            photoInput.files[0]
        );

    }

}

// =========================
// KART İNDİR
// =========================

function downloadCard() {

    const card =
    document.getElementById("card");

    if (!card) return;

    html2canvas(card).then(canvas => {

        const link =
        document.createElement("a");

        link.download =
        "Mikail_BJK_Karti.png";

        link.href =
        canvas.toDataURL("image/png");

        link.click();

    });

}

// =========================
// KARA KARTAL MODU
// =========================

window.addEventListener(
"DOMContentLoaded",
function () {

    const logo =
    document.getElementById("logo");

    if (!logo) return;

    logo.addEventListener(
    "click",
    function () {

        clickCount++;

        if (clickCount >= 5) {

            document.body.classList.add(
                "kartalMode"
            );

            alert(
                "🦅 KARA KARTAL MODU AKTİF!"
            );

        }

    });

});

// =========================
// PARÇACIK SİSTEMİ
// =========================

window.addEventListener(
"load",
function () {

    const canvas =
    document.getElementById("particles");

    if (!canvas) return;

    const ctx =
    canvas.getContext("2d");

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;

    let particles = [];

    for (let i = 0; i < 120; i++) {

        particles.push({

            x:
            Math.random() *
            canvas.width,

            y:
            Math.random() *
            canvas.height,

            radius:
            Math.random() * 2 + 1,

            speedX:
            (Math.random() - 0.5) * 0.7,

            speedY:
            (Math.random() - 0.5) * 0.7

        });

    }

    function animate() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        particles.forEach(p => {

            ctx.beginPath();

            ctx.arc(
                p.x,
                p.y,
                p.radius,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
            "rgba(255,255,255,.8)";

            ctx.fill();

            p.x += p.speedX;
            p.y += p.speedY;

            if (
                p.x < 0 ||
                p.x > canvas.width
            ) {

                p.speedX *= -1;

            }

            if (
                p.y < 0 ||
                p.y > canvas.height
            ) {

                p.speedY *= -1;

            }

        });

        requestAnimationFrame(
            animate
        );

    }

    animate();

});
