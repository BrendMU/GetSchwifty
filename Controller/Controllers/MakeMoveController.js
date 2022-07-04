class MakeMoveController
{
    constructor(board, score, moveStrategy, boardStorage)
    {
        this.board = board;
        this.score = score;
        this.moveStrategy = moveStrategy;
        this.boardStorage = boardStorage;
    }

    makeMove(row, column)
    {
        this.score.moveCount += 1;
        this.board.board = this.moveStrategy.makeMove(this.board, row, column);
        this.boardStorage.add(this.board);
    }
}