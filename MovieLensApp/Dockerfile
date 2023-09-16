# Use uma imagem Node.js alpine(possui menor tamanho de imagem)
FROM node:18-alpine

# Defina o diretório de trabalho no container
WORKDIR /MovieLensApp

ENV API_URL=http://localhost:3003

# Copie os arquivos da aplicação para o container
COPY . .

# Instale as dependências da aplicação
RUN npm install

# Defina o comando a ser executado quando o container for iniciado
CMD ["npm", "run", "start"]