
Comando para abrir a imagem docker:
docker run --rm --user "$(id -u):$(id -g)" -v $(pwd):/usr/src -w /usr/src -ti node:latest bash

Comando para entrar em um contêiner que já esteja rodando:
docker exec -it node-shell-container bash

Exemplo de comando dentro do contâiner sem entrar nele:
docker exec node-shell-container node app/start.js