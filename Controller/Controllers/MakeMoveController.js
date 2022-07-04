class MakeMoveController
{
    constructor(board, moveStrategy)
    {
        this.board = board;
        this.moveStrategy = moveStrategy;
    }

    makeMove(row, column)
    {
        this.board.board = this.moveStrategy.makeMove(this.board, row, column);
    }
}