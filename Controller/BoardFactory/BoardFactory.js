class BoardFactory
{
    constructor(boards, cellFactory)
    {
        this.boards = boards;
        this.cellFactory = cellFactory;
    }

    createBoard(boardType, size)
    {
        let possibleNumbers = Array.from(Array(size * size).keys())
        let randomizedNumbers = this.shuffle(possibleNumbers);
        let boardArray = [];

        for(let i = 0; i < size; i++)
        {
            boardArray.push(new Array(size));

            for(let j = 0; j < size; j++)
            {
                let number = randomizedNumbers[i * size + j]
                boardArray[i][j] = this.cellFactory.createCell(1, number, number);
            }
        }

        return this.boards[boardType](boardArray, size);
    }

    shuffle(array) {

        let currentIndex = array.length,  randomIndex;
      
        while (currentIndex != 0) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
}