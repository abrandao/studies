<h3>Fornecedor</h3>

{{-- Sintaxe de comentário no Blade Template. --}}

@php
    // Sintaxe para incluir trecho de código PHP
    /*
    if(isset($variavel)) {} // Retorna True se a variável estiver definida.
    if(empty($variavel)) {} // Retorna True se a variável estiver vazia.
    @unless executa se o retorno for false
    */
@endphp

@isset($fornecedores)
    @forelse ($fornecedores as $indice => $fornecedor)
        Total de registros: {{ $loop->count }}
        <br>
        Iteração atual: {{ $loop->iteration }}
        <br>
        Fornecedor: {{ $fornecedor['nome'] }}
        <br>
        Status: {{ $fornecedor['status'] }}
        <br>
        CNPJ: {{ $fornecedor['cnpj'] ?? 'Dado não foi preenchido.' }}
        <br>
        Telefone: ({{ $fornecedor['ddd'] ?? '' }}) {{ $fornecedor['telefone'] ?? '' }}
        <br>
        @if($loop->last)
            Última iteração do loop.
        @endif
        <hr>
    @empty
        Não existem fornecedores cadastrados.
    @endforelse
@endisset
