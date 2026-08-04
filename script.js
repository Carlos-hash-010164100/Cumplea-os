/* AUDIO */
window.addEventListener("load", () => {
    const audio = document.getElementById("audio");
    audio.volume = 0.7;
    audio.play().catch(() => {
        console.log("Autoplay bloqueado por el navegador.");
    });
});

/* CANVAS GLOBOS */
const canvas = document.getElementById("canvas-globos");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let globos = [];

function crearGlobo() {
    return {
        x: Math.random() * canvas.width,
        y: canvas.height + 50,
        r: 15 + Math.random() * 25,
        color: `hsl(${Math.random()*360}, 80%, 70%)`,
        velocidad: 1 + Math.random() * 2
    };
}

for (let i = 0; i < 25; i++) globos.push(crearGlobo());

function animarGlobos() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    globos.forEach(g => {
        ctx.beginPath();
        ctx.fillStyle = g.color;
        ctx.arc(g.x, g.y, g.r, 0, Math.PI * 2);
        ctx.fill();

        g.y -= g.velocidad;

        if (g.y < -50) {
            g.x = Math.random() * canvas.width;
            g.y = canvas.height + 50;
        }
    });

    requestAnimationFrame(animarGlobos);
}

animarGlobos();

/* REGALO → MOSTRAR BOLETOS */
document.getElementById("regalo").addEventListener("click", () => {

    const boletosDiv = document.getElementById("boletos");
    const mensajeCine = document.getElementById("mensaje-cine");

    boletosDiv.style.display = "block";

    boletosDiv.innerHTML = `
        <div class="boleto">
            <img src="imagenes/cine.png">
            <h3>Cinépolis</h3>
            <p>Folio: (Aquí va tu folio 1)</p>
            <p>Válido en taquilla</p>
        </div>

        <div class="boleto">
            <img src="imagenes/cine.png">
            <h3>Cinépolis</h3>
            <p>Folio: (Aquí va tu folio 2)</p>
            <p>Válido en taquilla</p>
        </div>

        <div class="boleto">
            <img src="imagenes/cine.png">
            <h3>Cinépolis</h3>
            <p>Folio: (Aquí va tu folio 3)</p>
            <p>Válido en taquilla</p>
        </div>
    `;

    mensajeCine.style.display = "block";
    mensajeCine.textContent = "Tienes una cita en el cine para el próximo fin de semana ❤️";
});
