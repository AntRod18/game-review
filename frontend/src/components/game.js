class Game {
    static all = []

    constructor({id, title, released_date, reviews}){
        this.id = id
        this.title = title
        this.released_date = released_date
        this.reviews = reviews.map(r => new Review(r))

        Game.all.push(this)
    }

    render(){
        
        return(`<h3><li id="game-${this.id}">

        <span>${this.title} - Released: ${this.released_date}</span>
        <button action='display'>Display Reviews</button>
        </li></h3><br>`)
        
    }

    addToDom(){
        const gamesContainer = document.getElementById("games-container");
        gamesContainer.innerHTML = gamesContainer.innerHTML + this.render()
    }

    renderReviews(){
        const li = document.getElementById(`game-${this.id}`)
        const ul = document.createElement(`ul`)

        this.reviews.forEach(r => ul.innerHTML += r.render())
        li.append(ul)
        
    }

}