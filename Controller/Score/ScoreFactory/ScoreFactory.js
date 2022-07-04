class ScoreFactory
{
    constructor(scores)
    {
        this.scores = scores;
    }

    createScore(scoreType, name, moveCount, boardSize, startDate)
    {
        return this.scores[scoreType](name, moveCount, boardSize, startDate)
    }
}