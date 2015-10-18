mv index.html index-home.html
cp -rf ../fabiopereirame_jekyll_mickey_blog/_site/ .
mv index.html blog/
mv index-home.html index.html
rm -rf blog/wp-content
mv wp-content blog
