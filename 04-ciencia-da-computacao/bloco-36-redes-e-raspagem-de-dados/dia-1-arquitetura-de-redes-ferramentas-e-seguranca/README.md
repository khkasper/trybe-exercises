## Agora a prática

Vamos juntar tudo o que aprendemos até aqui e exercitar mais ainda nosso aprendizado! Para isso, primeiro vamos criar servers com Python utilizando alguns dos protocolos vistos e, então, vamos explorá-los.

👀 **De olho na dica**: se tiver dúvidas ao utilizar alguma das ferramentas que mencionamos nos exercícios, exercite suas habilidades de busca no Google ou experimente o comando man!

**Exercício 1**: O primeiro server que vamos utilizar é o nosso velho amigo HTTP, na camada de aplicação. Você pode tanto criar um, quanto utilizar um dos projetos ou exercícios dos módulos anteriores. A ideia é utilizarmos os conhecimentos do conteúdo e a ferramenta cURL para realizarmos uma chamada HTTP para ele. O projeto deve ter rotas GET e POST para que seja possível enviar requisições para os endpoints e receber respostas, assim como já nos acostumamos a receber via browser ou utilizando programas como o Postman.

Caso tenha dificuldades maiores, você pode utilizar o Postman para converter uma requisição em cURL, é só fazer a requisição nele como você já sabe e depois clicar no botão code (que fica embaixo do save) e escolher cURL.

1. Faça uma chamada GET, utilizando o cURL.

**R:**
```
curl localhost:3000
```

2. Faça uma chamada POST, utilizando o cURL, passando um JSON no body da requisição.

**R:**
```
curl -X POST \
    -H 'Content-Type: application/json' \
    -d '{ "foo": "bar" }' \
    localhost:3000
```

3. Faça uma chamada qualquer, utilizando o cURL, passando um header na requisição.

**R:**
```
curl --request POST \
    --header 'Content-Type: application/json' \
    --header 'Authorization: ApiKey EXAMPLE-TOKEN' \
    --data '{ "foo": "bar" }' \
    localhost:3000
```

**Exercício 2**: Ainda utilizando o cURL, vamos explorar mais alguns conceitos do HTTP. Relembre que falamos que o HTTP organiza e dá significado aos dados encapsulados nessa camada. Por exemplo: ao vermos um 200 tanto nós quanto um client HTTP sabemos que aquela request foi realizada com sucesso. Vamos explorar isso com o cURL.

1. Faça uma chamada GET, utilizando o cURL, para "google.com".
- Perceba que foi retornado um 301. Isso quer dizer que existem diversos redirecionamentos que nos encaminham para o lugar certo. No caso, o caminho certo para a página do google é www.google.com. Ao acessarmos pelo navegador, não percebemos isso porque ele faz o redirecionamento para a página certa ao encontrar o 301, porém se você inspecionar a network vai identificar esse redirecionamento.

**R:**
```
curl google.com
```

2. Faça uma nova chamada a "google.com", porém agora utilizando o parâmetro -L ou --location, que serve para "seguir redirecionamentos".

**R:**
```
curl -L google.com
```

**Exercício 3**: Agora utilizando o wget, pegue o conteúdo da página do site da Trybe, depois abra o arquivo HTML baixado em seu navegador. Faça o mesmo processo com outras páginas web.

**R:**
```
wget betrybe.com
```

**Exercício 4**: Agora vamos para a camada de transporte. Crie um servidor TCP usando o módulo socketserver que já vem embutido com o Python. Nosso servidor TCP deverá:

1. Responder com um "Olá, client", logo quando estabelecer uma conexão.
2. Imprimir no console todo dado recebido.
3. Responder com os dados recebidos (como um eco).
4. Utilizar a porta 8085.
- Perceba que o servidor sozinho não faz nada. Ele precisa que alguém se conecte a ele. Então para testá-lo você pode utilizar o comando telnet localhost 8085, onde telnet é a aplicação que vamos utilizar, localhost é o local onde o servidor está (no caso, o seu próprio PC) e 8085 é a porta em que o servidor está escutando conexões.

👀 De olho nas dicas:
* A documentação do módulo traz exemplos de como instanciar seu servidor TCP;
* Na mesma documentação temos exemplos de classes para responder as requisições;
* Os dados na requisição vem em bytes, não strings! bytes podem ser decodificados em string com a codificação correta;
* Do mesmo jeito, para responder você pode precisar codificar strings em bytes;
* telnet sempre envia ASCII, já o netcat envia no encoding do sistema (em Linux, geralmente utf-8, mas confirme com o comando locale).

