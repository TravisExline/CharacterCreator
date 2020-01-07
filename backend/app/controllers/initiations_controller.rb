class InitiationsController < ApplicationController
  before_action :set_initiation, only: [:show, :update, :destroy]

  # GET /initiations
  def index
    @initiations = Initiation.all

    render json: @initiations
  end

  # GET /initiations/1
  def show
    render json: @initiation
  end

  # POST /initiations
  def create
    @initiation = Initiation.new(initiation_params)

    if @initiation.save
      render json: @initiation, status: :created, location: @initiation
    else
      render json: @initiation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /initiations/1
  def update
    if @initiation.update(initiation_params)
      render json: @initiation
    else
      render json: @initiation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /initiations/1
  def destroy
    @initiation.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_initiation
      @initiation = Initiation.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def initiation_params
      params.require(:initiation).permit(:characters)
    end
end
