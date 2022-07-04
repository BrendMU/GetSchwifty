class CellMoveStrategy
{
    makeMove(board, row, column)
    {
        for(let i = 0; i < board.size; i++)
        {
            let emptyCell = board.board[i].find((cell) => cell.number === 0);
            let emptyCellIndex = board.board[i].indexOf(emptyCell);

            if(emptyCell)
            {
                let temp = board.board[row][column];
                board.board[row][column] = board.board[i][emptyCellIndex]; 
                board.board[i][emptyCellIndex] = temp;
                return board.board;
            }
        }

    }
}