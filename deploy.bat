@echo off

echo building...
call build.bat
echo building-complete.

cd ./.vuepress/dist
git init
git add -A
git commit -m 'auto-deploy'
git remote add origin git@github.com:AzuraXW/starx-ui.git
git pull
git push --force origin HEAD:gh-pages

REM To delete the dist folder
cd ..
echo delete-directory: "%cd%/dist"
rmdir /s /q "%cd%/dist"
cd..
cd..
echo Auto-Deploy-Complete!
pause