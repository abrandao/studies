@if (isset($cliente->id))
    <form method="post" action="{{ route('cliente.update', ['cliente' => $cliente->id]) }}">
        @csrf
        @method('PUT')
    @else
        <form method="post" action="{{ route('cliente.store') }}">
            @csrf
@endif

<input type="text" value="{{ $cliente->nome ?? old('nome') }}" name="nome" placeholder="Nome" class="borda-preta">
{{ $errors->has('nome') ? $errors->first('nome') : '' }}

    <button type="submit" class="borda-preta">Cadastrar</button>
</form>
