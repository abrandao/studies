namespace ScreenTest;

public class Episodio
{
    private List<string> _convidados = new();
    
    public Episodio(int ordem, string titulo,  int duracao)
    {
        Ordem = ordem;
        Titulo = titulo;
        Duracao = duracao;
    }
    
    public int Ordem { get; }
    public string Titulo { get; }
    public int Duracao { get; }
    public string Resumo => $"{Ordem}. {Titulo}. ({Duracao} min) - {string.Join(", ", _convidados)}";

    public void AdicionarConvidado(string convidado)
    {
        _convidados.Add(convidado);
    }
}