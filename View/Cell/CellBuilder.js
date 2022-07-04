class CellBuilder
{
    buildCell(content, clickFunction)
    {
        let div = document.createElement("div");
        div.classList.add("cell");

        if(content)
        {
            div.textContent = content;
        }

        if(clickFunction)
        {
            div.addEventListener("click", () => {
                clickFunction();
            });
        }

        return div;
    }
}