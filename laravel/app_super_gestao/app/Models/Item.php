<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;
    protected $table = 'produtos';
    protected $fillable = ['nome', 'descricao', 'peso', 'unidade_id', 'fornecedor_id'];
    public function itemDetalhe() {
        return $this->hasOne('App\Models\ItemDetalhe', 'produto_id', 'id');
    }

    public function fornecedor() {
        return $this->belongsTo('App\Models\Fornecedor');
    }

    public function pedidos() {
        // Parâmetros::
        // 1 - Modelo do relacionamento NxN em relação ao Modelo que estamos implementando.
        // 2 - Tabela auxiliar que armazena os requisitos de relacionamento.
        // 3 - Nome da FK da tabela mapeada pelo modelo na tabela de relacionamento.
        // 4 - Nome da FK da tabela mapeada pelo model utilizado no relacionamento que estamos implementando.
        return $this->belongsToMany('App\Models\Pedido', 'pedidos_produtos', 'produto_id', 'pedido_id');
    }
}
