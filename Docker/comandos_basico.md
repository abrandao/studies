#### docker container ps
Mostra quantas e quais instâncias de containers estão rodando.

#### docker container ps -a
Mostra todos os containers independente do estado.

#### docker info
Para mostrar informações sobre os containers que estão rodando.

#### docker container stop <container>
Para um container específico.

#### --name
Torna possível nomear um container.
Exemplo: docker container run -p 8081:80 --detach --name webserver nginx

#### rm
Remove um container.
Exemplo: docker container rm <uuid>

#### rmi
Remove uma imagem.
Exemplo: docker rmi <uuid>

#### docker container top <container>
Lista os processos do container.

#### docker container inspect <container>
Lista as configurações de um container específico.
Exemplos:
ocker inspect ubuntu
docker inspect --format '{{.Config.Volumes }}' ubuntu
ocker inspect --format '{{.Config.ExposedPorts }}' ubuntu

#### docker container stats
Monitora estatísticas de consumo (CPU / Memória / Rede) do container.

#### --detach -d
Roda o container em background. Liberando o terminal.

#### docker container exec
Executa um comando dentro de um container que está rodando.

#### docker container rename <container>
Usado para renomear um container.
Exemplo: docker container rename nome_container novo_nome_container

#### docker images
Mostra as imagens disponíveis na máquina.

#### $(pwd):/workspace
Mapeia a pasta atual para dentro do container.

#### docker container commit / docker commit
Cria uma nova imagem com as mudanças realizadas em um container / a partir de um container.
Exemplo: docker container commit -m "Adicionado Ruby 2.4" a8deda2fc399

#### docker image history
Mostra o histórico de uma imagem.

#### docker container prune
Possibilita apagar todos os containers parados.

#### docker image prune
Possibilita apagar todas as imagens paradas.

#### docker network
connect     Connect a container to a network
create      Create a network
disconnect  Disconnect a container from a network
inspect     Display detailed information on one or more networks
ls          List networks
prune       Remove all unused networks
rm          Remove one or more networks

#### -e
Comando para configurar uma variável de ambiente no momento que se roda um container.
Exemplo: docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -P postgres

#### docker image tag
Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE.
Exemplo: docket image tag d2ba5eef65d9 abrandao/ruby:latest