<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SiteContato;

class SiteContatoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $contato = new SiteContato();
        // $contato->nome = "Sistema SG";
        // $contato->telefone = "(12) 98898-7766";
        // $contato->email = "contato@sg.com.br";
        // $contato->motivo_contato = 1;
        // $contato->mensagem = "Seja Bemvindo ao SG.";
        // $contato->save();

        SiteContato::factory()->count(100)->create();
    }
}
