const gridSize = 500;
const numPixels = 16;


grid = document.querySelector("#grid");
grid.style.margin = "auto";
grid.style.display = "flex";
grid.style.height = gridSize + "px";
grid.style.width = gridSize + "px";
grid.style.border = "solid";

button = document.querySelector("button");
button.addEventListener("click", (e) => {
    size = prompt("Enter desired grid size (<=100): ");
    if (size > 100) {
        alert("Size too large. Please enter a number <=100");
        return;
    }

    pixels = document.querySelectorAll(".pixel");

    pixels.forEach(pixel => {
        pixel.remove()
    });

    createPixels(size);
});


function createPixels(numPixels) {
    for (let index = 0; index < numPixels; index++) {
        const row = document.createElement("div");
        for (let index = 0; index < numPixels; index++) {
            const pixel = document.createElement("div");
            pixel.style.height = gridSize/numPixels + "px";
            pixel.style.width = gridSize/numPixels + "px";
            pixel.style.background = "white";
            pixel.classList.add("pixel")

            pixel.addEventListener("mouseover", (e) => {
                pixel.style.background = "black";
            });

            row.appendChild(pixel);
        }
        grid.appendChild(row);
    }

}

createPixels(16);





