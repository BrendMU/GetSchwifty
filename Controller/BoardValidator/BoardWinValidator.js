class BoardWinValidator
{
    constructor(board)
    {
        this.board = board;
    }

    checkWin()
    {
        let orderedNumbers = [].concat(...this.board.board);

        if(orderedNumbers[orderedNumbers.length - 1].number)
        {
            return false;
        }

        for(let i = 1; i < orderedNumbers.length - 2; i++)
        {
            if(orderedNumbers[i - 1].number + 1 !== orderedNumbers[i].number)
                return true;
        }

        return false;
    }
}