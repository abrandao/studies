namespace ScreenTest;

class Program
{
    static void Main(string[] args)
    {
        Episodio ep1 = new(2, "Técnicas de Facilitação", 45);
        ep1.AdicionarConvidado("Maria");
        ep1.AdicionarConvidado("Naruto");
        ep1.AdicionarConvidado("Venom");
        
        Episodio ep2 = new(1, "Técnicas de Aprendizado", 75);
        ep2.AdicionarConvidado("Nathália");
        ep2.AdicionarConvidado("Ibrahim");
        ep2.AdicionarConvidado("Mayara");

        Podcast podcast = new("Podcast especial", "Daniel");
        podcast.AdicionarEpisodio(ep1);
        podcast.AdicionarEpisodio(ep2);
        podcast.ExibirDetalhes();
    }
}
        
        /*
        Banda queen = new Banda("Queen");

        Album albumDoQueen = new Album("A night at the Opera", new Genero("pop"));

        Musica musica1 = new Musica(queen, "Love of my life")
        {
            Duracao = 213,
            Disponivel = true
        };

        Musica musica2 = new Musica(queen, "Bohemian Rhapsody")
        {
            Duracao = 354,
            Disponivel = false
        };

        albumDoQueen.AdicionarMusica(musica1);
        albumDoQueen.AdicionarMusica(musica2);
        queen.AdicionarAlbum(albumDoQueen);

        musica1.ExibirFichaTecnica();
        musica2.ExibirFichaTecnica();

        albumDoQueen.ExibirMusicasDoAlbum();

        queen.ExibirDiscografia();
        */
