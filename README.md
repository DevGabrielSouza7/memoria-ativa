# Memória Ativa

> Mente ativa e rotina em dia, em um só lugar.

Projeto acadêmico (Silver Economy) da UNINASSAU Aracaju, ADS 4º período, com orientação do Prof. Marcos Cesar.
Aplicativo para pessoas 50+ que une organização da rotina e estimulação cognitiva, com foco em acessibilidade.
O app **não faz diagnósticos**: ele apoia uma rotina mais ativa, organizada e autônoma.

## Funcionalidades do protótipo

- **Hoje:** lembretes de remédio, consulta e compromisso, com botão grande "Já tomei", repetição diária e aviso na hora marcada.
- **Exercícios (sem tempo limite):** Encontre os pares (memória e atenção, 3 níveis), Complete a sequência (raciocínio) e Qual é diferente? (atenção).
- **Progresso:** dias de prática na semana, remédios tomados, melhores resultados e compartilhamento.
- **Assistente Ativo:** transforma frases em lembretes ("Me lembra de ligar para minha filha amanhã às 18h"), consulta compromissos e pendências e tira dúvidas. Suporta voz. A IA sugere, a pessoa decide: nada é salvo sem confirmação.
- **Serviços Locais:** pessoas 50+ anunciam seus serviços, com contato direto (ligação ou WhatsApp) e sem pagamentos pelo app. Todo anúncio passa por uma verificação de conteúdo.
- **Acessibilidade:** controle do tamanho da letra (A− e A+), alto contraste, tema claro/escuro e leitura dos lembretes em voz alta.

## Como rodar

Abra o arquivo `index.html` no navegador. Não precisa instalar nada.

## Limitações desta versão

- Os dados ficam só no aparelho (localStorage).
- A verificação dos anúncios e o Assistente usam regras locais, no lugar da LLM.
- Os avisos de lembrete só funcionam com o app aberto.

## Arquitetura do MVP

- **Back-end:** Java, Spring Boot e Hibernate (MVC com Service e Repository)
- **Banco de dados:** PostgreSQL (normalizado)
- **Web:** React · **Mobile:** React Native (mesma API e mesmo banco)
- **IA:** LLM via API (filtro de anúncios e Assistente Ativo)

Fora do escopo do MVP: favoritos, avaliações, login social, chat interno e pagamentos.

## Equipe

Gabriel dos Santos (Líder e Product Owner), Kíria Góis, Igor Cleyve e Pedro Henrique.
