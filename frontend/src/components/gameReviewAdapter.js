class GameReviewAdapter {

    static baseGameURL = "http://localhost:3000/games"

    static getGames() {
        fetch(this.baseGameURL)
        .then(r => r.json())
        .then(games => {
            games.forEach(game => {
                const g = new Game(game)
                g.addToDom()
            })
        })
        .catch(error => console.error(error))
    }







}