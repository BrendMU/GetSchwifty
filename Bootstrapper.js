class Bootstrapper
{
    BootstrapControllers()
    {
        let cellBuilder = new CellBuilder();
        let boardBuilder = new BoardBuilder(cellBuilder);
        
        let boardCreator = new BoardCreator({1: (board, size) => new Board(board, size)});

        let getBoardController = new GetBoardController(boardCreator, boardBuilder);

        return { getBoardController };
    }
}

let bootstrapper = new Bootstrapper();
let controllers = bootstrapper.BootstrapControllers();