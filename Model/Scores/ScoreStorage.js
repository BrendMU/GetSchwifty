class ScoreStorage
{
    add(score)
    {
        let scoreStorage = [];
        let scoreStorageString = localStorage.getItem("scores");

        if(scoreStorageString)
        {
            scoreStorage = JSON.parse(scoreStorage);
        }

        scoreStorage.push(score);
        scoreStorage.sort(function (a, b) { return a.moveCount - b.moveCount });
        localStorage.setItem("scores", JSON.stringify(scoreStorage));
    }

    getAll()
    {
        return JSON.parse(localStorage.getItem("scores"));
    }
}