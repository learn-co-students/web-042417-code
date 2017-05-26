class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def logged_in?
    !!current_user
  end

  def is_not_fake
    unless logged_in?
      flash[:error] = "You ain't logged in"
      redirect_to root_path
    end
  end
end
