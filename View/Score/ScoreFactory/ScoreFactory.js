class ScoreFactory
{
    constructor(scores)
    {
        this.scores = scores;
    }

    createScore(scoreType, name, moveCount, boardSize, startDate)
    {
        this.scores[scoreType](name, moveCount, boardSize, startDate)
    }
}