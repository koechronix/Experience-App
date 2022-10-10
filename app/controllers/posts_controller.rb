class PostsController < ApplicationController

    #GET/posts    
    def index
        posts = Post.all.order('created_at DESC')
        render json: posts
    end

    # GET/posts/:id
    def show
        post = Post.find(params[:id])
        render json: post
    end

    # POST/posts
    def create
        post = Post.create(post_params)
        if post.valid?
            render json: post
        else
            render json: {errors: post.errors}, status: :unprocessable_entity
        end
    end

    # PATCH/posts/:id
    def update
        post = Post.find(params[:id])
        post.update(update_params)
        render json: post
    end

    # DELETE/posts/:id
    def destroy
        post = Post.find(params[:id])
        post.destroy
        render json: {}
    end

    private

    def post_params
        params.permit(:title, :body, :photos, :user_id)
    end

    def update_params
        params.permit(:title, :body, :photos)
    end
end
