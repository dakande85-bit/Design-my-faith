import {
  ArrowRight,
  BadgeCheck,
  Church,
  FileImage,
  HandHeart,
  PackageCheck,
  Palette,
  ShieldCheck,
  Sparkles,
  UploadCloud
} from 'lucide-react';

const products = ['T-shirts', 'Hoodies', 'Sweatshirts', 'Tote bags', 'Mugs', 'Posters', 'Journals'];

const steps = [
  {
    title: 'Choose a product',
    text: 'Start with church-ready blanks for outreach, youth groups, conferences, worship teams, and fundraising campaigns.'
  },
  {
    title: 'Add your message',
    text: 'Upload a logo, add scripture, choose colours, and build a simple product mockup before submitting.'
  },
  {
    title: 'Artwork review',
    text: 'Every order is checked manually for print quality, background removal, vector readiness, and production risk.'
  },
  {
    title: 'Manual fulfilment',
    text: 'Orders are handled by the Design My Faith team first. Gelato and automated fulfilment come later.'
  }
];

const audience = [
  'Churches',
  'Missionaries',
  'Charities',
  'Ministries',
  'Youth groups',
  'Christian events'
];

const adminCards = [
  ['Artwork review', 'Approve uploads, flag low-resolution artwork, and prepare production notes.'],
  ['Orders', 'Track draft, submitted, paid, artwork approved, in production, shipped, and completed orders.'],
  ['Campaigns', 'Build mission-trip, outreach, worship-night, and charity support merch campaigns.'],
  ['Organisations', 'Approve churches, ministries, missionaries, and charity accounts before they sell.']
];

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Mission Merch Studio home">
          <span className="brand-mark">DMF</span>
          <span>
            <strong>Design My Faith</strong>
            <small>Mission Merch Studio</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#how">How it works</a>
          <a href="#products">Products</a>
          <a href="#designer">Designer</a>
          <a href="#admin">Admin</a>
        </nav>
        <a className="nav-cta" href="#start">Start designing</a>
      </header>

      <section id="top" className="hero section-grid">
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles size={16} /> Custom Christian merch for mission</span>
          <h1>Design online. We check the artwork. We produce and deliver.</h1>
          <p>
            Mission Merch Studio helps churches, missionaries, charities, ministries, and Christian events create faith-based merchandise without needing a full design team or automated fulfilment stack.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#designer">Open MVP preview <ArrowRight size={18} /></a>
            <a className="secondary-button" href="#admin">View fulfilment flow</a>
          </div>
          <div className="trust-strip" aria-label="MVP commitments">
            <span><ShieldCheck size={18} /> Manual review first</span>
            <span><BadgeCheck size={18} /> Supabase-ready</span>
            <span><HandHeart size={18} /> Built for missions</span>
          </div>
        </div>

        <div className="hero-panel" aria-label="Product design preview">
          <div className="mockup-toolbar">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <strong>Product customiser</strong>
          </div>
          <div className="mockup-stage">
            <div className="shirt-preview">
              <span className="neck" />
              <span className="print-box">PSALM 34</span>
            </div>
            <div className="control-stack">
              <div><Palette size={18} /> Product: Heavyweight T-shirt</div>
              <div><UploadCloud size={18} /> Artwork: church-logo.svg</div>
              <div><FileImage size={18} /> Background removal: queued</div>
              <div><PackageCheck size={18} /> Fulfilment: manual review</div>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="section-block">
        <div className="section-heading">
          <span className="eyebrow">MVP workflow</span>
          <h2>Simple enough to launch now. Structured enough to scale later.</h2>
        </div>
        <div className="step-grid">
          {steps.map((step, index) => (
            <article className="step-card" key={step.title}>
              <span className="step-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="products" className="section-block split-section">
        <div>
          <span className="eyebrow"><Church size={16} /> Built for Christian organisations</span>
          <h2>Launch with core product categories before supplier automation.</h2>
          <p>
            The platform starts with practical products churches and ministries already use: outreach tees, worship-night hoodies, charity tote bags, mugs, posters, and journals.
          </p>
          <div className="audience-list">
            {audience.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product}>
              <span className="product-icon">✦</span>
              <h3>{product}</h3>
              <p>Upload artwork, add scripture, preview, submit, then receive artwork approval.</p>
            </article>
          ))}
        </div>
      </section>

      <section id="designer" className="section-block designer-section">
        <div className="section-heading">
          <span className="eyebrow">Designer MVP</span>
          <h2>The first version is practical, not a full Canva clone.</h2>
          <p>Start with the essential controls. Add advanced background removal, vectorisation, and supplier fulfilment after orders prove demand.</p>
        </div>
        <div className="designer-shell">
          <aside className="designer-sidebar">
            <strong>Controls</strong>
            <label>Product <select><option>Heavyweight T-shirt</option><option>Hoodie</option><option>Tote bag</option></select></label>
            <label>Colour <select><option>Warm cream</option><option>Black</option><option>White</option></select></label>
            <label>Scripture / text <input defaultValue="Those who look to Him are radiant" /></label>
            <button>Upload artwork</button>
            <button>Remove background</button>
            <button>Vectorise placeholder</button>
          </aside>
          <div className="designer-preview">
            <div className="canvas-card">
              <div className="canvas-shirt">RADIANT<br /><span>34</span></div>
            </div>
            <div className="quality-checklist">
              <strong>Print quality checklist</strong>
              <span>✓ Minimum artwork size checked</span>
              <span>✓ Transparent background requested</span>
              <span>✓ Manual review required before production</span>
            </div>
          </div>
        </div>
      </section>

      <section id="admin" className="section-block">
        <div className="section-heading">
          <span className="eyebrow">Fulfilment dashboard</span>
          <h2>Admin-first operations for manual production control.</h2>
        </div>
        <div className="admin-grid">
          {adminCards.map(([title, text]) => (
            <article className="admin-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="start" className="final-cta">
        <span className="eyebrow">Ready for Vercel</span>
        <h2>The repo now contains a deployable React/Vite MVP shell.</h2>
        <p>Next step: connect the GitHub repository to Vercel. The included Vercel config builds the Mission Merch Studio app from the correct subfolder.</p>
        <a className="primary-button" href="https://vercel.com/new" target="_blank" rel="noreferrer">Create Vercel project <ArrowRight size={18} /></a>
      </section>
    </main>
  );
}

export default App;
