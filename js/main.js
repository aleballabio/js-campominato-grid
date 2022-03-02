// variables

const difficulty = document.querySelector("#difficulty");

const grid = document.querySelector(".grid")
grid.style.display = "none";



//Button
let buttonPlay = document.querySelector("#play");
buttonPlay.addEventListener("click", play);

function play() {
    grid.innerHTML = ""
    grid.style.display = "flex";
    let difficultyValue = difficulty.value;

    switch (difficultyValue) {
        case "Facile":
            for (let times = 1; times <= 49; times++) {
                const ElementCell = document.createElement("div");
                ElementCell.classList.add("cell");
                ElementCell.classList.add("small");
                ElementCell.addEventListener("click", function () {
                    ElementCell.classList.add("change-color");
                });

                grid.append(ElementCell);

                ElementCell.innerHTML += times;
            }
            break;

        case "Medio":
            for (let times = 1; times <= 81; times++) {
                const ElementCell = document.createElement("div");
                ElementCell.classList.add("cell");
                ElementCell.classList.add("medium");

                ElementCell.style.flexBasis = "calc(100% / 9)";
                ElementCell.style.height = "calc(100% / 9)";
                ElementCell.addEventListener("click", function () {
                    ElementCell.classList.add("change-color");
                });

                grid.append(ElementCell);

                ElementCell.innerHTML += times;
            }

            break;

        case "Difficile":
            for (let times = 1; times <= 100; times++) {
                const ElementCell = document.createElement("div");

                ElementCell.classList.add("cell");
                ElementCell.classList.add("big");
                ElementCell.addEventListener("click", function () {
                    ElementCell.classList.add("change-color");
                });

                grid.append(ElementCell);

                ElementCell.innerHTML += times;
            }

            break;
    }
}