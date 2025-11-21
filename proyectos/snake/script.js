const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Tamaño de cada cuadrado del juego
const size = 20;

// La serpiente empieza con 1 bloque
let snake = [{ x: 200, y: 200 }];

// Dirección inicial
let dx = size;
let dy = 0;

// Punto inicial de la comida
let food = { x: 100, y: 100 };

function gameLoop() {
    // Mover serpiente
    moveSnake();

    // Dibujar fondo
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dibujar comida
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, size, size);

    // Dibujar serpiente
    ctx.fillStyle = "lime";
    snake.forEach(part => {
        ctx.fillRect(part.x, part.y, size, size);
    });

    requestAnimationFrame(gameLoop);
}

function moveSnake() {
    const head = {
        x: snake[0].x + dx,
        y: snake[0].y + dy
    };

    snake.unshift(head);
    snake.pop();
}

// Controles del teclado
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && dy === 0) {
        dx = 0; dy = -size;
    }
    else if (e.key === "ArrowDown" && dy === 0) {
        dx = 0; dy = size;
    }
    else if (e.key === "ArrowLeft" && dx === 0) {
        dx = -size; dy = 0;
    }
    else if (e.key === "ArrowRight" && dx === 0) {
        dx = size; dy = 0;
    }
});

// Iniciar juego
gameLoop();
