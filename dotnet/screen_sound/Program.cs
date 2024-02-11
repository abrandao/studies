// S̷c̷r̷e̷e̷n̷ S̷o̷u̷n̷d̷
string mensagemDeBoasVindas = "Bem vindo ao S̷c̷r̷e̷e̷n̷ S̷o̷u̷n̷d̷";

Dictionary<string, List<int>> bandasRegistradas = new Dictionary<string, List<int>>();
bandasRegistradas.Add("Link Park", new List<int> { 10, 8, 6 });
bandasRegistradas.Add("The Beatles", new List<int>());

void ExibirLogo() {
  
  Console.WriteLine(@"
░██████╗░█████╗░██████╗░███████╗███████╗███╗░░██╗  ░██████╗░█████╗░██╗░░░██╗███╗░░██╗██████╗░
██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝████╗░██║  ██╔════╝██╔══██╗██║░░░██║████╗░██║██╔══██╗
╚█████╗░██║░░╚═╝██████╔╝█████╗░░█████╗░░██╔██╗██║  ╚█████╗░██║░░██║██║░░░██║██╔██╗██║██║░░██║
░╚═══██╗██║░░██╗██╔══██╗██╔══╝░░██╔══╝░░██║╚████║  ░╚═══██╗██║░░██║██║░░░██║██║╚████║██║░░██║
██████╔╝╚█████╔╝██║░░██║███████╗███████╗██║░╚███║  ██████╔╝╚█████╔╝╚██████╔╝██║░╚███║██████╔╝
╚═════╝░░╚════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚══╝  ╚═════╝░░╚════╝░░╚═════╝░╚═╝░░╚══╝╚═════╝░  
");
  Console.WriteLine(mensagemDeBoasVindas);
}

void ExibirOpcoesDoMenu() {
  ExibirLogo();
  Console.WriteLine("\nDigite 1 para registrar uma banda");
  Console.WriteLine("Digite 2 para mostrar todas as bandas");
  Console.WriteLine("Digite 3 para avaliar uma banda");
  Console.WriteLine("Digite 4 para exibir a média de uma banda");
  Console.WriteLine("Digite -1 para sair");

  Console.Write("\nDigite a sua opção: ");
  string opcaoEscolhida = Console.ReadLine()!;
  int opcaoEscolhidaNumerica = int.Parse(opcaoEscolhida);

  switch (opcaoEscolhidaNumerica) {
    case 1: RegistrarBanda();
      break;
    case 2: MostrarBandasRegistradas();
      break;
    case 3: AvaliarUmaBanda();
      break;
    case 4: ExibirMediaDeUmaBanda();
      break;
    case -1: Console.WriteLine("Tchau Tchau! :)");
      break;
    default: Console.WriteLine("Opção inválida");
      break;
  }
}

void RegistrarBanda() {
  Console.Clear();
  ExibirTituloDaOpcao("Registro das Bandas");
  Console.Write("Digite o nome da banda que deseja registrar: ");
  string nomeDaBanda = Console.ReadLine()!;
  bandasRegistradas.Add(nomeDaBanda, new List<int>());
  Console.WriteLine($"A banda {nomeDaBanda} foi registrada com sucesso.");
  Thread.Sleep(2000);
  Console.Clear();
  ExibirOpcoesDoMenu();
}

void MostrarBandasRegistradas() {
  Console.Clear();
  ExibirTituloDaOpcao("Exibindo todas as bandas registradas");

  foreach(string banda in bandasRegistradas.Keys) {
    Console.WriteLine($"Banda: {banda}");
  }

  Console.WriteLine("\nDigite uma tecla para voltar ao menu principal");
  Console.ReadKey();
  Console.Clear();
  ExibirOpcoesDoMenu();
}

void ExibirTituloDaOpcao(string titulo) {
  int quantidadeDeLetras = titulo.Length;
  string asteriscos = string.Empty.PadLeft(quantidadeDeLetras, '*');
  Console.WriteLine(asteriscos);
  Console.WriteLine(titulo);
  Console.WriteLine(asteriscos + "\n");
}

void AvaliarUmaBanda() {
  // Escolha a banda a ser avaliada
  // Verificar se a banda está na lista >> atribuir uma nota
  // Caso não exista, retornar ao menu principal

  Console.Clear();
  ExibirTituloDaOpcao("Avaliar banda");
  Console.Write("Digite o nome da banda que deseja avalias: ");
  string nomeDaBanda = Console.ReadLine()!;
  if (bandasRegistradas.ContainsKey(nomeDaBanda)) {
    Console.Write($"Qual a nota que a banda {nomeDaBanda} merece: ");
    int nota = int.Parse(Console.ReadLine()!);
    bandasRegistradas[nomeDaBanda].Add(nota);
    Console.WriteLine($"\nA nota {nota} foi registrada com sucesso para a banda {nomeDaBanda}.");
    Thread.Sleep(2000);
    Console.Clear();
    ExibirOpcoesDoMenu();
  } else {
    Console.WriteLine($"\nA banda {nomeDaBanda} não foi encontrada!");
    Console.WriteLine("Digite uma tecla para voltar ao menu principal.");
    Console.ReadKey();
    Console.Clear();
    ExibirOpcoesDoMenu();
  }
}

void ExibirMediaDeUmaBanda() {
  Console.Clear();
  ExibirTituloDaOpcao("Exibir média de uma banda");
  Console.WriteLine("Qual banda você gostaria de ver a média de notas?");
  string nomeDaBanda = Console.ReadLine()!;
  if (bandasRegistradas.ContainsKey(nomeDaBanda)) {
    List<int> notasDabanda = bandasRegistradas[nomeDaBanda];
    Console.WriteLine($"\nA média da banda {nomeDaBanda} é {notasDabanda.Average()}.");
    Console.WriteLine("Digite uma tecla para voltar ao menu principal.");
    Console.ReadKey();
    Console.Clear();
    ExibirOpcoesDoMenu();
  } else {
      Console.WriteLine($"\nA banda {nomeDaBanda} não foi encontrada!");
      Console.WriteLine("Digite uma tecla para voltar ao menu principal.");
      Console.ReadKey();
      Console.Clear();
      ExibirOpcoesDoMenu();
  }
}

ExibirOpcoesDoMenu();