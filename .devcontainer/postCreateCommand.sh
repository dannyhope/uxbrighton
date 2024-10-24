#!/bin/bash

# Install OS packages
sudo apt-get update

## Upgrade pip
# /usr/local/python/current/bin/python3 -m pip install --upgrade pip

## Install the some dependencies that Jupyter requires
# sudo apt-get install -y --fix-missing python3-ipython python3-ipykernel
# python3 -m ipykernel install --user

# Update NPM
npm install -g npm@latest

# Update Bundler
bundle update --bundler

# Install Gem packages
bundle install

# Instal NPM packages
npm install --include=dev
