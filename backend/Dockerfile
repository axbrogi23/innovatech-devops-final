FROM node:20-alpine
WORKDIR /app

# Copiamos el package.json de prueba que creamos
COPY package*.json ./
RUN npm install

# Copiamos el archivo index.js de prueba
COPY . .

# Usar usuario no root por seguridad
RUN chown -R node:node /app
USER node

EXPOSE 3000
CMD ["node", "src/index.js"]