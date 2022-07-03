class CellFactory
{
    constructor(cells)
    {
        this.cells = cells;
    }

    createCell(cellType, number, content)
    {
        return this.cells[cellType](number, content);
    }
}