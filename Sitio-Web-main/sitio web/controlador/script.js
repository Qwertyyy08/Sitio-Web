window.addEventListener("DOMContentLoaded", () => {
    let index = 0;
    const imagenes = document.querySelectorAll(".carrusel img");

    if (imagenes.length === 0) return;

    setInterval(() => {
        imagenes[index].classList.remove("activo");
        index = (index + 1) % imagenes.length;
        imagenes[index].classList.add("activo");
    }, 3000);
});