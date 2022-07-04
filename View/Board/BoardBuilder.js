class BoardBuilder
{
    constructor(cellBuilder, makeMoveContoller, getBoardController, checkWinController)
    {
        this.cellBuilder = cellBuilder;
        this.makeMoveContoller = makeMoveContoller;
        this.getBoardController = getBoardController;
        this.checkWinController = checkWinController;
    }

    buildBoard(board)
    {
        const clickFunction = (i, j) => 
        {
            this.makeMoveContoller.makeMove(i, j);
            this.getBoardController.getBoard(this);
            this.checkWinController.checkWin();
        };

        let boardDiv = document.createElement("div");
        boardDiv.classList.add("board");
        boardDiv.style.gridTemplateColumns = `repeat(${board.size}, 1fr)`;
        boardDiv.style.gridTemplateRows = `repeat(${board.size}, 1fr)`;

        let boardWrapper = document.createElement("div");
        boardWrapper.classList.add("board-wrapper");
        boardWrapper.appendChild(boardDiv);

        for(let i = 0; i < board.size; i++)
        {
            for(let j = 0; j < board.size; j++)
            {
                let isAdjancentToEmptyCell = (i - 1 >= 0 && board.board[i - 1][j].number === 0) ||
                (i + 1 < board.size && board.board[i + 1][j].number === 0) ||
                (j - 1 >= 0 && board.board[i][j - 1].number === 0) || 
                (j + 1 < board.size && board.board[i][j + 1].number === 0);
                
                let cell = this.cellBuilder.buildCell(board.board[i][j].content, isAdjancentToEmptyCell && (() => clickFunction(i, j)));
                boardDiv.appendChild(cell);
            }
        }

        document.body.innerHTML = "";
        document.body.appendChild(boardWrapper);
    }
}
