document.addEventListener("DOMContentLoaded", () => {

  const kg = document.getElementById("kg");
  const g = document.getElementById("g");
  const lb = document.getElementById("lb");
  const oz = document.getElementById("oz");

  // Función para limpiar todos los campos
  function clearAll() {
    [kg, g, lb, oz].forEach(input => input.value = "");
  }

  // Función principal de actualización
  function updateValues(fromField, value) {
    // Si el campo está vacío, limpia todo
    if (value === "" || isNaN(value)) {
      clearAll();
      return;
    }

    // Convierte a kg desde el campo actual
    let kgValue;

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
    }

    // 🔹 Actualiza los demás campos (sin tocar el que estás escribiendo)
    if (fromField !== "kg") kg.value = parseFloat(kgValue).toFixed(2);
    if (fromField !== "g") g.value = (kgValue * 1000).toFixed(2);
    if (fromField !== "lb") lb.value = (kgValue * 2.20462).toFixed(2);
    if (fromField !== "oz") oz.value = (kgValue * 35.274).toFixed(2);
  }

  // Añadimos el evento input a cada campo
  [kg, g, lb, oz].forEach(input => {
    input.addEventListener("input", (e) => {
      const value = parseFloat(e.target.value);
      const field = e.target.id;
      updateValues(field, value);
    });
  });
});
