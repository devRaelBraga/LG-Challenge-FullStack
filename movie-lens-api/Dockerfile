# Use uma imagem Node.js alpine(possui menor tamanho de imagem)
FROM node:18-alpine


# Defina o diretório de trabalho no container
WORKDIR /movie-lens-api

# Copie os arquivos da aplicação para o container
COPY . .

ENV DATABASE_URL=file:./dev.db

# Instale as dependências da aplicação
RUN npm install
RUN npx prisma generate

# Run tests
RUN npm run test

# Build Nest
RUN npm run build

# Defina o comando a ser executado quando o container for iniciado
CMD ["npm", "run", "start:prod"]