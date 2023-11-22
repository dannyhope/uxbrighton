#!/bin/bash

# Update NPM 
npm install -g npm@latest

# Update Bundler
bundle update --bundler

# Install Gem packages
bundle install

# Instal NPM packages
npm install --include=dev
