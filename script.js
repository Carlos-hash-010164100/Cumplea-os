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
