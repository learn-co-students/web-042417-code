class FlowersController < ApplicationController
before_action :authenticate, only: :new

  def index
    @flowers = Flower.all
  end

  def create
    @flower = Flower.new(flower_params)
    if @flower.save
      flash[:success] = "successfully created a flower"
      redirect_to root_path
    else
      flash.now[:error] = @flower.errors.full_messages
      render :new
    end
  end
  def show
    @flower = find_flower
  end

  def new
    @page = "new"
    @flower = Flower.new
  end

  def edit
    @page = "edit"
    @flower = find_flower
  end

  def update
    @flower = find_flower

    if @flower.update(flower_params)
      redirect_to flower_path @flower
    else
      flash[:success] = @flower.errors.full_messages
      render :edit
    end
  end

  def destroy
    @flower = find_flower
    @flower.destroy
    redirect_to root_path
  end

  private
  def flower_params
    params.require(:flower).permit(:name,:smokeable,:price)
  end

  def find_flower
     Flower.find(params[:id])
  end
end
