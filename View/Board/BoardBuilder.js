class BoardBuilder
{
    constructor(cellBuilder)
    {
        this.cellBuilder = cellBuilder;
    }

    buildBoard(board)
    {
        let boardDiv = document.createElement("div");
        boardDiv.classList.add("board");
        boardDiv.style.gridTemplateColumns = `repeat(${board.size}, 1fr)`;
        boardDiv.style.gridTemplateRows = `repeat(${board.size}, 1fr)`;

        for(let i = 0; i < board.size; i++)
        {
            for(let j = 0; j < board.size; j++)
            {
                let cell = this.cellBuilder.buildCell(board.board[i][j].content);
                boardDiv.appendChild(cell);
            }
        }

        let boardWrapper = document.getElementsByClassName("board-wrapper")[0];
        boardWrapper.appendChild(boardDiv);
    }
}
