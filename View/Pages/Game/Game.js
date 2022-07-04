window.addEventListener("load", () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    controllers.generateBoardController.getBoard(params.size, params.name);
});