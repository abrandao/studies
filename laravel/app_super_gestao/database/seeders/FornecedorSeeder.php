<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Fornecedor;
use DB;

class FornecedorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Instanciando o objeto
        $fornecedor = new Fornecedor();
        $fornecedor->nome = 'Fornecedor Seed';
        $fornecedor->site = 'fornecedorseed.com.br';
        $fornecedor->uf = 'CE';
        $fornecedor->email = 'contato@fornecedorseeder.com.br';
        $fornecedor->save();

        // Método Create (atenção para o atributo fillable da classe)
        Fornecedor::create([
            'nome'  => 'Fornecedor 200',
            'site'  => 'fornecedor200.com.br',
            'uf'    => 'RS',
            'email' => 'contato@fornecedor200.com.br'
        ]);

        // insert
        DB::table('fornecedores')->insert([
            'nome'  => 'Fornecedor 300',
            'site'  => 'fornecedor300.com.br',
            'uf'    => 'RS',
            'email' => 'contato@fornecedor200.com.br'
        ]);
    }
}
