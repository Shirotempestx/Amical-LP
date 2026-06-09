import { useEffect, useState } from 'react'
import { CheckCircle2, ArrowRight, Mail } from 'lucide-react'

const copy = {
  en: {
    nav: { features: 'Features', how: 'How it Works', pricing: 'Plans', contact: 'Contact' },
    hero: {
      title: 'Your real estate operations, fully under your control.',
      subtitle: 'Install ImmoTrack ERP on your devices. Manage units, clients, and finances with zero dependency.',
      cta: 'Request local setup',
      badge: 'Local-first SaaS'
    },
    problem: {
      title: 'Stop losing control to cloud vendors.',
      items: [
        'Vendor lock-in costs you flexibility and money',
        'Internet cuts mean operations stop—unacceptable on site',
        'Compliance, privacy, security: you need full control'
      ]
    },
    benefits: {
      title: '3 Reasons to go local',
      items: [
        { title: 'Stay offline, stay productive', desc: 'Work fully offline on your devices. Sync when online.' },
        { title: 'Own your data', desc: 'No vendor access. Your database stays on your servers.' },
        { title: 'Deploy in 7-14 days', desc: 'We install, train, go-live. No long IT projects.' }
      ]
    },
    how: {
      title: 'Setup in 3 simple steps',
      steps: [
        { num: '1', title: 'Audit your needs', desc: 'We review your projects, users, and workflows.' },
        { num: '2', title: 'Deploy locally', desc: 'We install the server, apps, and integrate your data.' },
        { num: '3', title: 'Team goes live', desc: 'Training done. Your team operates day one.' }
      ]
    },
    social: {
      title: 'Trusted by real estate teams',
      stat: '50+ teams already running ImmoTrack ERP locally',
      testimonial: '"We moved from SaaS to local in 2 weeks. Offline mode alone saved us delays on every site."',
      author: '— Karim D., PMO, Casablanca'
    },
    pricing: {
      title: 'Simple pricing, no surprises',
      note: 'All plans include local setup, training, and 12-month support.',
      plans: [
        { name: 'Starter', price: '$29', desc: '/month, up to 5 users' },
        { name: 'Pro', price: '$99', desc: '/month, up to 20 users' },
        { name: 'Enterprise', price: 'Custom', desc: 'Multi-site, integrations' }
      ]
    },
    form: {
      title: 'Send us your project details',
      subtitle: 'We will reply within 24 hours with the setup plan.',
      fields: {
        name: 'Full name *',
        company: 'Company *',
        email: 'Email *',
        devices: 'Number of devices',
        notes: 'Tell us about your setup'
      },
      submit: 'Send request',
      required: '* Required'
    },
    footer: {
      tagline: 'Local-first real estate and construction platform.',
      social: 'Follow us',
      contact: 'Contact'
    }
  },
  fr: {
    nav: { features: 'Fonctionnalités', how: 'Processus', pricing: 'Tarifs', contact: 'Contact' },
    hero: {
      title: 'Vos opérations immobilières, sous votre contrôle total.',
      subtitle: 'Installez ImmoTrack ERP sur vos appareils. Gérez biens, clients et finances sans dépendre de personne.',
      cta: 'Demander installation locale',
      badge: 'SaaS local-first'
    },
    problem: {
      title: 'Arrêtez de dépendre des fournisseurs cloud.',
      items: [
        'Enfermement propriétaire = moins de flexibilité, plus de coûts',
        'Un serveur down = vos chantiers arrêtés (inacceptable)',
        'Conformité, donnees, sécurité : c\'est votre responsabilité'
      ]
    },
    benefits: {
      title: '3 raisons de passer au local',
      items: [
        { title: 'Travaillez hors ligne', desc: 'Opérationnel 100% hors-ligne. Synchro quand vous êtes connecté.' },
        { title: 'Vos données vous appartiennent', desc: 'Aucun accès fournisseur. Base de donnees sur vos serveurs.' },
        { title: 'Déploiement en 7-14 jours', desc: 'Installation, formation, mise en prod. Pas de projet IT long.' }
      ]
    },
    how: {
      title: 'Installation en 3 étapes simples',
      steps: [
        { num: '1', title: 'Audit de vos besoins', desc: 'Nous examinons vos projets, utilisateurs et workflows.' },
        { num: '2', title: 'Déploiement local', desc: 'Installation serveur, apps, migration de vos données.' },
        { num: '3', title: 'Équipe opérationnelle', desc: 'Formation complète. Production le jour 1.' }
      ]
    },
    social: {
      title: 'Approuvé par les équipes immobilières',
      stat: '50+ équipes opèrent déjà ImmoTrack ERP en local',
      testimonial: '"Migration du SaaS au local en 2 semaines. Le mode offline nous fait gagner du temps sur chaque site."',
      author: '— Karim D., PMO, Casablanca'
    },
    pricing: {
      title: 'Tarification simple, pas de surprise',
      note: 'Tous les plans incluent installation, formation et support 12 mois.',
      plans: [
        { name: 'Starter', price: '$29', desc: '/mois, jusqu\'à 5 utilisateurs' },
        { name: 'Pro', price: '$99', desc: '/mois, jusqu\'à 20 utilisateurs' },
        { name: 'Enterprise', price: 'Sur devis', desc: 'Multi-sites, intégrations' }
      ]
    },
    form: {
      title: 'Décrivez votre projet',
      subtitle: 'Nous répondons en 24 heures avec le plan d\'installation.',
      fields: {
        name: 'Nom complet *',
        company: 'Société *',
        email: 'Email *',
        devices: 'Nombre d\'appareils',
        notes: 'Parlez-nous de votre installation'
      },
      submit: 'Envoyer',
      required: '* Requis'
    },
    footer: {
      tagline: 'Plateforme immobilière et construction local-first.',
      social: 'Nous suivre',
      contact: 'Contact'
    }
  }
} as const

