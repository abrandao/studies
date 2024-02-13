namespace ScreenTest
{
    class Album
    {
        private List<Musica> _musicas = new List<Musica>();

        public Album(string nome, Genero genero)
        {
            Nome = nome;
            Genero = genero;
        }
        
        public string Nome { get; }
        public Genero Genero  { get; set;  }
        public int DuracaoTotal => _musicas.Sum(m => m.Duracao);

        public void AdicionarMusica(Musica musica)
        {
            _musicas.Add(musica);
        }

        public void ExibirMusicasDoAlbum()
        {
            Console.WriteLine($"Lista de músicas do álbum: {Nome}\n");
            foreach (var musica in _musicas) {
                Console.WriteLine($"Música: {musica.Nome}");
            }
            Console.WriteLine($"Para ouvir este ábum inteiro você precisará de {DuracaoTotal} segundos.");
            Console.WriteLine(Genero.Nome);
        }
    }
}