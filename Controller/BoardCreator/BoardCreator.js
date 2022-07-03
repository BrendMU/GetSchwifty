class BoardCreator
{
    constructor(boards)
    {
        this.boards = boards;
    }

    CreateBoard(boardType, size)
    {
        let boardArray = [];

        for(let i = 0; i < size; i++)
        {
            boardArray.push(new Array(size));

            for(let j = 0; j < size; j++)
            {
                boardArray[i][j] = Math.floor(Math.random() * (size * size) + 1);
            }
        }

        return boards[boradType];
    }
}