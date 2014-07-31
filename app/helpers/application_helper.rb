module ApplicationHelper
  def change_date_ouput date
    return date.strftime('%m/%d/%Y %I:%M:%S %p')
  end
end
