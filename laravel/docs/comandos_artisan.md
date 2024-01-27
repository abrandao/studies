## Se tornar 'dono' do arquivo - Comando do Linux
sudo chown -R $USER:$USER .

## Verificação para ver se uma determinada extensão está habilitada
var_dump(extension_loaded('pdo_mysql'));

## Lista os comandos do artisan
php artisan list

## Colocar a aplicação em modo de manutenção 
php artisan down

## Colocar a aplicação em modo de produção 
php artisan up

## Criação de Controller
docker exec laravel php artisan make:controller <nome_do_controller>

## Criação de Controller com resources (CRUD)
docker exec laravel php artisan make:controller <nome_do_controller> --resource

## Criação de Model
docker exec laravel php artisan make:model <nome_da_model>

## Criação de Model com migration
docker exec laravel php artisan make:model <nome_da_model> -m

## Criação de migrate com Model pré-existente
docker exec laravel php artisan make:migration create_fornecedores_table

## Limpar o cache do Laravel
docker exec laravel php artisan optimize:clear

## Execução de migration
docker exec laravel php artisan migrate

## Rollback Migrations / Execução do método down da migration
docker exec laravel php artisan migrate:rollback
docker exec laravel php artisan migrate:rollback --step=2 <!-- Opção que indica a quantidade de migrations que serão revertidas. -->

## Listagem das migrations executadas
docker exec laravel php artisan migrate:status

## Reverte todas as migrations do banco
docker exec laravel php artisan migrate:reset

## Recria o banco de dados executando todos os métodos down seguidos dos métodos up das migrations
docker exec laravel php artisan migrate:refresh

## Recria o banco de dados dropando todas as tabelas e executa o migrate
docker exec laravel php artisan migrate:fresh

## Rodar os seeders
docker exec laravel php artisan db:seed
docker exec laravel php artisan db:seed --class=SiteContatoSeeder

## Criação de Factory
docker exec laravel php artisan make:factory SiteContatoFactory --model=SiteContato