type Lang = keyof typeof copy

export default function LandingV2() {
  const [lang, setLang] = useState<Lang>('en')
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ name: '', company: '', email: '', devices: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)

  const t = copy[lang]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailto = `mailto:yahya0elkhazraoui@gmail.com?subject=${encodeURIComponent('ImmoTrack ERP Setup Request')}&body=${encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nDevices: ${formData.devices}\nNotes: ${formData.notes}`
    )}`
    window.location.href = mailto
    setSubmitted(true)
    setTimeout(() => setShowForm(false), 2000)
  }

  return (
    <div className="lp2-root">
      {/* Navbar */}
      <header className="lp2-navbar">
        <div className="lp2-container">
          <div className="lp2-brand">MA</div>
          <nav className="lp2-nav">
            <a href="#features" className="lp2-nav-link">{t.nav.features}</a>
            <a href="#how" className="lp2-nav-link">{t.nav.how}</a>
            <a href="#pricing" className="lp2-nav-link">{t.nav.pricing}</a>
            <button onClick={() => setShowForm(true)} className="lp2-btn-primary">{t.cta}</button>
          </nav>
          <div className="lp2-lang">
            <button className={`lp2-lang-btn ${lang === 'en' ? 'is-active' : ''}`} onClick={() => setLang('en')}>EN</button>
            <button className={`lp2-lang-btn ${lang === 'fr' ? 'is-active' : ''}`} onClick={() => setLang('fr')}>FR</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="lp2-hero">
        <div className="lp2-container">
          <span className="lp2-badge">{t.hero.badge}</span>
          <h1>{t.hero.title}</h1>
          <p className="lp2-lead">{t.hero.subtitle}</p>
          <button onClick={() => setShowForm(true)} className="lp2-btn-primary lp2-btn-lg">
            {t.hero.cta} <ArrowRight className="lp2-btn-icon" />
          </button>
        </div>
      </section>

      {/* Problem */}
      <section className="lp2-section lp2-problem">
        <div className="lp2-container">
          <h2>{t.problem.title}</h2>
          <ul className="lp2-problem-list">
            {t.problem.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section id="features" className="lp2-section lp2-benefits">
        <div className="lp2-container">
          <h2>{t.benefits.title}</h2>
          <div className="lp2-grid">
            {t.benefits.items.map((benefit, i) => (
              <div key={i} className="lp2-benefit-card">
                <CheckCircle2 className="lp2-benefit-icon" />
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="lp2-section lp2-how">
        <div className="lp2-container">
          <h2>{t.how.title}</h2>
          <div className="lp2-steps">
            {t.how.steps.map((step, i) => (
              <div key={i} className="lp2-step">
                <div className="lp2-step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="lp2-section lp2-social">
        <div className="lp2-container lp2-social-inner">
          <h2>{t.social.title}</h2>
          <p className="lp2-social-stat">{t.social.stat}</p>
          <blockquote className="lp2-testimonial">
            <p>{t.social.testimonial}</p>
            <footer>{t.social.author}</footer>
          </blockquote>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="lp2-section lp2-pricing">
        <div className="lp2-container">
          <h2>{t.pricing.title}</h2>
          <p className="lp2-pricing-note">{t.pricing.note}</p>
          <div className="lp2-pricing-grid">
            {t.pricing.plans.map((plan, i) => (
              <div key={i} className="lp2-pricing-card">
                <h3>{plan.name}</h3>
                <div className="lp2-price">{plan.price}</div>
                <p>{plan.desc}</p>
                <button onClick={() => setShowForm(true)} className="lp2-btn-outline">
                  {t.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="lp2-section lp2-cta-section">
        <div className="lp2-container">
          <h2>Ready to control your operations?</h2>
          <p>Local deployment. Team trained. Day one.</p>
          <button onClick={() => setShowForm(true)} className="lp2-btn-primary lp2-btn-lg">
            {t.hero.cta} <ArrowRight className="lp2-btn-icon" />
          </button>
        </div>
      </section>

      {/* Form Modal */}
      {showForm && (
        <div className="lp2-modal-backdrop" onClick={() => !submitted && setShowForm(false)}>
          <div className="lp2-modal" onClick={(e) => e.stopPropagation()}>
            <button className="lp2-modal-close" onClick={() => setShowForm(false)}>×</button>
            <h2>{t.form.title}</h2>
            <p>{t.form.subtitle}</p>
            
            {submitted ? (
              <div className="lp2-success">
                <CheckCircle2 className="lp2-success-icon" />
                <p>Setup request sent! Check your email client.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="lp2-form">
                <label>
                  {t.form.fields.name}
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </label>
                <label>
                  {t.form.fields.company}
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </label>
                <label>
                  {t.form.fields.email}
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </label>
                <label>
                  {t.form.fields.devices}
                  <input
                    type="number"
                    value={formData.devices}
                    onChange={(e) => setFormData({ ...formData, devices: e.target.value })}
                  />
                </label>
                <label>
                  {t.form.fields.notes}
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={4}
                  />
                </label>
                <p className="lp2-form-note">{t.form.required}</p>
                <button type="submit" className="lp2-btn-primary" style={{ width: '100%' }}>
                  {t.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// Custom CheckCircle2 to prevent compilation errors
function CheckCircle2(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
