class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    # GET/users
    def index 
        render json: User.all
    end

    # GET/users/:id
    def show
        render json: @current_user
    end

    # POST/users
    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    
    # DELETE /users/:id
    def destroy 
        user = User.find(params[:id])
        user.destroy 
        head :no_content 
    end

  private 

    def user_params
        params.permit(:name, :username, :email, :password)
    end
end
