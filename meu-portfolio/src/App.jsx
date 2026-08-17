import React, { useState, useEffect } from 'react'
import './App.css'
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Layout, 
  Settings, 
  MapPin, 
  MessageSquare,
  Sun,
  Moon
} from 'lucide-react'

function App() {
  // 1. ESTADO DO DARK MODE (Persistido no localStorage)
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) return savedTheme === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  // 2. SALVA PREFERÊNCIA QUANDO MUDAR
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  // 3. PALETA DE CORES DINÂMICA
  const theme = {
    bg: darkMode ? '#0f172a' : '#ffffff',
    bgSecondary: darkMode ? '#1e293b' : '#fcfcfc',
    cardBg: darkMode ? '#1e293b' : '#ffffff',
    textPrimary: darkMode ? '#f8fafc' : '#0f172a',
    textSecondary: darkMode ? '#94a3b8' : '#64748b',
    border: darkMode ? '#334155' : '#e2e8f0',
    navBg: darkMode ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)',
    cardHover: darkMode ? '#334155' : '#f1f5f9'
  }

  // LISTA DE PROJETOS
  const meusProjetos = [
    {
      titulo: "Vizy",
      descricao: "Sistema voltado para auxiliar deficientes visuais a ter independência ao navegar em sites.",
      tags: ["HTML", "CSS", "JavaScript"],
      imagem: "/imgs/vizy.png", 
      repositorio: "https://github.com/sntechnology/vizy-lp"
    },
    {
      titulo: "Xprocess",
      descricao: "Uma repaginada em um sistema PDV com interface moderna e funcional.",
      tags: ["HTML", "CSS", "JavaScript"],
      imagem: "/imgs/xprocess.png", 
      repositorio: "https://github.com/glimadev19/Xprocess"
    },
    {
      titulo: "Brasil Imóveis",
      descricao: "Um site voltado para corretores e compradores para ver os imóveis que estão disponíveis de forma rápida e prática.",
      tags: ["HTML", "CSS", "JavaScript", "PostgreSQL", "PHP"],
      imagem: "/imgs/brasil-imoveis.png",
      status: "Pausado",
      repositorio: "https://github.com/glimadev19/Brasil-Imoveis"
    },
    {
      titulo: "Pão de Queijo da Jossy",
      descricao: "Um sistema de venda de Pães de Queijo, realizados por encomenda, contendo contato por WhatsApp por meio de um robô e um perfil administrativo para o auxílio.",
      tags: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
      imagem: "/imgs/logo-pao.png",
      status: "Em Desenvolvimento",
      repositorio: "https://github.com/glimadev19/pao-de-queijo"
    },
  ];

  const habilidades = [
    {
      categoria: "Back-end",
      icone: <Database size={24} color="#2563eb" />,
      itens: ["Node.js", "PHP", "PostgreSQL", "MySQL"]
    },
    {
      categoria: "Front-end",
      icone: <Layout size={24} color="#2563eb" />,
      itens: ["React", "JavaScript", "CSS3 / Tailwind", "HTML5"]
    },
    {
      categoria: "Ferramentas",
      icone: <Settings size={24} color="#2563eb" />,
      itens: ["Git & GitHub", "Docker", "VS Code", "Postman"]
    }
  ];

  return (
    <div className="portfolio" style={{ backgroundColor: theme.bg, minHeight: '100vh', color: theme.textPrimary, fontFamily: 'sans-serif', scrollBehavior: 'smooth', transition: 'background-color 0.3s, color 0.3s' }}>
      
      {/* NAVBAR */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 8%', alignItems: 'center', borderBottom: `1px solid ${theme.border}`, position: 'sticky', top: 0, backgroundColor: theme.navBg, backdropFilter: 'blur(10px)', zIndex: 100, transition: 'background-color 0.3s, border-color 0.3s' }}>
        <div style={{ fontWeight: '800', fontSize: '1.2rem', color: theme.textPrimary }}>Gabriel Lima</div>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="#projetos" className="nav-link" style={{ textDecoration: 'none', color: theme.textSecondary, fontSize: '0.9rem' }}>Projetos</a>
          <a href="#habilidades" className="nav-link" style={{ textDecoration: 'none', color: theme.textSecondary, fontSize: '0.9rem' }}>Habilidades</a>
          <a href="#contato" className="nav-link" style={{ textDecoration: 'none', color: theme.textSecondary, fontSize: '0.9rem' }}>Contato</a>
          
          {/* BOTÃO TOGGLE DE DARK MODE */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: 'transparent',
              border: `1px solid ${theme.border}`,
              color: theme.textPrimary,
              padding: '6px 12px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.85rem',
              transition: 'all 0.3s'
            }}
          >
            {darkMode ? <Sun size={18} color="#facc15" /> : <Moon size={18} color="#475569" />}
            <span>{darkMode ? 'Claro' : 'Escuro'}</span>
          </button>

          <div style={{ display: 'flex', gap: '15px', marginLeft: '10px', color: theme.textSecondary }}>
            <a href="https://github.com/glimadev19" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
              <Github size={20} cursor="pointer" className="nav-link" />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-lima-5838b9307/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
              <Linkedin size={20} cursor="pointer" className="nav-link" />
            </a>
            <a href="mailto:gabriellimadeveloper@gmail.com" style={{ color: 'inherit' }}>
              <Mail size={20} cursor="pointer" className="nav-link" />
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header style={{ padding: '100px 8%', maxWidth: '1200px' }}>
        <p style={{ color: '#2563eb', fontWeight: '600', fontSize: '0.85rem', marginBottom: '15px', letterSpacing: '1px' }}>DESENVOLVEDOR BACK-END</p>
        <h1 style={{ fontSize: '4.5rem', lineHeight: '1', margin: '0', fontWeight: '800', color: theme.textPrimary }}>
          Olá, eu sou <br /> <span style={{ color: '#2563eb' }}>Gabriel Lima da Silva</span>
        </h1>
        <p style={{ fontSize: '1.5rem', color: theme.textSecondary, marginTop: '25px', fontWeight: '500' }}>Full-Stack Developer Júnior</p>
        <p style={{ maxWidth: '650px', color: theme.textSecondary, lineHeight: '1.7', marginTop: '20px', fontSize: '1.1rem' }}>
          Desenvolvedor apaixonado por criar soluções eficientes e escaláveis. Especializado em desenvolvimento Full-Stack com experiência em diversas tecnologias.
        </p>
        <div style={{ marginTop: '40px', display: 'flex', gap: '15px' }}>
          <a href="#projetos" style={{ textDecoration: 'none' }}>
            <button className="btn-primary" style={{ backgroundColor: '#2563eb', color: 'white', padding: '14px 28px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '10px' }}>
              Ver Projetos <ExternalLink size={18} />
            </button>
          </a>
          <a href="#contato" style={{ textDecoration: 'none' }}>
            <button className="nav-link" style={{ backgroundColor: theme.cardBg, color: theme.textPrimary, padding: '14px 28px', borderRadius: '8px', border: `1px solid ${theme.border}`, cursor: 'pointer', fontWeight: '600' }}>Entrar em Contato</button>
          </a>
        </div>
      </header>

      {/* SEÇÃO DE PROJETOS */}
      <section id="projetos" style={{ padding: '80px 8%', backgroundColor: theme.bgSecondary }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '10px', color: theme.textPrimary }}>Projetos</h2>
        <p style={{ color: theme.textSecondary, marginBottom: '40px' }}>Alguns dos projetos que desenvolvi.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {meusProjetos.map((proj, index) => (
            <div key={index} className="project-card" style={{ backgroundColor: theme.cardBg, borderRadius: '16px', border: `1px solid ${theme.border}`, overflow: 'hidden', position: 'relative' }}>
              {proj.status && (
                <div style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: '#2563eb', color: 'white', padding: '5px 14px', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 'bold', zIndex: 10 }}>
                  {proj.status}
                </div>
              )}
              
              {/* CONTAINER DA IMAGEM */}
              <div style={{ 
                backgroundColor: 
                  proj.titulo === "Xprocess" ? "#0f172a" : 
                  proj.titulo === "Pão de Queijo da Jossy" ? "#facc15" : 
                  (darkMode ? '#0f172a' : '#f8fafc'), 
                width: '100%', 
                height: '220px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img 
                  src={proj.imagem} 
                  alt={proj.titulo} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: (proj.titulo === "Xprocess" || proj.titulo === "Pão de Queijo da Jossy") ? 'contain' : 'cover', 
                    padding: 
                      proj.titulo === "Xprocess" ? '30px' : 
                      proj.titulo === "Pão de Queijo da Jossy" ? '20px' : 
                      '0px'
                  }} 
                />
              </div>

              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', color: theme.textPrimary }}>{proj.titulo}</h3>
                <p style={{ color: theme.textSecondary, fontSize: '0.95rem', marginBottom: '20px', minHeight: '50px' }}>{proj.descricao}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  {proj.tags.map(tag => (
                    <span key={tag} style={{ backgroundColor: darkMode ? '#1e3a8a' : '#eff6ff', color: darkMode ? '#93c5fd' : '#2563eb', padding: '4px 12px', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 'bold' }}>{tag}</span>
                  ))}
                </div>
                <a href={proj.repositorio} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <button className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: `1px solid ${theme.border}`, padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', color: theme.textPrimary }}>
                    <Code2 size={16} /> Código
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO DE HABILIDADES */}
      <section id="habilidades" style={{ padding: '80px 8%' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '10px', color: theme.textPrimary }}>Habilidades</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginTop: '40px' }}>
          {habilidades.map((hab, index) => (
            <div key={index}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                {hab.icone}
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: theme.textPrimary }}>{hab.categoria}</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {hab.itens.map(item => (
                  <li key={item} className="skill-item" style={{ padding: '10px 0', borderBottom: `1px solid ${theme.border}`, color: theme.textSecondary, display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '6px', height: '6px', backgroundColor: '#2563eb', borderRadius: '50%' }}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO DE CONTATO */}
      <section id="contato" style={{ padding: '80px 8%', backgroundColor: theme.bg }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', maxWidth: '1200px', margin: '0 auto' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '10px', color: theme.textPrimary }}>Vamos Conversar?</h2>
            <p style={{ color: theme.textSecondary, marginBottom: '40px' }}>Estou sempre aberto a novos projetos e parcerias!</p>
            <div className="contact-card" style={{ padding: '30px', borderRadius: '16px', border: `1px solid ${theme.border}`, backgroundColor: theme.cardBg }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: theme.textSecondary }}>
                <MessageSquare size={20} />
                <span style={{ fontWeight: '600' }}>Envie uma mensagem</span>
              </div>
              <a href="mailto:gabriellimadeveloper@gmail.com" style={{ textDecoration: 'none' }}>
                <button className="btn-primary" style={{ width: '100%', backgroundColor: '#2563eb', color: 'white', padding: '14px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
                  Enviar Mensagem
                </button>
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="contact-card" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '25px', borderRadius: '16px', border: `1px solid ${theme.border}`, backgroundColor: theme.cardBg }}>
              <div style={{ backgroundColor: darkMode ? '#1e3a8a' : '#eff6ff', padding: '15px', borderRadius: '12px' }}>
                <Mail color="#2563eb" size={24} />
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: 'bold', color: theme.textPrimary }}>E-mail</p>
                <p style={{ margin: 0, color: theme.textSecondary, fontSize: '0.9rem' }}>gabriellimadeveloper@gmail.com</p>
              </div>
            </div>

            <div className="contact-card" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '25px', borderRadius: '16px', border: `1px solid ${theme.border}`, backgroundColor: theme.cardBg }}>
              <div style={{ backgroundColor: darkMode ? '#1e3a8a' : '#eff6ff', padding: '15px', borderRadius: '12px' }}>
                <MapPin color="#2563eb" size={24} />
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: 'bold', color: theme.textPrimary }}>Localização</p>
                <p style={{ margin: 0, color: theme.textSecondary, fontSize: '0.9rem' }}>Brasil</p>
              </div>
            </div>

            <div className="contact-card" style={{ padding: '25px', borderRadius: '16px', border: `1px solid ${theme.border}`, backgroundColor: theme.cardBg }}>
              <p style={{ margin: '0 0 15px 0', fontWeight: 'bold', color: theme.textPrimary }}>Redes Sociais</p>
              <div style={{ display: 'flex', gap: '15px' }}>
                <a href="https://www.linkedin.com/in/gabriel-lima-5838b9307/" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#2563eb', fontWeight: '600', fontSize: '0.85rem', backgroundColor: darkMode ? '#1e3a8a' : '#eff6ff', padding: '8px 12px', borderRadius: '8px' }}>
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a href="https://github.com/glimadev19" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: darkMode ? '#f8fafc' : '#2563eb', fontWeight: '600', fontSize: '0.85rem', backgroundColor: darkMode ? '#334155' : '#f1f5f9', padding: '8px 12px', borderRadius: '8px' }}>
                  <Github size={18} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: darkMode ? '#020617' : '#030712', color: 'white', padding: '60px 8% 30px 8%', borderTop: `1px solid ${theme.border}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', maxWidth: '1200px', margin: '0 auto 40px auto' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '800' }}>Gabriel Lima da Silva</h3>
            <p style={{ color: '#94a3b8', marginTop: '5px' }}>Back-end Developer Júnior</p>
          </div>
          <div style={{ display: 'flex', gap: '20px', color: '#2563eb' }}>
            <a href="https://github.com/glimadev19" style={{ color: 'inherit' }}>
              <Github size={24} cursor="pointer" className="nav-link" />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-lima-5838b9307/" style={{ color: 'inherit' }}>
              <Linkedin size={24} cursor="pointer" className="nav-link" />
            </a>
            <a href="mailto:gabriellimadeveloper@gmail.com" style={{ color: 'inherit' }}>
              <Mail size={24} cursor="pointer" className="nav-link" />
            </a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #1f2937', paddingTop: '30px', textAlign: 'center', color: '#4b5563', fontSize: '0.85rem' }}>
          <p>© 2026 Gabriel Lima da Silva. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App