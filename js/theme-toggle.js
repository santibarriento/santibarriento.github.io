// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
    // Obtiene referencias a elementos del DOM:
    // - El icono del tema
    // - El elemento body
    const themeIcon = document.getElementById("theme-icon");
    const body = document.body;

    // Verifica si hay un tema guardado en localStorage
    // Puede ser "oscuro" o "claro"
    const temaGuardado = localStorage.getItem("tema");

    // Si el tema guardado es "oscuro"
    if (temaGuardado === "oscuro") {
        // Añade la clase dark-mode al body
        body.classList.add("dark-mode");
        // Cambia el icono a luna
        themeIcon.textContent = "🌙";
    } else {
        // Si no es oscuro, remueve la clase dark-mode
        body.classList.remove("dark-mode");
        // Cambia el icono a sol
        themeIcon.textContent = "☀️";
    }

    // Añade un evento click al icono del tema
    themeIcon.addEventListener("click", () => {
        // Toggle alterna la clase dark-mode y devuelve true si la añadió
        // o false si la removió
        const modoOscuro = body.classList.toggle("dark-mode");

        if (modoOscuro) {
            // Si está en modo oscuro, muestra luna
            themeIcon.textContent = "🌙";
            // Guarda el tema oscuro en localStorage
            localStorage.setItem("tema", "oscuro");
        } else {
            // Si está en modo claro, muestra sol
            themeIcon.textContent = "☀️";
            // Guarda el tema claro en localStorage
            localStorage.setItem("tema", "claro");
        }

        // Añade clase para animar el icono con rotación
        themeIcon.classList.add("rotate-icon");
        // Remueve la clase después de 400ms para que la animación
        // solo ocurra una vez
        setTimeout(() => themeIcon.classList.remove("rotate-icon"), 400);
    });
});