class WinCheckController
{
    constructor(board, boardWinValidator)
    {
        this.board = board;
        this.boardWinValidator = boardWinValidator;
    }

    checkWin()
    {
        let isGameOver = this.boardWinValidator.checkWin();
        console.log(isGameOver);

        if(isGameOver)
        {
            alert("Game Over!");
        }
    }
}