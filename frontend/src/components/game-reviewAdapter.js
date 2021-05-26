class GameReviewAdapter {

    constructor(baseURL) {
        this.baseGameURL = `${baseURL}/games`
    }

    getGames() {
        fetch(this.baseGameURL)
        .then(r => r.json())
        .then(games => {
            SpeechRecognitionResult.forEach(game => {
                const g = new Game(game)
                g.addToDom()
            })
        })
        .catch(error => console.error(error))
    }






}