// Crear globos aleatorios
const contenedor = document.getElementById("globos-container");

for (let i = 0; i < 12; i++) {
    let globo = document.createElement("div");
    globo.classList.add("globo");
    globo.style.left = Math.random() * 100 + "vw";
    globo.style.animationDelay = Math.random() * 5 + "s";
    globo.style.background = ["#ff6f91", "#ff9671", "#ffc75f", "#f9f871"][Math.floor(Math.random()*4)];
    contenedor.appendChild(globo);
}

// Evento clic en el regalo
document.getElementById("regalo").addEventListener("click", () => {

    const boletosDiv = document.getElementById("boletos");
    const mensajeCine = document.getElementById("mensaje-cine");

    // Mostrar boletos
    boletosDiv.style.display = "block";
    boletosDiv.innerHTML = `
        <img src="imagenes/cine.png" class="boleto">
        <img src="imagenes/cine.png" class="boleto">
        <img src="imagenes/cine.png" class="boleto">
    `;

    // Mostrar mensaje
    mensajeCine.style.display = "block";
    mensajeCine.textContent = "Tienes una cita en el cine para el próximo fin de semana ❤️";
});
