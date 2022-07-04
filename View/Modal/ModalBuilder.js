class ModalBuilder
{
    buildModal()
    {
        let div = document.createElement("div");

        let paragraph = document.createElement("p");
        paragraph.textContent = "Game Over!";
        
        let restartButton = document.createElement("div");
        restartButton.classList.add("restart-button");
        restartButton.textContent = "Restart";

        restartButton.addEventListener("click", () => {
            window.location.href = "../../../index.html";
        })

        div.appendChild(paragraph);
        div.appendChild(restartButton);

        div.classList.add("modal");

        document.body.appendChild(div);
    }
}