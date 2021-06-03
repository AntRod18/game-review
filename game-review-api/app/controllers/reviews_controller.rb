class ReviewsController < ApplicationController
#   before_action :set_review, only: [:show, :update, :destroy]

#   # GET /reviews
  def index
    @reviews = Review.all

    render json: @reviews, except: [:created_at, :updated_at]
  end

#   # GET /reviews/1
#   def show
#     render json: @review
#   end

#   # POST /reviews
  def create
    @game = Game.find_by_id(params[:game_id])
    @review = @game.reviews.build(review_params)
    
    if @review.save
      render json: @review, status: :created, location: @review
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end
  end

#   # PATCH/PUT /reviews/1
  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reviews/1
  def destroy
    @game = Game.find_by_id(params[:game_id])
    @review = @game.reviews.destroy
    
  end

  private
#     # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
    end

#     # Only allow a list of trusted parameters through.
    def review_params
      params.require(:review).permit(:website, :score, :snippet, :game_id)
    end
end
