window.addEventListener("load", () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    let controllers = new Controllers();

    controllers.getControllers().generateBoardController.getBoard(params.size, params.name);
});