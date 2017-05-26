class PostsController < ApplicationController
  before_action :is_not_fake, except: [:index]

  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end

  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if @post.save
      redirect_to post_path(@post)
    else
      render :new
    end
  end

  def destroy

  end

  private
  def post_params
    params.require(:post).permit(:title, :content)
  end
end
