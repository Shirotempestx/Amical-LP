import { useEffect, useState } from 'react'
import { CheckCircle, AlertCircle, ArrowRight, Shield, Star, Users, Phone, Mail, Globe, Cpu, Check, Layers, FileText } from 'lucide-react'

const contactEmail = 'yahya0elkhazraoui@gmail.com'

const content = {
  fr: {
    nav: {
      features: 'Fonctionnalités',
      howItWorks: 'Comment ça marche',
      forWhom: 'Pour qui',
      proof: 'Témoignage',
      contact: 'Contact',
      cta: 'Demander une démo'
    },
    hero: {
      badge: 'Logiciel Immobilier & Construction',
      title: 'Gérez vos chantiers et ventes en local.',
      titleEmphasis: 'Gardez le contrôle.',
      subtitle: 'MyAmical centralise la gestion des terrains, le suivi des travaux et les paiements des clients sur vos propres appareils sans dépendre du cloud.',
      cta: 'Demander une démo gratuite',
      secondary: 'Voir le fonctionnement',
      statProjects: 'Projets Actifs',
      statClients: 'Clients Satisfaits',
      statUnits: 'Unités Livrées'
    },
    problem: {
      label: 'Le Constat',
      title: 'Pourquoi les méthodes traditionnelles freinent votre croissance ?',
      sub: 'Gérer des chantiers et des ventes avec des outils éparpillés ralentit vos équipes et augmente les risques d\'erreurs.',
      items: [
        'Perte de temps à consolider des tableaux Excel pour les stocks de matériaux.',
        'Manque de visibilité en temps réel sur l\'avancement du gros œuvre et des finitions.',
        'Retards de facturation et difficultés à suivre les paiements et relances clients.',
        'Documents clients (CIN, contrats) dispersés et difficiles d\'accès en déplacement.'
      ],
      solutionTitle: 'La solution MyAmical',
      solutionDesc: 'Un système unique, rapide et fonctionnel hors-ligne qui rassemble tous vos besoins métiers.'
    },
    benefits: {
      label: 'Bénéfices clés',
      title: 'Conçu pour maximiser vos résultats',
      sub: 'Trois impacts immédiats sur votre quotidien opérationnel.',
      items: [
        {
          num: '01',
          title: 'Zéro perte de données & mode hors-ligne',
          desc: 'Installez l\'application sur vos serveurs locaux. Vos données restent à 100% chez vous, accessibles instantanément même sans connexion internet.'
        },
        {
          num: '02',
          title: 'Suivi de chantier ultra-précis',
          desc: 'Visualisez l\'état d\'avancement des travaux (gros œuvre, finitions) étape par étape pour réagir avant que les délais ne soient dépassés.'
        },
        {
          num: '03',
          title: 'Trésorerie et ventes sous contrôle',
          desc: 'Générez des factures professionnelles, éditez des reçus d\'encaissement en un clic et suivez les échéances de paiement de chaque client.'
        }
      ]
    },
    steps: {
      label: 'Simplicité',
      title: 'Comment ça marche ? En 3 étapes simples',
      sub: 'Une transition fluide pour vos équipes en moins de deux semaines.',
      items: [
        {
          title: '1. Cartographie et installation',
          desc: 'Nous configurons le système selon vos projets (terrains, unités, annexes) et l\'installons sur vos postes de travail.'
        },
        {
          title: '2. Saisie et suivi quotidien',
          desc: 'Vos équipes enregistrent les ventes, suivent les paiements et mettent à jour l\'état d\'avancement des travaux en direct.'
        },
        {
          title: '3. Analyse et export en un clic',
          desc: 'Générez instantanément des rapports financiers et des fiches d\'avancement au format PDF, Word ou Excel.'
        }
      ]
    },
    proof: {
      label: 'Preuve sociale',
      title: 'Déjà adopté par les leaders du secteur',
      sub: 'Découvrez comment nos partenaires transforment leur gestion quotidienne.',
      testimonial: '« Grâce à MyAmical, nous suivons nos chantiers et nos encaissements en temps réel sans aucune perte d\'information. L\'installation locale nous garantit une sécurité maximale pour nos données clients. »',
      author: 'Directeur Général',
      company: 'Société Les Cinq Éléments',
      stats: [
        { value: '12+', label: 'Projets gérés' },
        { value: '450+', label: 'Clients satisfaits' },
        { value: '890+', label: 'Unités immobilières livrées' }
      ]
    },
    forWhom: {
      label: 'Cible',
      title: 'Une solution adaptée à votre profil',
      sub: 'Que vous soyez promoteur ou constructeur, MyAmical répond à vos contraintes.',
      items: [
        {
          emoji: '🏢',
          title: 'Promoteurs Immobiliers',
          desc: 'Pilotez la commercialisation de vos projets, de la réservation d\'unités à la signature du contrat final.'
        },
        {
          emoji: '🏗️',
          title: 'Entreprises de Construction',
          desc: 'Suivez les chantiers étape par étape, gérez les sous-traitants et contrôlez les dépenses de matériaux.'
        },
        {
          emoji: '💼',
          title: 'Directeurs Financiers',
          desc: 'Suivez les flux de trésorerie, automatisez la facturation et contrôlez les écarts budgétaires.'
        }
      ]
    },
    contact: {
      label: 'Contact & Démo',
      title: 'Prêt à moderniser vos opérations ?',
      sub: 'Remplissez le formulaire ci-dessous pour planifier une démonstration personnalisée ou une installation locale.',
      name: 'Nom complet',
      email: 'Adresse email',
      phone: 'Téléphone',
      message: 'Votre message (projets, nombre de postes...)',
      submit: 'Envoyer ma demande',
      success: 'Merci ! Votre demande a été enregistrée avec succès. Notre équipe vous recontactera sous 24 heures.',
      teamTitle: 'À propos de l\'équipe',
      teamDesc: 'Développé par Amical Dev Team. Nous accompagnons les promoteurs immobiliers dans leur transformation numérique avec des solutions sécurisées et hors-ligne.'
    }
  },
  en: {
    nav: {
      features: 'Features',
      howItWorks: 'How it works',
      forWhom: 'For Whom',
      proof: 'Testimonial',
      contact: 'Contact',
      cta: 'Request Demo'
    },
    hero: {
      badge: 'Real Estate & Construction Software',
      title: 'Run your operations and sales locally.',
      titleEmphasis: 'Keep full control.',
      subtitle: 'MyAmical centralizes property tracking, construction milestones, and client billing on your own devices without relying on the cloud.',
      cta: 'Request Free Demo',
      secondary: 'How it works',
      statProjects: 'Active Projects',
      statClients: 'Happy Clients',
      statUnits: 'Delivered Units'
    },
    problem: {
      label: 'The Problem',
      title: 'Why traditional tools slow down your growth',
      sub: 'Managing construction sites and sales with fragmented tools slows down your team and increases human error.',
      items: [
        'Wasted time consolidating Excel sheets for materials and stock.',
        'Lack of real-time visibility on structural work and finishing progress.',
        'Delayed billing and struggle to track customer payments and follow-ups.',
        'Client files (IDs, contracts) scattered across multiple places and inaccessible.'
      ],
      solutionTitle: 'The MyAmical Solution',
      solutionDesc: 'A single, high-performance, offline-ready software tailored to real estate promoters.'
    },
    benefits: {
      label: 'Key Benefits',
      title: 'Built to maximize your results',
      sub: 'Three immediate impacts on your daily operations.',
      items: [
        {
          num: '01',
          title: 'Zero Data Leaks & Offline Mode',
          desc: 'Deploy the application on your local servers. Your data stays 100% yours, accessible instantly even without internet.'
        },
        {
          num: '02',
          title: 'Precise Site Milestones',
          desc: 'Monitor structural and finishing progress stage by stage so you can resolve bottlenecks before deadlines slip.'
        },
        {
          num: '03',
          title: 'Cashflow & Vows Protected',
          desc: 'Generate professional invoices, issue receipts in one click, and easily track payment schedules per client.'
        }
      ]
    },
    steps: {
      label: 'Simplicity',
      title: 'How it works in 3 easy steps',
      sub: 'A smooth transition for your team in under two weeks.',
      items: [
        {
          title: '1. Map & Install',
          desc: 'We structure the app based on your projects (plots, units, annexes) and deploy it to your local network.'
        },
        {
          title: '2. Log Daily Updates',
          desc: 'Your team records sales, tracks client payments, and updates site construction milestones in real time.'
        },
        {
          title: '3. Instant Reports',
          desc: 'Export financial dashboards, customer statements, and progress reports in PDF, Word, or Excel.'
        }
      ]
    },
    proof: {
      label: 'Social Proof',
      title: 'Trusted by industry professionals',
      sub: 'See how our partners are transforming their daily operations.',
      testimonial: '"Thanks to MyAmical, we track our construction sites and client collections in real time with zero data loss. The local server installation guarantees absolute security for our customer data."',
      author: 'Managing Director',
      company: 'Société Les Cinq Éléments',
      stats: [
        { value: '12+', label: 'Managed Projects' },
        { value: '450+', label: 'Happy Clients' },
        { value: '890+', label: 'Delivered Units' }
      ]
    },
    forWhom: {
      label: 'Target Audience',
      title: 'Tailored for your business model',
      sub: 'Whether you are a developer or a builder, MyAmical fits your constraints.',
      items: [
        {
          emoji: '🏢',
          title: 'Real Estate Developers',
          desc: 'Coordinate the commercialization of your projects, from unit reservation to the final contract signature.'
        },
        {
          emoji: '🏗️',
          title: 'General Contractors',
          desc: 'Track construction progress, coordinate builders/workers, and manage material procurement.'
        },
        {
          emoji: '💼',
          title: 'Financial Officers',
          desc: 'Monitor cash flow, automate invoicing, print client payment receipts, and stay on budget.'
        }
      ]
    },
    contact: {
      label: 'Contact & Demo',
      title: 'Ready to upgrade your workflow?',
      sub: 'Fill out the form below to schedule a personalized walkthrough or local server installation.',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      message: 'Your Message (projects, team size...)',
      submit: 'Submit Request',
      success: 'Thank you! Your request has been recorded. Our team will contact you within 24 hours.',
      teamTitle: 'About the Team',
      teamDesc: 'Developed by Amical Dev Team. We assist real estate developers in digital transformation with secure, offline-ready business software.'
    }
  }
} as const

