<?php

    namespace App\Repositories;

    abstract class AbstractRepository {
        public $model;
        public function __construct($model) {
            $this->model = $model;
        }

        public function selectAtributosRegistrosRelacionados($atributos) {
            $this->model = $this->model->with($atributos);
        }

        public function filtro($filtros) {
            $filtros = explode(';', $filtros);
            foreach($filtros as $key => $condicao) {
                $c = explode(':', $condicao);
                $this->model = $this->model->where($c[0], $c[1], $c[2]);
            }
        }

        public function selectAtributos($atributos) {
            $this->model = $this->model->selectRaw($atributos);
        }

        public function getResultado() {
            return $this->model->get();
        }
    }
