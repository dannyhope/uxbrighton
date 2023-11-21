# Tell Git this dir is safe
git config --global --add safe.directory /workspaces/*

# Update NPM 
npm install -g npm@latest

# Update Bundler
bundle update --bundler

# Install Gem packages
bundle install

# Instal NPM packages
npm install --include=dev
