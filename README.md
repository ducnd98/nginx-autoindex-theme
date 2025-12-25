# nginx-autoindex-theme

Create theme folder
```
git clone https://github.com/ducnd98/nginx-autoindex-theme.git /var/ducnd/reverse-proxy/.theme
```

nginx.conf

```
    server {
        listen 80;

        root /static/;

        location /.theme/ {
            alias /etc/nginx/.theme/;
        }

        location / {
            autoindex on;
            autoindex_exact_size off;
            autoindex_localtime on;

            add_before_body /.theme/header.html;
            add_after_body /.theme/footer.html;
        }
    }
```
