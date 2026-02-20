# Landing Page - 25 anos Autocura

Landing page comemorativa dos 25 anos do método **Autocura**. O projeto reúne todos os blocos solicitados (hero, momento histórico, planos, kit exclusivo, LIRA, comparativo presencial x online, testemunhos em vídeo e FAQ interativo) seguindo o layout de referência compartilhado pelo cliente.

## Estrutura do projeto

```
.
├── assets/
│   ├── images e ícones utilizados na página
│   └── videos/ (6 depoimentos em MP4)
├── index.html        # Estrutura principal da landing page
├── styles.css        # Todo o layout e responsividade
└── scripts.js        # Comportamentos (vídeo hero, carrossel e FAQ)
```

## Tecnologias

- HTML5 semântico
- CSS3 (flexbox, grid, clamp, gradientes)
- JavaScript vanilla para interações (vídeo hero, carrossel de depoimentos e FAQ acordeão)

## Pré-requisitos

Nenhuma dependência de build. Basta um navegador moderno que suporte HTML5.

## Como executar localmente

1. Clone o repositório:
   ```bash
   git clone git@github.com:Projeto-Alex-Solnado/landing-page-25anos-bilhete.git
   cd landing-page-25anos-bilhete
   ```
2. Abra `index.html` diretamente no navegador **ou** use um servidor local simples (recomendado para lidar com paths relativos dos vídeos):
   ```bash
   # Python 3
   python -m http.server 8080
   # ou usando npx serve
   npx serve .
   ```
3. Acesse `http://localhost:8080` (ou porta configurada) para visualizar.

## Ajustes comuns

- **Novo conteúdo**: edite `index.html` e atualize o CSS/JS correspondente.
- **Assets**: ao adicionar imagens/vídeos, salve em `assets/` e atualize os paths relativos.
- **Deploy**: por ser estático, hospede em qualquer provedor (GitHub Pages, Netlify, Vercel, etc.).

## Contatos

Para novos conteúdos ou ajustes de layout, consulte o time responsável ou abra um issue/pull request neste repositório.
