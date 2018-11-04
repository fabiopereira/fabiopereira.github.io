mv index.html index-home.html
cp -rf ../fabiopereirame_jekyll_mickey_blog/_site/ .
mv index.html blog/
mv index-home.html index.html
rm -rf blog/wp-content
mv wp-content blog


rm -rf blogpt
mkdir blogpt
cp -rf ../fabiopereirame_jekyll_mickey_blogpt/_site/blogpt .
cp     ../fabiopereirame_jekyll_mickey_blogpt/_site/index.html blogpt/
cp -rf ../fabiopereirame_jekyll_mickey_blogpt/wp-content blogpt/
cp -rf ../fabiopereirame_jekyll_mickey_blogpt/assets/images/hero/ assets/images/hero
cp -rf ../fabiopereirame_jekyll_mickey_blogpt/assets/images/thumbnail/ assets/images/thumbnail