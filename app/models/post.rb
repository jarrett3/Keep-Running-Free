class Post < ActiveRecord::Base
	attr_accessible :title, :intro, :body, :status, :author_id

	validates :title, presence: true
	validates :intro, presence: true
	validates :body, presence: true

	belongs_to :author

end
