class GenerateBoardController
{
    constructor(board, score, scoreFactory, boardCreator, boardBuilder)
    {
        this.board = board;
        this.boardCreator = boardCreator;
        this.boardBuilder = boardBuilder;
        this.scoreFactory = scoreFactory;
        this.score = score
    }

    getBoard(size, name)
    {
        let newBoard = this.boardCreator.createBoard(1, size);
        this.board.size = newBoard.size;
        this.board.board = newBoard.board;

        let newScore = this.scoreFactory.createScore(1, name, 0, newBoard.size, new Date().toISOString().slice(0, 10))
        this.score = JSON.parse(JSON.stringify(newScore));

        this.boardBuilder.buildBoard(this.board);
    }
}