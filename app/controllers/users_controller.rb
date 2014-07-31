class UsersController < ApplicationController
  layout 'layouts/login_layout', :only => [:login, :authenticate,:registration,:create,:show]

  def login

  end

  def registration
    @user = User.new
  end

  def create
    @user = User.new(user_permitted_params)
    if @user.valid?
      flash[:notice] = t('users.reg_success')
      redirect_to :action =>'registration'
    else
      render 'registration'
    end
  end

  def save_new_user
    @user = User.new(user_permitted_params)

    if @user.valid?
      flash[:notice] = t('users.reg_success')
      redirect_to :action =>'add_user'
    else
      render 'add_user'
    end

  end

  def authenticate
    if params[:password].size <= 0 && params[:username].size <= 0
      flash[:error] = t('users.login_error')
    else
      flash[:error] = t('users.invalid_login')
    end
    render login_users_path
  end

  def add_user
   @user = User.new
  end

  def view_user

  end

  private

  def user_permitted_params
    params.require(:user).permit(:username,:password,:confirmed_password, :email,:alias,:terms,:first_name,:last_name,:mobile_num)
  end

  def is_a_valid_email?(email)
    # Check the number of '@' signs.
    if email.count("@") > 0 then
      return true
    elsif email =~ /^.*@.*(.com|.org|.net)$/ then
      return true
    else
      return false
    end
  end

end