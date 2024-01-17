#!/bin/bash

# Install OS packages
sudo apt-get update
sudo apt-get install -y python3.11-venv python3-pip

# Update NPM 
npm install -g npm@latest

# Update Bundler
bundle update --bundler

# Install Gem packages
bundle install

# Instal NPM packages
npm install --include=dev
