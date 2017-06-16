module Api
  module V1
    class AgentsController < ApplicationController
      def index
        render json: Agent.all
      end
      def show
        render json: Agent.find(params[:id])
      end
      def create
        agent = Agent.new(params.require(:agent).permit(:alias,:barcode))
        if agent.save
          render json: {message: "Created Agent!", status: 200}
        else
          render json: {message: agent.errors.full_messages, status: 500}
        end
      end
    end
  end
end
