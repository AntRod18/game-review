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
            `<li id=${this.game_id} data-id=${this.id}><span>${this.score}</span> - <span>${this.website}</span><br>
            <span> Verdict: ${this.snippet}</span>
            <button data-action='delete'>Delete Review</button>
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

    static deleteReview(li){
        const gameId = li.id
        const reviewId = li.dataset.id
        

        fetch(`http://localhost:3000/games/${gameId}/reviews/${reviewId}`, {
            method: "DELETE"
        })
        .then(resp => {
            console.log(resp)
            return resp.json()
        })
        .then(data => {
            if (data.message === "Successfully deleted"){
                // delete li for DOM
                li.remove()
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
    }

    // addToDom(){
    //     const reviewsContainer = document.getElementById("reviews-container");
    //     reviewsContainer.innerHTML += this.render()
    // }

}