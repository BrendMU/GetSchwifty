class GenerateBoardController
{
    constructor(board, score, scoreFactory, boardCreator, boardBuilder, boardStorage)
    {
        this.board = board;
        this.boardCreator = boardCreator;
        this.boardBuilder = boardBuilder;
        this.scoreFactory = scoreFactory;
        this.score = score
        this.boardStorage = boardStorage;
    }

    getBoard(size, name)
    {
        let boardFromMemory = this.boardStorage.get();

        if(boardFromMemory)
        {
            Object.assign(this.board, boardFromMemory);
        }
        else
        {
            let newBoard = this.boardCreator.createBoard(1, size);
            Object.assign(this.board, newBoard);
        }

        let newScore = this.scoreFactory.createScore(1, name, 0, this.board.size, new Date().toISOString().slice(0, 10))
        Object.assign(this.score, newScore);

        this.boardStorage.add(this.board);
        this.boardBuilder.buildBoard(this.board);
    }
}