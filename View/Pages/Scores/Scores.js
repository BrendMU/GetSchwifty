window.addEventListener("load", () => {
    let controllers = new Controllers();

    controllers.getControllers().getScoresController.getScores();
});