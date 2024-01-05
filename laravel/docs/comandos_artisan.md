## Lista os comandos do artisan
php artisan list

## Colocar a aplicação em modo de manutenção 
php artisan down

## Colocar a aplicação em modo de produção 
php artisan up

## Criação de Controller
docker exec laravel php artisan make:controller <nome_do_controller>

## Limpar o cache do Laravel
docker exec laravel php artisan optimize:clear