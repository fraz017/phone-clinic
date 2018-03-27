require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module PhoneClinic
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    env_file = Rails.root.join("config", 'config.yml').to_s

    if File.exists?(env_file) && YAML.load_file(env_file)[Rails.env].present?
      YAML.load_file(env_file)[Rails.env].each do |key, value|
        ENV[key.to_s.upcase] = value
      end # end YAML.load_file
    end
  end
end