**R:**
```python
from socketserver import TCPServer, StreamRequestHandler

ADDRESS = "", 8085

class EchoHandler(StreamRequestHandler):
    """Responde requisições repetindo o que foi recebido."""

    def handle(self):
        # Usar b'' é um jeito literal de escrever bytes em ascii
        self.wfile.write(b"Hello, World!\n")
        # self.wfile e self.rfile são canais de entrada e saída
        # programados para ter a mesma interface de arquivos!
        for line in self.rfile:
            # esta linha responde o cliente
            self.wfile.write(line)
            # esta linha imprime no console
            print(line.decode('ascii').strip())

if __name__ == "__main__":
    # usando with nosso TCPServer vai arrumar a casa direitinho quando encerrado
    with TCPServer(ADDRESS, EchoHandler) as server:
        server.serve_forever()
```

**Exercício 5**: Utilizando o comando telnet ou o Netcat (nc):

1. Conecte no server do exercício anterior e envie informações. O server deverá imprimir as mensagens enviadas no console.
2. Pare o servidor e verifique o que aconteceu com a conexão que estava aberta com o comando telnet ou nc.

**R:**
```
telnet 127.0.0.1 8085
```

**Exercício 6**: Reinicie o servidor TCP e agora faça uma requisição utilizando o cURL (HTTP).
- Perceba o que é exibido no console do server, já que não estamos utilizando o HTTP nele. Perceba também que o comando cURL não recebe uma resposta HTTP com sentido (um status code 200, por exemplo), de modo que ele não sabe que aquela requisição chegou ao fim.

**R:**
```
curl localhost:8085

or

curl --request POST \
    --data "{ \"foo\": \"bar\" }" \
    --header 'Content-Type: application/json' \
    --header 'Foo-Bar-Header: foo-bar' \
    localhost:8085/foo-bar
```

**Exercício 7**: Agora vamos explorar o outro protocolo de transporte que aprendemos. Crie um servidor UDP usando o mesmo módulo socketserver. Nosso servidor UDP deverá:

1. Imprimir no console toda mensagem recebida (não esqueça de converter também para string).
2. Responder com os dados recebidos (como um eco).
3. Utilizar a porta 8084.

👀 De olho nas dicas:
* Todas as dicas do exercício 4 se aplicam;
* telnet não funciona com udp -- use netcat.

**R:**
```python
from socketserver import UDPServer, DatagramRequestHandler

ADDRESS = "", 8084

class EchoHandler(DatagramRequestHandler):
    """Responde requisições repetindo o que foi recebido."""

    def handle(self):
        for line in self.rfile:
            self.wfile.write(line)
            print(line.decode("utf-8").strip())

if __name__ == "__main__":
    with UDPServer(ADDRESS, EchoHandler) as server:
        server.serve_forever()
```

**Exercício 8**: Envie pacotes para o servidor UDP utilizando o Netcat (nc). Em seguida pare o servidor e perceba que como não há conexão nada é sentido pelo client.

**R:**
```
nc -u 127.0.0.1 8084
```

**Exercício 9**: Faça uma chamada ao server utilizando o cURL. Lembre que, além do HTTP, o comando utiliza o protocolo TCP e não o UDP. Repare o que acontece.

**R:**
```
curl localhost:8084
```

**Exercício 10**: Agora, vamos utilizar um tipo de proxy que pode ser bastante útil no nosso cotidiano como pessoas desenvolvedoras: o NGROK. Com ele conseguimos criar um túnel para o nosso localhost.

1. Crie um servidor HTTP em sua máquina executando na porta 80 (pode ser um front-end ou um back-end criado em aulas anteriores).

**R:**
```
mkdir diretorio && cd diretorio
python3 -m http.server 80
```

2. Baixe o ngrok e extraia o arquivo baixado em uma pasta de sua preferência, conforme instruções do site oficial.

**R:**
```
unzip /path/to/ngrok.zip
```

3. Conforme instruções do site, crie um túnel para a porta 80 de sua máquina.

**R:**
```
./ngrok http 80
```

