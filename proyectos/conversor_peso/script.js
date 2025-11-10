// Esperamos a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {

    // Referencias a los inputs por su ID (todos en minúscula)
    const kg = document.getElementById("kg");
    const g = document.getElementById("g");
    const lb = document.getElementById("lb");
    const oz = document.getElementById("oz");
    const t = document.getElementById("t");
    const mg = document.getElementById("mg");

    // 🧹 Función para limpiar todos los campos
    function clearAll() {
        [kg, g, lb, oz, t, mg].forEach(input => input.value = "");
    }

    // ⚙️ Función principal de actualización
    function updateValues(fromField, value) {
        // Si el campo está vacío o no es un número, limpiamos todo
        if (value === "" || isNaN(value)) {
            clearAll();
            return;
        }

        let kgValue; // Variable base (todas las conversiones pasan por kg)

        // Convertimos lo que escribió el usuario a kilogramos
        switch (fromField) {
            case "kg":
                kgValue = value;
                break;
            case "g":
                kgValue = value / 1000;
                break;
            case "lb":
                kgValue = value / 2.20462;
                break;
            case "oz":
                kgValue = value / 35.274;
                break;
            case "mg":
                kgValue = value / 1000000;
                break;
            case "t":
                kgValue = value * 1000;
                break;
        }

        // 🔁 Actualizamos todos los demás campos (menos el que se está editando)
        if (fromField !== "kg") kg.value = parseFloat(kgValue).toFixed(2);
        if (fromField !== "g") g.value = (kgValue * 1000).toFixed(2);
        if (fromField !== "lb") lb.value = (kgValue * 2.20462).toFixed(2);
        if (fromField !== "oz") oz.value = (kgValue * 35.274).toFixed(2);
        if (fromField !== "mg") mg.value = (kgValue * 1000000).toFixed(2);
        if (fromField !== "t") t.value = (kgValue / 1000).toFixed(6);
    }

    // 📲 Escuchamos el evento "input" en cada campo
    [kg, g, lb, oz, mg, t].forEach(input => {
        input.addEventListener("input", (e) => {
            // Reemplaza coma por punto para evitar errores en móviles con teclado en español
            const rawValue = e.target.value.replace(",", ".");
            const value = parseFloat(rawValue);
            const field = e.target.id;

            updateValues(field, value);
        });
    });
});
