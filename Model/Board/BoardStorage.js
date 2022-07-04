class BoardStorage
{
    add(board)
    {
        localStorage.setItem("board", JSON.stringify(board));
    }

    get()
    {
        let board = localStorage.getItem("board");

        if(!board)
        {
            return;
        }

        return JSON.parse(board);
    }
}