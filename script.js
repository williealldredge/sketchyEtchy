const container = document.querySelector("#container")

function choose() {
     const input = prompt("how big of a grid do you want?");
     v = input;
     createGrid(v);
}



function createGrid(v) {
    for (let i = 0; i < v; i++){
        const row = document.createElement('div');
        row.className = "row";
        for (let x = 1; x <= v; x++){
            const cell = document.createElement("div");
            cell.className = "cell";
            row.appendChild(cell);
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = "black";
            })
        }
        container.appendChild(row);
    }
}


