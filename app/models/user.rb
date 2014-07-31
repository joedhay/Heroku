class User
  include ActiveAttr::Model

  attribute :email
  attribute :alias
  attribute :username
  attribute :password
  attribute :confirmed_password
  attribute :terms
  attribute :first_name
  attribute :last_name
  attribute :mobile_num
  attribute :position

  validates_presence_of :email, :message => I18n.t('users.email_req')
  validates_presence_of :alias, :message => I18n.t('users.alias_req')
  validates_presence_of :username, :message => I18n.t('users.username_req')
  validates_presence_of :password, :message => I18n.t('users.password_req')
  validates_presence_of :confirmed_password, :message => I18n.t('users.con_pass_req')
  validates_acceptance_of :terms,:message => I18n.t('users.term_req')

end