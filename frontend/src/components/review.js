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
            `<li data-id=${this.id}><span>${this.score}</span> - <span>${this.website}</span><br>
            <span> Verdict: ${this.snippet}</span>
            <button data-action='edit'>Edit Review</button>
            </li>`
            
        )
    }

    static createReview(input){
        const id = document.getElementById("form").dataset.id

        // debugger
        fetch( `http://localhost:3000/games/${id}/reviews`, {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                website: input[0].value,
                score: input[1].value,
                snippet: input[2].value
                    
            })
        })
        
        .then(resp => resp.json())
        .then(data => {
            debugger
            console.log(data)
        })
        .catch(err => console.error("Im in the catch", err))
    }

    // addToDom(){
    //     const reviewsContainer = document.getElementById("reviews-container");
    //     reviewsContainer.innerHTML += this.render()
    // }

}