class Bootstrapper
{
    BootstrapControllers()
    {
        let board = new Board([], 0);
        let score = new Score();

        let scoreStorage = new ScoreStorage();
        let boardStorage = new BoardStorage();

        let moveStrategy = new CellMoveStrategy();
        let makeMoveController = new MakeMoveController(board, score, moveStrategy, boardStorage);

        let boardWinValidator = new BoardWinValidator(board);

        let scoreFactory = new ScoreFactory({1: (name, moveCount, boardSize, startDate) => new Score(name, moveCount, boardSize, startDate)});

        let cellBuilder = new CellBuilder();
        let modalBuilder = new ModalBuilder();

        let getBoardController = new GetBoardController(board);
        let checkWinController = new WinCheckController(board, score, boardWinValidator, modalBuilder, scoreStorage);
        
        let boardBuilder = new BoardBuilder(cellBuilder, makeMoveController, getBoardController, checkWinController);
        let scoreBuilder = new ScoreBuilder();

        let boardValidator = new BoardValidator();
        
        let cellFactory = new CellFactory({1: (number, content) => new Cell(number, content)});
        let boardFactory = new BoardFactory({1: (board, size) => new Board(board, size)}, cellFactory, boardValidator);
        
        let generateBoardController = new GenerateBoardController(board, score, scoreFactory, boardFactory, boardBuilder, boardStorage);
        let getScoresController = new GetScoresController(scoreStorage, scoreBuilder);

        return { generateBoardController, getScoresController };
    }
}

class Controllers
{
    getControllers()
    {
        let bootstrapper = new Bootstrapper();

        if(!this.controllers)
        {
            this.controllers = bootstrapper.BootstrapControllers();
        }

        return this.controllers;
    }    
}