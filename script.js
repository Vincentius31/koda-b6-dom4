const container = document.getElementById("container");
const boardSize = 8;

for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
        const square = document.createElement("div");
        const isDark = (i + j) % 2 === 1;
        if (isDark) {
            square.classList.add("square", "dark");
        } 
        else {
            square.classList.add("square", "light");
        }
        container.appendChild(square);
    }
}