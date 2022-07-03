class BoardBuilder
{
    constructor(cellBuilder)
    {
        this.cellBuilder = cellBuilder;
    }

    buildBoard(board)
    {
        let board = document.createElement("div");
        board.classList.add("board");
        board.style.gridTemplateColumns = `repeat(${board.size}, 1fr)`;
        board.style.gridTemplateRows = `repeat(${board.size}, 1fr)`;

        for(let i = 0; i < board.size; i++)
        {
            for(let j = 0; j < board.size; j++)
            {
                let cell = this.cellBuilder.buildCell(board.board[i][j]);
                board.appendChild(cell);
            }
        }

        document.body.appendChild(board);
    }
}
