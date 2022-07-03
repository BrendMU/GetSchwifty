class CellBuilder
{
    buildCell(content)
    {
        let div = document.createElement("div");
        div.classList.add("cell");

        if(content)
        {
            div.textContent = content;
        }
        
        return div;
    }
}