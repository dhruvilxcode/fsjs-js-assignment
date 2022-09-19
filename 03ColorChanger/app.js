const btn = document.getElementById("button");
const canvas = document.getElementById("canvas");

// click event
btn.addEventListener('click', changeCanvasColor);

// function to change color of canvas
function changeCanvasColor() {
    const colors = [
        "#FF6666",
        "#CCFF66",
        "#5D2E8C",
        "#2EC4B6",
        "#F1E8B8",
        "#FFE74C",
        "#FF5964",
        "#343A1A",
        "#640D14",
        "#1B1B3A"
    ];

    const color = colors[Math.floor(Math.random() * colors.length)];

    canvas.style.backgroundColor = color;
}