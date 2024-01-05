<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [\App\Http\Controllers\PrincipalController::class, 'principal'])->name('site.index');
Route::get('/sobre-nos', [\App\Http\Controllers\SobreNosController::class, 'sobreNos'])->name('site.sobrenos');
Route::get('/contato', [\App\Http\Controllers\ContatoController::class, 'contato'])->name('site.contato');
Route::post('/contato', [\App\Http\Controllers\ContatoController::class, 'contato'])->name('site.contato');
Route::get('/login', function() { return 'Login'; })->name('site.login');

// Rotas Agrupadas
Route::prefix('/app')->group(function() {
    Route::get('/clientes', function() { return 'Clientes'; })->name('app.clientes');
    Route::get('/fornecedores', [\App\Http\Controllers\FornecedorController::class, 'index' ])->name('app.fornecedores');
    Route::get('/produtos', function() { return 'Produtos'; })->name('app.produtos');
});

Route::get('/teste/{p1}/{p2}', [\App\Http\Controllers\TesteController::class,'teste'])->name('teste');

Route::fallback(function() {
    echo 'A rota acessada não existe. <a href="'.route('site.index').'">Clique aqui<a> para ir para a página inicial.';
});

/*
Route::get('/rota2', function() {
    return redirect()->route('site.rota1');
})->name('site.rota2');
*/

// Route::redirect('/rota2', 'rota1');

/*
Route::get('/', function () {
    return 'Olá, seja bem vindo ao curso.';
});
*/


/*
// nome, categoria, assunto, mensagem
Route::get(
    '/contato/{nome}/{categoria_id}',
    function(
        string $nome = 'Desconhecido',
        int $categoria_id = 1 // 1 - 'Informação'
        ) {
            echo "Estamos aqui: $nome - $categoria_id";
        }
    )->where('categoria_id', '[0-9]+')->where('nome', '[A-Za-z]+');
*/

/*
    Verbos http:
    get
    post
    put
    patch
    delete
    options
*/

