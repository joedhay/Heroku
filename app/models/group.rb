class Group
  include ActiveAttr::Model

  attribute :name
  attribute :description
  attribute :code
  attribute :status
  attribute :role

  validates_presence_of :name, :message => I18n.t('groups.name_req')

end