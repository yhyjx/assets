!/bin/sh

set -e

npm run build
git add -A
git commit -m '代码更新'
git push

cp -rf resource dist
cd -
cd dist

git init
git add -A
git commit -m '自动部署'
git push -f git@github.com:yhyjx/assets.git main:pages

cd -


