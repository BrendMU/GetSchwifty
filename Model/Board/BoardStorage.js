class BoardStorage
{
    add(board)
    {
        localStorage.setItem("board", JSON.stringify(board));
    }

    get()
    {
        return JSON.parse(localStorage.getItem("board"));
    }
}