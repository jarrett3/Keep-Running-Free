source 'https://rubygems.org'
ruby "1.9.3"
gem 'rails', '3.2.13'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

gem 'haml-rails'
gem "bourbon"
gem 'simple_form'
gem 'decent_exposure'
gem 'squeel'
gem 'kaminari'
gem 'kaminari-bootstrap'
gem 'jquery-rails'

gem 'bcrypt-ruby', '~> 3.0.0'
gem 'activeadmin'
gem "ckeditor", "~> 3.7.1"
gem "paperclip"
gem "aws-sdk"
gem 'acts-as-taggable-on', '~> 2.3.1'
gem 'nokogiri'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'
  #gem 'twitter-bootstrap-rails'
  gem 'bootstrap-sass' #, '~> 2.0.3'


  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby

  gem 'uglifier', '>= 1.0.3'
end

group :test, :development do
  gem 'debugger'
  gem 'better_errors'
  gem 'binding_of_caller'

  gem 'sqlite3'

  gem "rspec-rails"
  gem 'rspec-instafail'
  gem 'database_cleaner'
  
  gem "capybara"
  #gem 'capybara-webkit'
  gem "selenium-webdriver"
  gem 'launchy' # provides save_and_open_page
  
  gem 'factory_girl_rails'
  gem 'faker'
end

group :development do
  gem 'heroku'
end

group :production do
  gem 'thin'
  gem 'pg'
  gem 'rack-google-analytics', :require => 'rack/google-analytics'
end


# To use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# To use Jbuilder templates for JSON
# gem 'jbuilder'

# Use unicorn as the app server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'debugger'
