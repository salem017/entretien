Dockerfile
FROM httpd:2.4
COPY dist/ /usr/local/apache2/htdocs/
#Only in prod mode
COPY .htaccess /usr/local/apache2/htdocs/
COPY httpd.conf /usr/local/apache2/conf/httpd.conf
RewriteEngine On
# If an existing asset or directory is requested go to it as it is
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f -d
RewriteRule ^ — [L]
# If the requested resource doesn’t exist, use index.html
RewriteRule ^ /index.html
