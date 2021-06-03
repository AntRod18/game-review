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
        
        return(`<h3><li id="game-${this.id}" data-id=${this.id}>

        <span>${this.title} - Released: ${this.released_date}</span>
        <button data-action='display'>Display Reviews</button><br>
        <button data-action='add'>Add Review</button>
        
        <div id="form-container></div>
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
        currentReviews = ul
        
    }

    static listenDisplay(){
        const gamesContainer = document.getElementById("games-container");
        gamesContainer.addEventListener("click", this.handleDisplay)
    }

    static handleDisplay(e){
       
        const li = e.target.parentElement
        const action = e.target.dataset.action
        switch (action){
            case "display":
                if (currentReviews) currentReviews.remove()
                console.log("Displaying Reviews", li.dataset.id)
                const g = Game.all.find(g => g.id == li.dataset.id)
                g.renderReviews();
                break;

            case "add":
                if (currentForm) currentForm.remove()
                console.log("click on add")
                const oneG = Game.all.find(g => g.id == li.dataset.id)
                oneG.addReviewForm();
                
                break;

        }

            
        
    }

    addReviewForm(){
        const oneGame = document.getElementById(`game-${this.id}`)
        const form = document.createElement('form');
        // form.dataset.action = "submit"
        form.dataset.id = this.id
        form.id = "form"

        
        form.innerHTML = `
            <h4>Create a Review</h4>
            <input id="website-input" placeholder='website' type='text'/><br>
            <input id="score-input" placeholder='score' type='text'/><br>
            <input id="snippet-input" placeholder='verdict' type='text'/><br>
            <input data-action="submit" id="review-submit" value='Submit' type='submit'/>`

        oneGame.append(form)
        currentForm = form
    
        form.addEventListener("submit", this.handleSubmit )
    }

    handleSubmit(e) {
        e.preventDefault()
        const game = this.parentElement
        const input = e.target
        // debugger
        // const websiteInput = e.target[0]
        // const scoreInput = e.target[1]
        // const snippetInput = e.target[2]
        Review.createReview(input)
    }


}