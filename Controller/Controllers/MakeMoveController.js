class MakeMoveController
{
    constructor(board, score, moveStrategy)
    {
        this.board = board;
        this.score = score;
        this.moveStrategy = moveStrategy;
    }

    makeMove(row, column)
    {
        this.score.moveCount += 1;
        this.board.board = this.moveStrategy.makeMove(this.board, row, column);
    }
}