# Simulador do Algoritmo de Lamport
Este projeto implementa um simulador simples do Algoritmo de Lamport, utilizado para coordenar e ordenar eventos em sistemas distribuídos através de relógios lógicos. O simulador contém três processos que interagem entre si, trocando mensagens e incrementando seus relógios de acordo com as regras do algoritmo.

# Funcionalidades
Relógios Lógicos: Cada processo possui um relógio lógico que é atualizado a cada evento interno ou ao receber uma mensagem.

Troca de Mensagens: Os processos podem enviar mensagens entre si, e o relógio do processo receptor é ajustado de acordo com a lógica do Algoritmo de Lamport.

Logs de Eventos: Cada evento (interno ou de recebimento de mensagem) é registrado em um log específico de cada processo.

Eventos Automáticos: A simulação contém eventos automáticos para cada processo, gerados a intervalos aleatórios.

# Tecnologias Utilizadas
HTML: Estruturação da página e exibição dos processos e botões de interação.

CSS: Estilização da interface do usuário.

JavaScript: Lógica de funcionamento do simulador, incluindo a manipulação dos relógios lógicos e a troca de mensagens entre os processos.

# Como Usar
Abra o arquivo index.html em seu navegador.

Cada processo (P1, P2, P3) possui botões para enviar mensagens para outros processos.

O relógio de cada processo será atualizado sempre que um evento ocorrer, seja interno ou ao receber uma mensagem.

O log de eventos de cada processo mostrará detalhes dos eventos realizados, como o envio de mensagens e a atualização dos relógios.

# Estrutura do Projeto
index.html: Página principal do simulador com a interface do usuário.

style.css: Arquivo de estilos da interface.

app.js: Lógica de funcionamento do simulador (gerenciamento dos relógios lógicos e troca de mensagens).

# Exemplo de Funcionamento
O Processo P1 envia uma mensagem para o Processo P2.

O relógio do P1 é incrementado antes de enviar a mensagem.

O Processo P2 recebe a mensagem de P1 e atualiza seu relógio, ajustando-o para o valor máximo entre seu relógio atual e o de P1, mais 1.

O processo continua com novos eventos internos e trocas de mensagens entre os processos.

Licença
Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.
