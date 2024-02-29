using System.Text;
using ByteBankIO;

class Program
{
    static void Main(string[] args)
    {
        var enderecoDoArquivo = "contas.txt";
        var numeroDebytesLidos = -1;
        
        var fluxoDoArquivo = new FileStream(enderecoDoArquivo, FileMode.Open);

        var buffer = new byte[1024]; // 1KB
        

        while (numeroDebytesLidos != 0)
        {
            numeroDebytesLidos = fluxoDoArquivo.Read(buffer, 0, 1024);
            EscreverBuffer(buffer);
        }
        
        // Devoluções:
        // O número total de bytes lidos. Isso poderá ser menor que o número de
        // bytes solicitados se esse número de bytes não estiver disponível no momento, ou
        // zer, se o final do fluxo for atingido.
        Console.ReadLine();
    }

    static void EscreverBuffer(byte[] buffer)
    {
        var utf8 = new UTF8Encoding();
        var texto = utf8.GetString(buffer);
        Console.WriteLine(texto);

        // foreach (var meuByte in buffer)
        // {
        //     Console.Write(meuByte);
        //     Console.Write(" ");
        // }
    }
}