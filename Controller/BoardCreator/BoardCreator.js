class BoardCreator
{
    constructor(boards)
    {
        this.boards = boards;
    }

    createBoard(boardType, size)
    {
        let possibleNumbers = Array.from({length: size * size}, (_, i) => i + 1);
        let randomizedNumbers = this.shuffle(possibleNumbers);
        let boardArray = [];

        for(let i = 0; i < size; i++)
        {
            boardArray.push(new Array(size));

            for(let j = 0; j < size; j++)
            {
                boardArray[i][j] = {number: randomizedNumbers[(i * size) + j], content: randomizedNumbers[(i * size) + j]}
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