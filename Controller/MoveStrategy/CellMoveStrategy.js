class CellMoveStrategy
{
    makeMove(board, row, column)
    {
        for(let i = 0; i < board.size; i++)
        {
            let emptyCellIndex = board.board[i].indexOf(0);

            if(emptyCellIndex >= 0)
            {
                board.board[row][column], board.board[i][emptyCellIndex] = board.board[i][emptyCellIndex], board.board[row][column];
                return board;
            }
        }

    }
}