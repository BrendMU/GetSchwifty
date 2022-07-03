class GetBoardController
{
    constructor(boardCreator, boardBuilder)
    {
        this.boardCreator = boardCreator;
        this.boardBuilder = boardBuilder;
    }

    getBoard(size)
    {
        let board = this.boardCreator.createBoard(1, size);
        this.boardBuilder.buildBoard(board);
    }
}