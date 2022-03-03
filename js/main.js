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
    const finalCellsNumber = []
    let score = 0;

    //Difficutly of the Game

    switch (difficultyValue) {

        case "Facile":
            score = 0

            for (let times = 1; times <= 49; times++) {
                finalCellsNumber.push(times)

                const ElementCell = document.createElement("div");
                ElementCell.classList.add("cell");
                ElementCell.classList.add("small");
                ElementCell.addEventListener("click", function () {
                    ElementCell.style.backgroundColor = "green";
                    score++;
                    console.log(score);
                });

                grid.append(ElementCell);

                ElementCell.innerHTML += times;
            }

            //Bombs

            const NumeriBombe = []

            while (NumeriBombe.length < 16) {

                const numberRandom = randomNumber(1, finalCellsNumber.length)
                console.log(numberRandom)

                if (NumeriBombe[numberRandom] == numberRandom) {

                } else {
                    NumeriBombe.push(numberRandom);
                    console.log(numberRandom)
                }
            }

            //Explosion

            let queryCell = document.querySelectorAll(".cell");

            queryCell.addEventListener("click", explosion);

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



//NumeriBombe

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}