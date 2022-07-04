class GenerateBoardController
{
    constructor(board, boardCreator, boardBuilder)
    {
        this.board = board;
        this.boardCreator = boardCreator;
        this.boardBuilder = boardBuilder;
    }

    getBoard(size)
    {
        let newBoard = this.boardCreator.createBoard(1, size);
        this.board.size = newBoard.size;
        this.board.board = newBoard.board;
        this.boardBuilder.buildBoard(this.board);
    }
}