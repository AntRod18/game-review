class Game {
    static all = []

    constructor({title, releasedDate}){
        this.title = title
        this.releasedDate = releasedDate
        this.reviews = reviews.map(r => new Review(r))

        Store.all.push(this)
    }
}