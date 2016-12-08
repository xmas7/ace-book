class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render :show
    else
      render json: @user.errors, status: 404
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: ["No user found"], status: 404
  end

  private
  def user_params
    params.require(:user).permit(:firstname, :lastname, :email, :password, :birthday, :gender)
  end
end
