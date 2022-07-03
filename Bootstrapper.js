class Bootstrapper
{
    BootstrapControllers()
    {
        let cellBuilder = new CellBuilder();
        let boardBuilder = new BoardBuilder(cellBuilder);
        
        let boardValidator = new BoardValidator();
        
        let cellFactory = new CellFactory({1: (number, content) => new Cell(number, content)});
        let boardFactory = new BoardFactory({1: (board, size) => new Board(board, size)}, cellFactory, boardValidator);


        let getBoardController = new GetBoardController(boardFactory, boardBuilder);

        return { getBoardController };
    }
}

let bootstrapper = new Bootstrapper();
let controllers = bootstrapper.BootstrapControllers();