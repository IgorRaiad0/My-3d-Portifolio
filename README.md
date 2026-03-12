# Portfólio Pessoal - Igor Ryan

Projeto com objetivo de estudar React em conjunto com Tree.js.

Um portfólio moderno e interativo desenvolvido com React e Three.js, apresentando projetos, habilidades e experiências profissionais através de uma interface 3D imersiva. 

## Sobre o Projeto

Este portfólio foi desenvolvido para demonstrar minhas habilidades como desenvolvedor Full Stack, apresentando uma experiência visual única com modelos 3D interativos, animações fluidas e design responsivo.

**Acesse o projeto:** [https://igor-ryan-portifolio.vercel.app/](https://igor-ryan-portifolio.vercel.app/)

## Tecnologias Utilizadas

### Frontend
- **React** - Biblioteca JavaScript para construção da interface
- **Vite** - Build tool e bundler para desenvolvimento rápido
- **Three.js** - Biblioteca para gráficos 3D no navegador
- **React Three Fiber** - Wrapper React para Three.js
- **React Three Drei** - Utilitários para React Three Fiber
- **Framer Motion** - Biblioteca para animações e transições
- **Tailwind CSS** - Framework CSS utilitário

### Ferramentas e Bibliotecas
- **EmailJS** - Serviço para envio de emails via frontend
- **React Parallax Tilt** - Efeitos de inclinação 3D
- **Maath** - Utilitários matemáticos para Three.js
- **React Vertical Timeline** - Componente de linha do tempo

## Funcionalidades

### Interface Interativa
- Modelos 3D interativos (computador, PC desktop, astronauta)
- Animações suaves com Framer Motion
- Efeitos parallax e tilt em cards
- Campo de estrelas animado em background

### Seções do Portfólio
- **Hero** - Apresentação principal com modelo 3D de computador
- **Sobre** - Informações pessoais e profissionais
- **Experiência** - Timeline de experiências profissionais
- **Tecnologias** - Showcase de habilidades técnicas
- **Projetos** - Galeria de projetos com links para repositórios
- **Contato** - Formulário funcional de contato

### Otimizações
- Design totalmente responsivo
- Performance otimizada para mobile e desktop
- Lazy loading de modelos 3D
- SEO otimizado com meta tags e sitemap
- Intersection Observer para performance

## Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── canvas/          # Componentes 3D (Three.js)
│   │   ├── Computers.jsx
│   │   ├── DesktopPC.jsx
│   │   ├── SpaceMan.jsx
│   │   └── Stars.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Experience.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Tech.jsx
│   └── Works.jsx
├── constants/           # Dados estáticos
├── hoc/                # Higher Order Components
├── utils/              # Utilitários e helpers
├── assets/             # Imagens e recursos
└── styles.js           # Estilos globais
```

## Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para execução local

1. Clone o repositório
```bash
git clone https://github.com/IgorRaiad0/My-3d-Portifolio.git
cd My-3d-Portifolio
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto:
```env
VITE_APP_EMAILJS_SERVICE_ID=seu_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=sua_public_key
```

4. Execute o projeto
```bash
npm run dev
```

5. Acesse no navegador
```
http://localhost:5173
```

## Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## Deploy

O projeto está configurado para deploy automático no Vercel. Qualquer push para a branch main dispara um novo deploy.

## Otimizações Implementadas

### Performance
- Modelos 3D otimizados com compressão Draco
- Versões separadas para mobile e desktop
- Lazy loading de componentes
- Intersection Observer para renderização condicional

### SEO
- Meta tags otimizadas
- Open Graph para redes sociais
- Sitemap.xml para indexação
- Robots.txt configurado
- URLs canônicas

### Responsividade
- Design mobile-first
- Breakpoints otimizados
- Modelos 3D adaptados para diferentes telas
- Performance ajustada por dispositivo

## Contato

- **LinkedIn:** [Igor Ryan](https://linkedin.com/in/seu-perfil)