type Lang = 'fr' | 'en'

export default function Landing() {
  const [lang, setLang] = useState<Lang>('fr')
  const [showModal, setShowModal] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const t = content[lang]

  useEffect(() => {
    document.title = lang === 'fr' ? 'MyAmical — Gestion Immobilière & Construction Locale' : 'MyAmical — Local Real Estate & Construction Management'
  }, [lang])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Prepare mailto payload to guarantee it "works well" as requested
    const subject = encodeURIComponent(`MyAmical Demo Request - ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    )
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
    setFormSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setFormSubmitted(false), 8000)
  }

  return (
    <div className="lp-wrapper">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container navbar-inner">
          <a href="#" className="nav-brand">
            <div className="nav-brand-mark">MA</div>
            <span>MyAmical</span>
          </a>
          <nav className="nav-links">
            <a href="#features" className="nav-link">{t.nav.features}</a>
            <a href="#how-it-works" className="nav-link">{t.nav.howItWorks}</a>
            <a href="#for-whom" className="nav-link">{t.nav.forWhom}</a>
            <a href="#proof" className="nav-link">{t.nav.proof}</a>
            <a href="#contact" className="nav-link">{t.nav.contact}</a>
          </nav>
          <div className="nav-actions">
            <div className="lang-toggle">
              <button 
                className={`lang-btn ${lang === 'fr' ? 'active' : ''}`} 
                onClick={() => setLang('fr')}
              >
                FR
              </button>
              <button 
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`} 
                onClick={() => setLang('en')}
              >
                EN
              </button>
            </div>
            <button onClick={() => setShowModal(true)} className="btn btn-primary">
              {t.nav.cta}
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content anim-up">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              {t.hero.badge}
            </div>
            <h1 className="hero-title">
              {t.hero.title} <span className="gradient-text">{t.hero.titleEmphasis}</span>
            </h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
            <div className="hero-actions">
              <button onClick={() => setShowModal(true)} className="btn btn-primary btn-lg">
                {t.hero.cta}
              </button>
              <a href="#how-it-works" className="btn btn-outline btn-ghost-light">
                {t.hero.secondary}
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <div className="hero-stat-value">12+</div>
                <div className="hero-stat-label">{t.hero.statProjects}</div>
              </div>
              <div>
                <div className="hero-stat-value">450+</div>
                <div className="hero-stat-label">{t.hero.statClients}</div>
              </div>
              <div>
                <div className="hero-stat-value">890+</div>
                <div className="hero-stat-label">{t.hero.statUnits}</div>
              </div>
            </div>
          </div>
          <div className="hero-media anim-up anim-up-d1">
            <div className="hero-img-wrap">
              <div className="hero-img-bar">
                <span className="hero-img-dot" style={{ background: '#ff5f56' }}></span>
                <span className="hero-img-dot" style={{ background: '#ffbd2e' }}></span>
                <span className="hero-img-dot" style={{ background: '#27c93f' }}></span>
              </div>
              <img src="/hero-mockup.png" alt="MyAmical Dashboard Screenshot" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST TRUST BAR */}
      <section className="trust-section">
        <div className="container trust-inner">
          <div className="trust-item">
            <Shield className="trust-icon" />
            <span>100% On-Premise Installation</span>
          </div>
          <div className="trust-item">
            <Star className="trust-icon" />
            <span>Active Partner: Société Les Cinq Éléments</span>
          </div>
          <div className="trust-item">
            <Users className="trust-icon" />
            <span>Collaborative Multi-User Sync</span>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="section" id="features">
        <div className="container problem-grid">
          <div className="problem-text">
            <span className="section-label">{t.problem.label}</span>
            <h2 className="section-title">{t.problem.title}</h2>
            <p className="section-sub">{t.problem.sub}</p>
            <ul className="problem-list">
              {t.problem.items.map((item, idx) => (
                <li key={idx} className="problem-item">
                  <AlertCircle className="problem-icon" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="problem-visual">
            <div className="section-label" style={{ color: '#fff' }}>{t.problem.solutionTitle}</div>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '16px' }}>{t.problem.solutionDesc}</p>
            <div className="problem-visual-card">
              <Cpu className="problem-visual-card-icon" />
              <span>Offline-ready desktop software powered by Tauri & SQLite</span>
            </div>
            <div className="problem-visual-card">
              <Layers className="problem-visual-card-icon" />
              <span>Modular architecture (CRM, Stocks, Construction, Finance)</span>
            </div>
            <div className="problem-visual-card">
              <FileText className="problem-visual-card-icon" />
              <span>Instant exports of purchase orders, contracts and custom PDF receipts</span>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="section-label">{t.benefits.label}</span>
            <h2 className="section-title">{t.benefits.title}</h2>
            <p className="section-sub">{t.benefits.sub}</p>
          </div>
          <div className="benefits-grid">
            {t.benefits.items.map((item, idx) => (
              <div key={idx} className="benefit-card">
                <div className="benefit-icon-wrap">
                  <Check className="benefit-icon" />
                </div>
                <div className="benefit-number">{item.num}</div>
                <h3 className="benefit-title">{item.title}</h3>
                <p className="benefit-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="section" id="how-it-works">
        <div className="container">
          <div className="section-head">
            <span className="section-label">{t.steps.label}</span>
            <h2 className="section-title">{t.steps.title}</h2>
            <p className="section-sub">{t.steps.sub}</p>
          </div>
          <div className="steps-grid">
            {t.steps.items.map((item, idx) => (
              <div key={idx} className="step-card">
                <div className="step-number-wrap">
                  <span className="step-number">{idx + 1}</span>
                </div>
                <h3 className="step-title">{item.title}</h3>
                <p className="step-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF / TESTIMONIAL SECTION */}
      <section className="section section-dark" id="proof">
        <div className="container proof-grid">
          <div>
            <span className="section-label">{t.proof.label}</span>
            <h2 className="section-title" style={{ color: '#fff' }}>{t.proof.title}</h2>
            <p className="section-sub" style={{ color: '#94a3b8', marginBottom: '32px' }}>{t.proof.sub}</p>
            <div className="stats-row">
              {t.proof.stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">{t.proof.testimonial}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">C5</div>
                <div>
                  <div className="testimonial-name">{t.proof.company}</div>
                  <div className="testimonial-role">{t.proof.author}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="proof-visual">
            <div className="proof-app-preview">
              <img src="/hero-mockup.png" alt="MyAmical dashboard interface screenshot" />
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHOM SECTION */}
      <section className="section" id="for-whom">
        <div className="container">
          <div className="section-head">
            <span className="section-label">{t.forWhom.label}</span>
            <h2 className="section-title">{t.forWhom.title}</h2>
            <p className="section-sub">{t.forWhom.sub}</p>
          </div>
          <div className="for-whom-grid">
            {t.forWhom.items.map((item, idx) => (
              <div key={idx} className="for-whom-card">
                <span className="for-whom-emoji">{item.emoji}</span>
                <h3 className="for-whom-title">{item.title}</h3>
                <p className="for-whom-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPEATED CALL TO ACTION STRIP */}
      <section className="cta-strip">
        <div className="container cta-strip-inner">
          <h2 className="cta-strip-title">{lang === 'fr' ? 'Gagnez du temps dès aujourd\'hui' : 'Start saving hours today'}</h2>
          <p className="cta-strip-sub">{lang === 'fr' ? 'Rejoignez les promoteurs qui ont choisi la sécurité des données.' : 'Join developers choosing local speed and data protection.'}</p>
          <div className="cta-strip-actions">
            <button onClick={() => setShowModal(true)} className="btn btn-primary btn-lg">
              {t.hero.cta}
            </button>
            <a href="#contact" className="btn btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>
              {lang === 'fr' ? 'Nous contacter' : 'Contact us'}
            </a>
          </div>
        </div>
      </section>

      {/* INLINE CONTACT FORM SECTION */}
      <section className="section section-alt" id="contact">
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="section-label">{t.contact.label}</span>
            <h2 className="section-title">{t.contact.title}</h2>
            <p className="section-sub">{t.contact.sub}</p>

            <div className="contact-detail">
              <Mail className="contact-detail-icon" />
              <span>Email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a></span>
            </div>
            
            <div className="contact-detail" style={{ marginTop: '16px' }}>
              <Globe className="contact-detail-icon" />
              <span>{t.contact.teamTitle}: {t.contact.teamDesc}</span>
            </div>
          </div>
          <div className="contact-form-card">
            <form onSubmit={handleFormSubmit}>
              <div className="form-fields">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">{t.contact.name} *</label>
                  <input required className="form-input" type="text" id="contact-name" name="name" value={formData.name} onChange={handleInputChange} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">{t.contact.email} *</label>
                    <input required className="form-input" type="email" id="contact-email" name="email" value={formData.email} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-phone">{t.contact.phone}</label>
                    <input className="form-input" type="tel" id="contact-phone" name="phone" value={formData.phone} onChange={handleInputChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">{t.contact.message} *</label>
                  <textarea required className="form-textarea" id="contact-message" name="message" value={formData.message} onChange={handleInputChange}></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                {t.contact.submit}
                <ArrowRight style={{ width: '16px', height: '16px' }} />
              </button>
              {formSubmitted && (
                <div className="form-success">
                  <CheckCircle style={{ width: '20px', height: '20px', flexShrink: 0 }} />
                  <span>{t.contact.success}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <div className="footer-brand-logo">
                <div className="footer-brand-mark">MA</div>
                <span>MyAmical</span>
              </div>
              <p className="footer-desc">
                {lang === 'fr' 
                  ? 'Logiciel sur site pour les promoteurs immobiliers et entrepreneurs de chantiers en Afrique du Nord.'
                  : 'On-premise business platform for real estate developers and general contractors.'}
              </p>
            </div>
            <div>
              <h4 className="footer-col-title">{lang === 'fr' ? 'Navigation' : 'Explore'}</h4>
              <div className="footer-links">
                <a href="#features" className="footer-link">{t.nav.features}</a>
                <a href="#how-it-works" className="footer-link">{t.nav.howItWorks}</a>
                <a href="#for-whom" className="footer-link">{t.nav.forWhom}</a>
                <a href="#proof" className="footer-link">{t.nav.proof}</a>
              </div>
            </div>
            <div>
              <h4 className="footer-col-title">{t.contact.label}</h4>
              <div className="footer-links">
                <span className="footer-link">Email: {contactEmail}</span>
                <span className="footer-link">Tel: +212 600 000000</span>
                <span className="footer-link">{lang === 'fr' ? 'Soutenance de Projet OFPPT - PIE' : 'OFPPT - PIE Defense Project'}</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div>© {new Date().getFullYear()} MyAmical. All rights reserved.</div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* POPUP MODAL (CTA SHORT FORM) */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">{t.nav.cta}</h3>
              <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            </div>
            <form onSubmit={handleFormSubmit} className="modal-form">
              <div className="form-group">
                <label className="form-label" htmlFor="modal-name">{t.contact.name} *</label>
                <input required className="form-input" type="text" id="modal-name" name="name" value={formData.name} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="modal-email">{t.contact.email} *</label>
                <input required className="form-input" type="email" id="modal-email" name="email" value={formData.email} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="modal-phone">{t.contact.phone}</label>
                <input className="form-input" type="tel" id="modal-phone" name="phone" value={formData.phone} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="modal-message">{t.contact.message} *</label>
                <textarea required className="form-textarea" id="modal-message" name="message" value={formData.message} onChange={handleInputChange}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                {t.contact.submit}
              </button>
              {formSubmitted && (
                <div className="form-success">
                  <CheckCircle style={{ width: '20px', height: '20px', flexShrink: 0 }} />
                  <span>{t.contact.success}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
