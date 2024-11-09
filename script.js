const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const videoContainer = document.getElementById("videoContainer");
const content = document.querySelector(".content"); // Contenedor principal que tiene los botones y título

// Mover el botón "No" aleatoriamente dentro de los límites visibles de la ventana
noButton.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    noButton.style.position = "fixed";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

// Mostrar el video local y ocultar todos los demás elementos al hacer clic en "Sí"
yesButton.addEventListener("click", () => {
    // Ocultar todos los elementos (botones y título)
    content.classList.add("hidden");
    noButton.classList.add("hidden");
    
    // Mostrar el video
    videoContainer.innerHTML = `
        <video controls autoplay>
            <source src="XDDD.mp4" type="video/mp4">
            Tu navegador no soporta el elemento de video.
        </video>
    `;
    videoContainer.style.display = "flex"; // Muestra el contenedor del video en pantalla completa
});
