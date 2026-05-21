FROM nginx:1.25-alpine

# Crear un archivo HTML de prueba directamente en la ruta de Nginx
RUN echo '<h1>Innovatech Chile - Frontend Funcionando Localmente</h1>' > /usr/share/nginx/html/index.html

# Configuración de seguridad básica (usuario no root preexistente de Nginx)
RUN touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid /var/cache/nginx /var/log/nginx /etc/nginx/conf.d

USER nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]