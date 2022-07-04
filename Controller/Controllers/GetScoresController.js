class GetScoresController
{
    constructor(scoreStorage, scoreBuilder)
    {
        this.scoreStorage = scoreStorage;
        this.scoreBuilder = scoreBuilder;
    }

    getScores()
    {
        let scores = this.scoreStorage.getAll();
        this.scoreBuilder.buildScores(scores);
    }
}