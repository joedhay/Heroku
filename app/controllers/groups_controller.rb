class GroupsController < ApplicationController

  def add_group
    @group = Group.new
  end

  def create
    @group = Group.new(group_permitted_params)

    if @group.valid?
      flash[:notice] = t('groups.group_success')
      redirect_to add_group_groups_path
    else
      render add_group_groups_path
    end
  end

  def view_group

  end

  private

  def group_permitted_params
    params.require(:group).permit(:name,:description,:status,:code,:role)
  end

end