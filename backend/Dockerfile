# Dockerfile para o backend (NestJS)

# Estágio 1: Build
FROM node:16 AS build
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Compilar o projeto
RUN npm run build

# Estágio 2: Produção
FROM node:16
WORKDIR /app

# Copiar apenas os arquivos necessários
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

# Expor a porta
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "dist/main"]