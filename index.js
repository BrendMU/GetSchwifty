window.addEventListener("load", () => {
    document.getElementById("size").oninput = function() 
    {
        if(this.value < 2)
        {
            this.value = 2;
        }
    };
})

function startGame()
{
    let sizeInput = document.getElementById("size");
    let nameInput = document.getElementById("name");

    window.location.href = `./View/Pages/Game/Game.html?size=${sizeInput.value}&name=${nameInput.value}`;
}