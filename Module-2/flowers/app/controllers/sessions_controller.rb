class SessionsController < ApplicationController
  def new
    auth = request.env["omniauth.auth"]
    session[:omniauth] = auth.except('extra')
    user = User.sign_in_from_omniauth(auth)
    session[:user_id] = user.id
    if user.id
      redirect_to root_url, notice: "Signed In!"
    else
      redirect_to root_url, error: user.errors.full_message
    end
  end

def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_path, notice: "logged in!"
    else
     flash[:error] = "invalid login credentials"
     redirect_to "/"
    end
end

  def destroy
     session[:user_id] = nil
     session[:omniauth] = nil
     redirect_to root_url, notice: "logged out!"
  end
end
