class WinCheckController
{
    constructor(board, score, boardWinValidator, modalBuilder, scoreStorage)
    {
        this.board = board;
        this.boardWinValidator = boardWinValidator;
        this.modalBuilder = modalBuilder;
        this.scoreStorage = scoreStorage;
        this.score = score;
    }

    checkWin()
    {
        let isGameOver = this.boardWinValidator.checkWin();
        console.log(this.score);
        if(isGameOver)
        {
            this.scoreStorage.add(this.score);
            this.modalBuilder.buildModal();
        }
    }
}