class FriendsController < ApplicationController
    before_action :find_friend, only: [:destroy, :show, :update]

    def index
        render json: Friend.all, status: :ok
    end

    def create
        @friend = Friend.create!(friend_params)
        render json: @friend, status: :created
    end

    def show
        if @friend
            render json: @friend, status: :ok
        else
            render json: {error: "Friend Not Found"}, status: 404
        end
    end

    def update
        @friend.update!(friend_params)
        render json: @friend, status: :accepted
    end 

    def destroy
        if @friend
            @friend.destroy
            head :no_content
        else
            render json: {error: "Friend Not Found"}, status: 404
        end
    end

    private

    def find_friend
        @friend = Friend.Find(friend_params[:id])
    end

    def friend_params
        params.permit(:name, :address, :birthday)
    end
end
