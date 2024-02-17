using System.Text.Json;
using ScreenAPI.Modelos;
using ScreenAPI.Filtros;

using (HttpClient client = new HttpClient())
{
    try
    {
        string resposta = await client.GetStringAsync("https://guilhermeonrails.github.io/api-csharp-songs/songs.json");
        var musicas = JsonSerializer.Deserialize<List<Musica>>(resposta)!;

        LinqFilter.FiltrarMusicasEmCSharp(musicas);

        // musicas[1].ExibirDetalhesDaMusica();
        // LinqFilter.FiltrarTodosOsGenerosMusicais(musicas);
        // LinqOrder.ExibirListasDeArtistasOrdenados(musicas);
        // LinqFilter.FiltrarArtistasPorGeneroMusical(musicas, "blues");
        // LinqFilter.FiltrarMusicasDeUmArtista(musicas,"Michael Jackson");

        // var minhasMusicasPreferidas = new MusicasPreferidas("Anderson");
        // minhasMusicasPreferidas.AdicionarMusicasFavoritas(musicas[1]);
        // minhasMusicasPreferidas.AdicionarMusicasFavoritas(musicas[377]);
        // minhasMusicasPreferidas.AdicionarMusicasFavoritas(musicas[4]);
        // minhasMusicasPreferidas.AdicionarMusicasFavoritas(musicas[6]);
        // minhasMusicasPreferidas.AdicionarMusicasFavoritas(musicas[1467]);
        //
        // minhasMusicasPreferidas.ExibirMusicasFavoritas();

        // var musicasPreferidasNathalia = new MusicasPreferidas("Nath");
        // musicasPreferidasNathalia.AdicionarMusicasFavoritas(musicas[500]);
        // musicasPreferidasNathalia.AdicionarMusicasFavoritas(musicas[637]);
        // musicasPreferidasNathalia.AdicionarMusicasFavoritas(musicas[428]);
        // musicasPreferidasNathalia.AdicionarMusicasFavoritas(musicas[13]);
        // musicasPreferidasNathalia.AdicionarMusicasFavoritas(musicas[71]);
        //
        // musicasPreferidasNathalia.ExibirMusicasFavoritas();
        //
        // musicasPreferidasNathalia.GerarArquivoJson();
    }
    catch(Exception ex)
    {
        Console.WriteLine($"Temos um problema: {ex.Message}");
    }
}