class WinCheckController
{
    constructor(board, score, boardWinValidator, modalBuilder, scoreStorage, boardStorage)
    {
        this.board = board;
        this.boardWinValidator = boardWinValidator;
        this.modalBuilder = modalBuilder;
        this.scoreStorage = scoreStorage;
        this.score = score;
        this.boardStorage = boardStorage;
    }

    checkWin()
    {
        let isGameOver = this.boardWinValidator.checkWin();

        if(isGameOver)
        {
            this.boardStorage.remove();
            this.scoreStorage.add(this.score);
            this.modalBuilder.buildModal();
        }
    }
}