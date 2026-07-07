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

## Otimizações Implementadas

- Design totalmente responsivo
- Performance otimizada para mobile e desktop
- Lazy loading de modelos 3D
- SEO otimizado com meta tags e sitemap
- Intersection Observer para performance

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
