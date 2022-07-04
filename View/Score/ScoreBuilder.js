class ScoreBuilder
{
    buildScores(scores)
    {
        const scoresWrapper = document.createElement("div");
        scoresWrapper.classList.add("score-wrapper");

        const header = document.createElement("h1");
        header.textContent = "Top Scores";
        scoresWrapper.appendChild(header);

        for(let score of scores)
        {
            let scoreDiv = document.createElement("div");
            scoreDiv.classList.add("score");

            for(let key in score)
            {
                let span = document.createElement("span");
                span.textContent = score[key];
                scoreDiv.appendChild(span);
            }

            scoresWrapper.appendChild(scoreDiv);
        }

        document.body.innerHTML = "";
        document.body.appendChild(scoresWrapper);
    }
}