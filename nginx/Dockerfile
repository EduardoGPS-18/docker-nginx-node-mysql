FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf
COPY index.html /data/www/index.html

EXPOSE 80

ENTRYPOINT [ "nginx-debug", "-g", "daemon off;" ]