using bytebank.bytebank.Util;
using bytebank.Modelos.Conta;

Console.WriteLine("Boas Vindas ao ByteBank, Atendimento.");

void TestaArrayInt()
{
    int[] idades = new int[5];
    idades[0] = 30;
    idades[1] = 40;
    idades[2] = 17;
    idades[3] = 21;
    idades[4] = 18;
    
    Console.WriteLine($"tamanho do Array {idades.Length}");

    int acumulador = 0;
    for (int i = 0; i < idades.Length; i++)
    {
        int idade = idades[i];
        Console.WriteLine($"índice [{i} = {idades[i]}");
        acumulador += idade;
    }

    int media = acumulador / idades.Length;
    Console.WriteLine($"Média de idades = {media}.");
}

// TestaArrayInt();

void TestaBuscarPalavra()
{
    string[] arrayDePalavras = new string[5];

    for (int i = 0; i < arrayDePalavras.Length; i++)
    {
        Console.WriteLine($"Digite {i+1}ª Palavra: ");
        arrayDePalavras[i] = Console.ReadLine();
    }
    
    Console.WriteLine("Digite palavra a ser encontrada: ");
    var busca = Console.ReadLine();

    foreach (var palavra in arrayDePalavras)
    {
        if (palavra.Equals(busca))
        {
            Console.WriteLine($"Palavra encontrada = {busca}.");
            break;
        }
    }
}

// TestaBuscarPalavra();

Array amostra = Array.CreateInstance(typeof(double), 5);
amostra.SetValue(5.9, 0);
amostra.SetValue(1.8, 1);
amostra.SetValue(7.1, 2);
amostra.SetValue(10, 3);
amostra.SetValue(6.9, 4);

void TestaMediana(Array array)
{
    if((array == null) || (array.Length == 0))
    {
        Console.WriteLine("Array para cálculo da mediana está vazio ou nulo.");
    }

    double[] numerosOrdenados = (double[]) array.Clone();
    Array.Sort(numerosOrdenados);

    int tamanho = numerosOrdenados.Length;
    int meio = tamanho / 2;
    double mediana = (tamanho % 2 != 0) ? numerosOrdenados[meio] : 
        (numerosOrdenados[meio] + numerosOrdenados[meio -1]) / 2;
    Console.WriteLine($"Com base na amostra a mediana = {mediana}");
}

// TestaMediana(amostra);

void TestaArrayDeContasCorrentes()
{
    ListaDeContasCorrentes listaDeContas = new ListaDeContasCorrentes();
    listaDeContas.Adicionar(new ContaCorrente(874, "565656-A"));
    listaDeContas.Adicionar(new ContaCorrente(874, "323232-B"));
    listaDeContas.Adicionar(new ContaCorrente(874, "121212-C"));
    listaDeContas.Adicionar(new ContaCorrente(874, "121212-E"));
    listaDeContas.Adicionar(new ContaCorrente(874, "121212-F"));
    listaDeContas.Adicionar(new ContaCorrente(874, "121212-G"));

    var contaDoAnderson = new ContaCorrente(963, "123456-X");

}

TestaArrayDeContasCorrentes();