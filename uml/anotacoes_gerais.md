- O modelo de domínio tem níveis de abstração.
- Do diagrama de classes é do nível conceitual.

#### Modelo Conceitual
É um levantamento de necessidades do sistema através de conceitos, atributos e associações.

#### Conceitos
Um conceito pode ser qualquer entidade que tenha um significado para o sistema e que tenha uma necessidade de armazenamento de dados. um conceito deve ser uma unidade coesa.
- Exemplos: cliente, pedido, produto, fornecedor e etc.
- Todo conceito deve ter ao menos um atributo identificador, como por exemplo: codigo_pedido.

#### Atributos
Informações alfanuméricas simples, como números, textos, datas e etc. Contidas em cada conceito.
- Produto: descrição, preço.
- Cliente: nome, email, telefone, CPF, dataNascimento
- Notas (1FN):
- Um atributo não pode ser multivalorado. Exemplo: telefones ("232332332", "4234234234234")
- Não pode ser composto, como por exemplo um endereço completo. O ideal é separar o endereço em atributos diversos como logradouro, número, complemento, bairro, cep...
- Um atributo pode ter um valor inicial.
- Pode haver valores derivados. Exemplo: / valorLiquido: Double = valorBruto - desconto

#### Representação de conceitos e atributos com diagrama de classes da UML
- nome: tipo
- Atributo identificador
- Valor inicial
- Atributo derivado


<!-- Até aula 11 correção exercicio 3 -->