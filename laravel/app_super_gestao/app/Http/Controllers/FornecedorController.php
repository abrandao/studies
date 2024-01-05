<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FornecedorController extends Controller
{
    public function index() {
        $fornecedores = [
            0 => [
                'nome' => 'fornecedor 1',
                'status' => 'N',
                'cnpj' => '00.000.000/000-00',
                'ddd' => '11', // São Paulo - SP
                'telefone' => '0000-0000'
            ],
            [
                'nome' => 'fornecedor 2',
                'status' => 'S',
                'cnpj' => null,
                'ddd' => '85', // Fortaleza - CE
                'telefone' => '0000-0000'
            ],
            [
                'nome' => 'fornecedor 3',
                'status' => 'S',
                'cnpj' => null,
                'ddd' => '32', // Juiz de Fora - MG
                'telefone' => '0000-0000'
            ]
        ];

        return view('app.fornecedor.index', compact('fornecedores'));
    }
}

/*
// Operador Ternário
// condicao ? se verdadeiro : se falso
// condicao ? se verdadeiro : (condicao ? se verdadeiro : se falso) // Operador Ternário encadeado
// isset() verifica se a variável não é vazia

$msg = isset($fornecedores[1]['cnpj']) ? 'CNPJ informado.' : 'CNPJ não informado.';
echo $msg;
*/