4. Acesse o o link disponibilizado em seu navegador. Utilize ele para acessar de outros dispositivos, como seu smartphone ou outro computador 😎.

**R:**
```
./ngrok http 80
```

## Bônus

**Exercício 11**: Identifique o IP interno e externo da sua máquina.

**R:**
```
curl ifconfig.me
```

**Exercício 12**: Identifique as interfaces de redes utilizadas por sua máquina e identifique qual está em uso agora.

**R:**
```
curl ifconfig.me
```

**Exercício 13**: No conteúdo vimos o que são os protocolos SSL e TLS. Vamos subir nosso próprio servidor HTTPS, utilizando nosso próprio certificado!

1. Vamos utilizar a ferramenta OpenSSL para gerar nossos certificados. Ela já vem instalada na maioria das distros Linux. No Docker, no entanto, você vai precisar executar:

```
apt-get update && apt-get install python3 openssl
```

**R:**
```
openssl -v
```

2. Para gerar nosso próprio certificado auto-assinado, utilize os comandos abaixo. Lembrando que, como nós estamos gerando o certificado, ele não será reconhecido por nenhuma entidade certificadora, de modo que ele só nos servirá para utilizar o protocolo TLS com o HTTPS, não sendo capaz de ser aceito pelo navegador por não ter sido aprovado por nenhuma entidade reconhecida por ele.

```
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```

**R:**
```
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```

3. Acabamos de gerar dois arquivos, o cert.pem (o certificado) e o key.pem (chave privada). Copie os dois arquivos para um diretório onde vamos criar nosso servidor HTTPS.

**R:**
```
mkdir /some-dir/https-server
mv key.pem /some-dir/https-server
mv cert.pem /some-dir/https-server
cd /some-dir/https-server
```

4. Agora vamos escrever um servidor https usando os módulos nativos do python ssl e http.server. Embora esses módulos tenham muitos muitos recursos (muitos mesmo), nós vamos usar apenas alguns. Tente seguir as instruções a seguir:

	4.1 Crie um contexto SSL com a classe SSLContext, usando o protocolo de versão mais alta disponível para servidores. (dica: as opções estão listadas na documentação).

	4.2 Carregue no contexto SSL a cadeia de certificação, passando tanto a o arquivo de certificação quanto a sua chave. (dica: existe um método para isso).

	4.3 Crie uma instância de HTTPServer. O endereço deve ser uma tupla ('localhost', 8000) e para responder as requisições, use SimpleHTTPRequestHandler. (dica: apesar do exemplo na documentação, não use with).

	4.4 Crie um socket server-side usando o método wrap_socket do seu contexto SSL. Passe como parâmetro o socket do servidor (server.socket).

	4.5 Substitua o socket do servidor pelo socket que você acabou de criar.

	4.6 Execute o servidor com o método serve_forever.

**R:**
```python
import ssl
from http.server import HTTPServer, SimpleHTTPRequestHandler

ssl_context = ssl.SSLContext()
ssl_context.load_cert_chain("cert.pem", keyfile="key.pem")

server_address = ("0.0.0.0", 8000)
httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
httpd.socket = ssl_context.wrap_socket(httpd.socket, server_side=True)

httpd.serve_forever()
```

5. Acesse o servidor no endereço https://localhost:8000/ utilizando o Firefox (precisa ser o Firefox). Perceba que ele vai informar que o certificado não é reconhecido por ele, pois não foi assinado por nenhuma autoridade da confiança dele.

	5.1 Chrome e Safari se recusam a acessar um site cujo certificado não está assinado por NENHUMA autoridade certificadora. Existem instruções para agir como uma autoridade certificadora, mas não precisa seguir por esse caminho.

6. Acesse o servidor novamente, porém desta vez utilizando cURL (de fora do Docker, se você estiver usando).

**R:**
```
curl https://localhost:8000
```

7. Por último, vamos utilizar um recurso do cURL, somente para testes (somente utilize, caso realmente você esteja esperando por aquilo), que é o parâmetro -k ou --insecure. Com ele, falamos para o nosso cURL prosseguir a request mesmo sabendo que a conexão não é "confiável".

**R:**
```
curl --insecure https://localhost:8000
```

**Exercício 14**: Crie uma conta no Ngrok e explore o dashboard disponibilizado por ele para monitorar seus túneis. Aproveite e explore outros recursos dessa poderosa ferramenta.
