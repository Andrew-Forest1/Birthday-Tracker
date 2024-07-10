class GiftsController < ApplicationController
    before_action :find_gift, only: [:destroy, :show, :update]

    def index
        render json: Gift.all, status: :ok
    end

    def create
        @gift = Gift.create!(friend_params)
        render json: @gift, status: :created
    end

    def show
        if @gift
            render json: @gift, status: :ok
        else
            render json: {error: "Gift Not Found"}, status: 404
        end
    end

    def update
        @gift.update!(gift_params)
        render json: @gift, status: :accepted
    end 

    def destroy
        if @gift
            @gift.destroy
            head :no_content
        else
            render json: {error: "Gift Not Found"}, status: 404
        end
    end

    private

    def find_gift
        @gift = Gift.Find(gift_params[:id])
    end

    def gift_params
        params.permit(:description, :price, :link)
    end
end
