window.addEventListener("load", () => {
    document.getElementById("size").oninput = function() 
    {
        if(this.value < 2)
        {
            this.value = 2;
        }
    };
})

function startGame(isContinue)
{
    let sizeInput = document.getElementById("size");
    let nameInput = document.getElementById("name");

    if(!isContinue)
    {
        localStorage.removeItem("board");
    }
    else if(!localStorage.getItem("board"))
    {
        return;
    }

    if(!nameInput.value)
    {
        return;
    }

    window.location.href = `./View/Pages/Game/Game.html?size=${sizeInput.value}&name=${nameInput.value}`;
}

function showTopScores()
{
    window.location.href = `./View/Pages/Scores/Scores.html`;
}