#!/bin/bash
git pull
yarn build
\cp -r build/* ./
