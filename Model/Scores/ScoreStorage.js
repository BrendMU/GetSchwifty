class ScoreStorage
{
    add(score)
    {
        let scoreStorage = [];
        let scoreStorageString = localStorage.getItem("scores");

        if(scoreStorageString)
        {
            scoreStorage = JSON.parse(scoreStorageString);
        }

        scoreStorage.push(score);
        scoreStorage.sort(function (a, b) { return a.moveCount - b.moveCount });
        scoreStorage = scoreStorage.slice(0, 5);
        localStorage.setItem("scores", JSON.stringify(scoreStorage));
    }

    getAll()
    {
        return JSON.parse(localStorage.getItem("scores"))
    }
}