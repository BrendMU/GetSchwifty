class WinCheckController
{
    constructor(board, boardWinValidator, modalBuilder)
    {
        this.board = board;
        this.boardWinValidator = boardWinValidator;
        this.modalBuilder = modalBuilder;
    }

    checkWin()
    {
        let isGameOver = this.boardWinValidator.checkWin();

        if(isGameOver)
        {
            this.modalBuilder.buildModal();
        }
    }
}