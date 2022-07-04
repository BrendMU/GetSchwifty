class GetBoardController
{
    constructor(board)
    {
        this.board = board;
    }

    getBoard(boardBuilder)
    {
        boardBuilder.buildBoard(this.board);
    }
}