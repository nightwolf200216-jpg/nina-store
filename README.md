# Nina's Store 🐱✨ - E-commerce Kawaii

Bem-vindo à **Nina's Store**, uma loja online completa e responsiva de itens fofinhos e kawaii, criada para Nina, uma adorável gata furry! 

![Badge](https://img.shields.io/badge/Status-Completo-success)
![Badge](https://img.shields.io/badge/Mobile-Optimized-blue)
![Badge](https://img.shields.io/badge/Version-1.0.0-pink)

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Páginas Implementadas](#páginas-implementadas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Usar](#como-usar)
- [API RESTful](#api-restful)
- [Paleta de Cores](#paleta-de-cores)
- [Responsividade](#responsividade)
- [Próximos Passos](#próximos-passos)

---

## 🎀 Sobre o Projeto

**Nina's Store** é um e-commerce completo e totalmente funcional dedicado a produtos kawaii e fofinhos. O site foi desenvolvido com foco em:

- ✨ **Design Mobile-First**: Otimizado primeiramente para celular
- 🎨 **Estética Kawaii**: Paleta de cores pastel e design adorável
- 🛒 **E-commerce Funcional**: Sistema completo de carrinho de compras
- 📱 **Responsividade Total**: Funciona perfeitamente em todos os dispositivos
- 🚀 **SPA (Single Page Application)**: Navegação fluida sem recarregar a página

---

## ✨ Funcionalidades

### 🛍️ Sistema de Compras
- ✅ Catálogo completo de produtos
- ✅ Filtros por categoria (Pelúcias, Acessórios, Casa, Moda)
- ✅ Ordenação por preço e nome
- ✅ Página de detalhes do produto
- ✅ Sistema de carrinho de compras funcional
- ✅ Adicionar/remover produtos do carrinho
- ✅ Contador de quantidade de itens
- ✅ Cálculo automático de subtotal e frete
- ✅ Frete grátis acima de R$ 100,00
- ✅ Finalização via WhatsApp

### 📱 Navegação
- ✅ Menu hambúrguer responsivo para mobile
- ✅ Menu desktop completo
- ✅ Navegação SPA (Single Page Application)
- ✅ URLs com hash routing (#home, #produtos, etc.)
- ✅ Transições suaves entre páginas
- ✅ Scroll to top automático

### 🎨 Interface
- ✅ Design kawaii com cores pastel
- ✅ Animações suaves e transições
- ✅ Ícones Font Awesome
- ✅ Tipografia fofa (Quicksand + Fredoka)
- ✅ Botões touch-friendly (48px mínimo)
- ✅ Toast notifications para feedback
- ✅ Loading states

### 📝 Conteúdo
- ✅ Blog com posts sobre cultura kawaii
- ✅ Página sobre a Nina (personagem)
- ✅ Formulário de contato funcional
- ✅ Seção de produtos em destaque
- ✅ Newsletter no footer

### 🔧 Funcionalidades Técnicas
- ✅ LocalStorage para persistência do carrinho
- ✅ API RESTful para produtos e posts
- ✅ Sistema de gerenciamento de estado
- ✅ Event listeners otimizados
- ✅ Código modular e organizado

---

## 📄 Páginas Implementadas

### 1. **Home** (`#home`)
- Hero section com apresentação da Nina
- Produtos em destaque (3 produtos)
- Preview da seção "Sobre"
- CTAs para navegar para produtos e sobre

### 2. **Produtos** (`#produtos`)
- Grid completo de produtos (10 itens)
- Filtros por categoria
- Ordenação (padrão, menor preço, maior preço, A-Z)
- Cards de produtos com:
  - Imagem/ícone
  - Categoria
  - Nome e descrição
  - Preço
  - Botão "Adicionar ao carrinho"

### 3. **Detalhes do Produto** (`#produto/:id`)
- Imagem grande do produto
- Informações completas
- Descrição detalhada
- Lista de características
- Botão de adicionar ao carrinho

### 4. **Sobre** (`#sobre`)
- História da Nina
- Missão da loja
- Diferenciais
- Links para redes sociais
- Avatar grande da Nina

### 5. **Blog** (`#blog`)
- Grid de posts (5 posts)
- Cards com:
  - Ícone temático
  - Data de publicação
  - Título
  - Excerpt (resumo)
  - Link "Ler mais"

### 6. **Post Individual** (`#post/:id`)
- Título completo
- Metadata (data, autor)
- Conteúdo formatado em HTML
- Botão voltar ao blog

### 7. **Contato** (`#contato`)
- Formulário funcional com:
  - Nome
  - E-mail
  - Assunto (dropdown)
  - Mensagem (textarea)
- Cards informativos:
  - Horário de atendimento
  - E-mail de contato
  - WhatsApp

### 8. **Carrinho** (`#carrinho`)
- Lista de itens no carrinho
- Controles de quantidade (+/-)
- Botão remover item
- Resumo do pedido:
  - Subtotal
  - Frete (grátis acima de R$100)
  - Total
- Botão finalizar compra (WhatsApp)
- Estado vazio com CTA

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com variáveis CSS
- **JavaScript (Vanilla)**: Lógica e interatividade
- **Font Awesome 6.4.0**: Ícones
- **Google Fonts**: Quicksand + Fredoka

### Backend/Dados
- **RESTful Table API**: Para produtos e posts do blog
- **LocalStorage**: Persistência do carrinho

### Bibliotecas CDN
```html
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Fredoka:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
```

---

## 📁 Estrutura do Projeto

```
nina-store/
│
├── index.html              # Página principal (SPA)
│
├── css/
│   └── style.css          # Estilos completos (mobile-first)
│
├── js/
│   └── main.js            # JavaScript principal (SPA logic, carrinho, API)
│
└── README.md              # Este arquivo
```

---

## 🚀 Como Usar

### Acesso ao Site
1. Abra o arquivo `index.html` em um navegador moderno
2. O site carregará automaticamente na página inicial

### Navegação
- **Desktop**: Use o menu superior
- **Mobile**: Clique no ícone de menu hambúrguer (☰)
- Todos os links são funcionais e navegam entre páginas

### Adicionar Produtos ao Carrinho
1. Navegue até "Produtos"
2. Clique em "Adicionar" em qualquer produto OU
3. Clique no produto para ver detalhes e adicione de lá
4. Veja o contador no ícone do carrinho aumentar
5. Clique no ícone do carrinho para ver/gerenciar itens

### Finalizar Compra
1. No carrinho, revise seus itens
2. Ajuste quantidades com os botões +/-
3. Clique em "Finalizar Compra"
4. Será redirecionado para WhatsApp com pedido formatado

### Explorar Blog
1. Navegue até "Blog"
2. Clique em qualquer post para ler completo
3. Use "Voltar ao Blog" para retornar

---

## 🔌 API RESTful

O site utiliza uma API RESTful para gerenciar produtos e posts do blog.

### Endpoints Disponíveis

#### Produtos
```javascript
GET /tables/products?limit=100
```

**Resposta:**
```json
{
  "data": [
    {
      "id": "prod_001",
      "name": "Pelúcia Gatinha Kawaii",
      "description": "Pelúcia super fofa...",
      "price": 89.90,
      "category": "pelucias",
      "icon": "fas fa-cat",
      "featured": true,
      "features": ["Material macio", "30cm", ...]
    }
  ],
  "total": 10
}
```

#### Posts do Blog
```javascript
GET /tables/blog_posts?limit=100
```

**Resposta:**
```json
{
  "data": [
    {
      "id": "post_001",
      "title": "Minha Jornada no Mundo Kawaii",
      "excerpt": "Descubra como me apaixonei...",
      "content": "<p>Conteúdo completo...</p>",
      "date": "2024-01-15",
      "icon": "fas fa-heart"
    }
  ],
  "total": 5
}
```

### Schemas das Tabelas

#### Produtos (`products`)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | text | ID único do produto |
| `name` | text | Nome do produto |
| `description` | text | Descrição curta |
| `description_long` | text | Descrição detalhada |
| `price` | number | Preço em reais |
| `category` | text | pelucias/acessorios/casa/moda |
| `icon` | text | Classe do ícone Font Awesome |
| `featured` | bool | Produto destaque? |
| `features` | array | Lista de características |

#### Posts do Blog (`blog_posts`)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | text | ID único do post |
| `title` | text | Título do post |
| `excerpt` | text | Resumo/preview |
| `content` | rich_text | Conteúdo HTML completo |
| `date` | datetime | Data de publicação |
| `icon` | text | Classe do ícone Font Awesome |

---

## 🎨 Paleta de Cores

### Cores Principais
```css
--color-primary: #FF9FCF;        /* Rosa fofo */
--color-primary-dark: #FF6FB5;   /* Rosa escuro */
--color-primary-light: #FFD4EC;  /* Rosa clarinho */
--color-secondary: #B4A7FF;      /* Lilás */
--color-secondary-dark: #9B8AFF; /* Lilás escuro */
--color-secondary-light: #D4CBFF;/* Lilás clarinho */
```

### Cores Pastel
```css
--color-pink: #FFB3D9;     /* Rosa pastel */
--color-lavender: #C9B3FF; /* Lavanda */
--color-mint: #B3FFD9;     /* Menta */
--color-peach: #FFCDB3;    /* Pêssego */
--color-sky: #B3E5FF;      /* Azul céu */
```

### Cores de Estado
```css
--color-success: #7BFFB2;  /* Verde sucesso */
--color-warning: #FFE17B;  /* Amarelo aviso */
--color-error: #FF7B9C;    /* Rosa erro */
--color-info: #7BD4FF;     /* Azul info */
```

---

## 📱 Responsividade

### Mobile First (< 768px)
- Menu hambúrguer
- Grid de 1 coluna
- Botões full-width
- Touch-friendly (min 48px)
- Navegação otimizada para dedos

### Tablet (768px - 1023px)
- Menu desktop aparece
- Grid de 2 colunas
- Botões auto-width
- Layout híbrido

### Desktop (≥ 1024px)
- Grid de 3 colunas
- Layout completo
- Hover effects
- Espaçamento maior

### Large Desktop (≥ 1280px)
- Grid de 4 colunas para produtos
- Container max-width: 1200px

### Breakpoints
```css
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Large Desktop */ }
```

---

## 📊 Produtos Disponíveis

### Total: 10 produtos

#### Por Categoria:
- **Pelúcias**: 2 itens (Gatinha Kawaii R$89,90 | Coelho Gigante R$249,90)
- **Acessórios**: 5 itens (Orelhinhas R$45,90 | Chaveiro R$28,90 | Adesivos R$24,90 | Laços R$64,90)
- **Casa & Decoração**: 2 itens (Caneca R$52,90 | Almofada R$68,90)
- **Moda**: 2 itens (Mochila R$129,90 | Camiseta R$79,90)

#### Produtos em Destaque (featured: true):
1. Pelúcia Gatinha Kawaii - R$ 89,90
2. Orelhinhas de Gato com Laço - R$ 45,90
3. Caneca Fofa com Orelhas - R$ 52,90

#### Faixa de Preço:
- **Mínimo**: R$ 24,90 (Kit Adesivos)
- **Máximo**: R$ 249,90 (Pelúcia Coelho Gigante)
- **Médio**: R$ 73,59

---

## 📝 Posts do Blog

### Total: 5 posts

1. **Minha Jornada no Mundo Kawaii** 🌟 (15/01/2024)
   - História pessoal da Nina
   - Descobrindo o kawaii
   - Inspiração para a loja

2. **Como Decorar seu Quarto Estilo Kawaii** 🌈 (20/01/2024)
   - Dicas de decoração
   - Paleta de cores
   - Organização fofa

3. **Cultura Furry: O Que É e Por Que Amamos** 🐾 (25/01/2024)
   - Explicação sobre furries
   - Criando fursonas
   - Comunidade e aceitação

4. **Guia Completo: Como Cuidar das Suas Pelúcias** 🧸 (01/02/2024)
   - Limpeza e manutenção
   - Lavagem adequada
   - Dicas de armazenamento

5. **Tendências Kawaii Fashion 2024** 🎀 (05/02/2024)
   - Estilos kawaii populares
   - Acessórios must-have
   - Dicas de moda

---

## 🔧 Funcionalidades Técnicas Detalhadas

### Sistema de Estado (State Management)
```javascript
const state = {
    currentPage: 'home',
    currentProductId: null,
    currentPostId: null,
    cart: [],
    products: [],
    posts: [],
    filters: {
        category: 'all',
        sort: 'default'
    }
};
```

### Roteamento SPA
- Hash-based routing (`#home`, `#produtos`, `#produto/prod_001`)
- History API para navegação com back/forward
- URL atualização automática
- Deep linking suportado

### Carrinho de Compras
- Adicionar/remover produtos
- Atualizar quantidade
- Cálculo automático de totais
- Persistência em LocalStorage
- Sincronização em tempo real

### Toast Notifications
- Feedback visual para ações
- Auto-dismiss após 3 segundos
- Ícones contextuais
- Animações suaves

---

## 🎯 Próximos Passos Recomendados

### Funcionalidades Adicionais
- [ ] Sistema de busca de produtos
- [ ] Wishlist (lista de desejos)
- [ ] Comparação de produtos
- [ ] Avaliações e comentários
- [ ] Galeria de imagens nos produtos
- [ ] Zoom nas imagens
- [ ] Sistema de cupons de desconto
- [ ] Histórico de pedidos
- [ ] Compartilhamento social
- [ ] Recomendações personalizadas

### Melhorias Técnicas
- [ ] Service Worker para PWA
- [ ] Lazy loading de imagens
- [ ] Compressão de assets
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] A/B testing
- [ ] Performance optimization
- [ ] Acessibilidade WCAG 2.1

### Conteúdo
- [ ] Mais produtos (expandir catálogo)
- [ ] Vídeos dos produtos
- [ ] Reviews de clientes
- [ ] FAQ expandido
- [ ] Guia de tamanhos
- [ ] Política de trocas/devoluções
- [ ] Sobre frete e entrega

### Integrations
- [ ] Gateway de pagamento real
- [ ] Sistema de rastreamento de pedidos
- [ ] E-mail marketing
- [ ] Chat ao vivo
- [ ] Instagram feed
- [ ] Programa de fidelidade

---

## 📞 Contato e Suporte

### Loja
- **E-mail**: 
- **WhatsApp**: 
- **Horário**: Segunda a Sexta: 9h às 18h | Sábado: 9h às 14h

### Redes Sociais
- Instagram: [@ninastore]( )
- Twitter: [@ninastore]( )
- TikTok: [@ninastore]( )
- Pinterest: [Nina's Store]( )

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de demonstração.

---

## 💖 Desenvolvido com Amor

Feito com 💕 pela Nina, uma gata furry apaixonada por kawaii!

**Nina's Store** - Espalhando fofura pelo mundo, um produto por vez! 🐱✨

---

## 🏷️ Tags

`e-commerce` `kawaii` `furry` `spa` `mobile-first` `responsive` `javascript` `css3` `html5` `shopping-cart` `cute` `pastel` `anime` `otaku` `geek` `plushies` `accessories` `fashion` `blog`

---

**Versão**: 1.0.0  
**Última Atualização**: Janeiro 2024  
**Status**: ✅ Completo e Funcional
