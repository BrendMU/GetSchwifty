class BoardValidator
{
    validateBoard(board)
    {
        console.log("validating");
        let count = 0;

        for(let i = 0; i < board.size; i++)
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

        for(let i = row; i < board.size; i++)
        {
            let startingColumn = i == row ? column : 0;
            for(let j = startingColumn; j < board.size; j++)
            {
                let isOpposite = board.board[i * board.size + j] && board.board[i * board.size + j] < board.board[row * board.size + column];
                
                if(isOpposite)
                {
                    count++;
                }
            }
        }   

        return count;
    }

    findEmptyCell(board)
    {
        for(let i = 0; i < board.size; i++)
        {
            let columnIndex = board.board.slice(i, i + board.size).indexOf(0);

            if(columnIndex >= 0)
            {
                return i + 1; 
            }
        }
    }
}