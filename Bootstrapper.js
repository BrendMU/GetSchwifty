class Bootstrapper
{
    BootstrapControllers()
    {
        let board = new Board([], 0);

        let moveStrategy = new CellMoveStrategy();
        let makeMoveController = new MakeMoveController(board, moveStrategy);

        let boardWinValidator = new BoardWinValidator(board);

        let cellBuilder = new CellBuilder();
        let modalBuilder = new ModalBuilder();

        let getBoardController = new GetBoardController(board);
        let checkWinController = new WinCheckController(board, boardWinValidator, modalBuilder);
        
        let boardBuilder = new BoardBuilder(cellBuilder, makeMoveController, getBoardController, checkWinController);
        
        let boardValidator = new BoardValidator();
        
        let cellFactory = new CellFactory({1: (number, content) => new Cell(number, content)});
        let boardFactory = new BoardFactory({1: (board, size) => new Board(board, size)}, cellFactory, boardValidator);
        
        let generateBoardController = new GenerateBoardController(board, boardFactory, boardBuilder);

        return { generateBoardController };
    }
}

let bootstrapper = new Bootstrapper();
let controllers = bootstrapper.BootstrapControllers();