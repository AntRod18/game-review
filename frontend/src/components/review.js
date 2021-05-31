class Review {

    static all = []
    
    constructor({id, game_title, website, score, snippet, game_id}) {
        this.id = id
        this.game_title = game_title
        this.website = website
        this.score = score
        this.snippet = snippet
        this.game_id = game_id

        Review.all.push(this)
    }

     render(){
        return(
            `<li data-id=${this.id}><span>${this.score}</span> - <span>${this.website}</span></li>`
        )
    }

    // addToDom(){
    //     const reviewsContainer = document.getElementById("reviews-container");
    //     reviewsContainer.innerHTML += this.render()
    // }

}