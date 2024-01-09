<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SiteContato;
use App\Models\MotivoContato;

class ContatoController extends Controller
{
    public function contato(Request $request) {

        $motivo_contatos = MotivoContato::all();

        return view('site.contato', ['titulo' => 'Contato', 'motivo_contatos' => $motivo_contatos]);
    }

    public function salvar(Request $request) {
        // Validação dos dados do formulário recebidos no request
        $regras = [
            'nome' => 'required|min:3|max:40|unique:site_contatos', // min/max length
            'telefone' => 'required',
            'email' => 'required|email',
            'motivo_contatos_id' => 'required',
            'mensagem' => 'required|max:2000'
        ];

        $feedback = [

            'nome.min' => 'O campo nome precisa ter no mínimo 3 caracteres.',
            'nome.max' => 'O campo nome suporta no máximo 40 caracteres.',
            'nome.unique' => 'O nome informado já está em uso.',
            'email.email' => 'O email informado está fora do padrão.',
            'mensagem.max' => 'O campo máximo suporta o máximo de 200 caracteres.',

            'required'=> 'O campo :attribute deve ser preenchido.'
        ];

        $request->validate($regras, $feedback);

        SiteContato::create($request->all());
        return redirect()->route('site.index');
    }
}
