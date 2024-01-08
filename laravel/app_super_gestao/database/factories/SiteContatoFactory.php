<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use \App\Models\SiteContato;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SiteContato>
 */
class SiteContatoFactory extends Factory
{
    protected $model = SiteContato::class;

    public function definition() {
        return [
            "nome"           => $this->faker->unique()->name(),
            "telefone"       => $this->faker->unique()->phonenumber(),
            "email"          => $this->faker->unique()->email(),
            "motivo_contato" => $this->faker->numberBetween(1, 3),
            "mensagem"       => $this->faker->text(200)
        ];
    }
}
