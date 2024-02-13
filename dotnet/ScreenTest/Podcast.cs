namespace ScreenTest;

public class Podcast
{
    private List<Episodio> _episodios = new();
    public Podcast(string nome, string host)
    {
        Nome = nome;
        Host = host;
    }
    
    public string Nome { get; }
    public string Host { get; }
    public int TotalDeEpisodios => _episodios.Count();
    
    public void AdicionarEpisodio(Episodio episodio) {
        _episodios.Add(episodio);
    }

    public void ExibirDetalhes()
    {
        Console.WriteLine($"Podcast: {Nome}");
        Console.WriteLine($"Host: {Host}");

        foreach (var episodio in _episodios.OrderBy(e => e.Ordem))
        {
            Console.WriteLine(episodio.Resumo);
        }

        Console.WriteLine($"\nEste podecast possui {TotalDeEpisodios} episódios.");
    }
}