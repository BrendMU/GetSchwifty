class CellBuilder
{
    buildCell(content)
    {
        let div = document.createElement("div");
        div.classList.add("cell");
        div.textContent = content;
        return div;
    }
}