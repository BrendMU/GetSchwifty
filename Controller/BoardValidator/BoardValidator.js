class BoardValidator
{
    validateBoard(board)
    {
        let count = 0;

        for(let i = 0; row < board.size; i++)
        {
            for(let j = 0; j < board.size; j++)
            {
                count += this.countOpposites(board, i, j);
            }
        }

        if(board.size % 2 == 0)
        {
            count += this.findEmptyCell(board);
        }

        return count % 2 == 0;
    }

    countOpposites(board, row, column)
    {
        let count = 0;

        for(let i = row; row < board.size; i++)
        {
            for(let j = i == row ? column : 0; j < board.size; j++)
            {
                if(board.board[i][j] < board.board[row][column])
                {
                    count++;
                }
            }
        }   
    }

    findEmptyCell(board)
    {
        for(let i = 0; i < board.size; i++)
        {
            let columnIndex = board.board[i].indexOf(0);

            if(rowIndex >= 0)
            {
                return i + 1; 
            }
        }
    }
}