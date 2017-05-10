# config valid only for current version of Capistrano
lock "3.8.1"

# 注意這是鍵盤左上角的「 `」不是單引號「 '」
set :application, 'website-168'

set :repo_url, 'https://github.com/michaelexploreworld/website-168.git'
set :deploy_to, '/home/deploy/website-168'
set :keep_releases, 5

append :linked_files, 'config/database.yml', 'config/secrets.yml'
# 如果有 facebook.yml 或 email.yml 想要連結的話，也要加進來

append :linked_dirs, 'log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'public/system'

set :passenger_restart_with_touch, true
namespace :deploy do
  # ...原本的code
  task :bundle do
    on roles(:web) do
      execute "cd /home/deploy/website-168/current; bundle install"
    end
  end

  after :deploy, "deploy:bundle"
  path = "cd /home/deploy/website-168/current;"
task :migrate do
  on roles(:web) do
    execute "#{path}rake db:migrate RAILS_ENV=production"
  end
end

task :precompile do
  on roles(:web) do
    execute "#{path}rake rake assets:clobber"
    execute "#{path}rake assets:precompile"
  end
end

after :deploy, "deploy:migrate"
after :deploy, "deploy:precompile"

task :symlink do
  on roles(:web) do
    execute "cd /home/deploy/website-168/current/public; ln -s /home/deploy/website-168/shared/public/uploads"
  end
end

after :deploy, "deploy:symlink"

end
# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, "/var/www/my_app_name"

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# append :linked_files, "config/database.yml", "config/secrets.yml"

# Default value for linked_dirs is []
# append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
# set :keep_releases, 5
