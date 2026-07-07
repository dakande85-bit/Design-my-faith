import { ArrowRight, Church, FileImage, Globe2, HandHeart, PackageCheck, Palette, ShieldCheck, Sparkles, Truck, UploadCloud } from 'lucide-react';

const products = ['T-shirts', 'Hoodies', 'Sweatshirts', 'Tote bags', 'Mugs', 'Posters', 'Journals'];
const audiences = ['Churches', 'Missionaries', 'Charities', 'Ministries', 'Youth groups', 'Christian events'];

const steps = [
  ['Choose a product', 'Start with church-ready blanks for outreach, youth groups, conferences, worship teams and fundraising campaigns.'],
  ['Add your message', 'Upload a logo, add scripture, choose colours and preview the design before submitting.'],
  ['Artwork review', 'We manually check print quality, background removal, vector readiness and production risk.'],
  ['Production & delivery', 'Orders are handled manually first so the platform can launch before supplier automation.']
];

const admin = [
  ['Artwork review', 'Approve uploads, flag low-resolution artwork and prepare production notes.'],
  ['Orders', 'Track submitted, paid, approved, production, shipped and completed orders.'],
  ['Campaigns', 'Support mission trips, outreach projects, worship nights and charity fundraising.'],
  ['Organisations', 'Approve churches, charities, ministries and missionary accounts before selling.']
];

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Design My Faith home">
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
          <span className="eyebrow"><Sparkles size={16} /> Christian print studio · manual fulfilment</span>
          <h1>Custom Christian merch for churches, missions & ministries.</h1>
          <p>
            Design online, submit your order, and we handle the artwork review, production and delivery — so you can focus on your people and your calling.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#designer">Open MVP preview <ArrowRight size={18} /></a>
            <a className="secondary-button" href="#how">See how it works</a>
          </div>
          <div className="trust-strip">
            <span><ShieldCheck size={18} /> Hands-on artwork review</span>
            <span><Truck size={18} /> Delivery ready</span>
            <span><HandHeart size={18} /> Built for mission</span>
          </div>
        </div>

        <div className="hero-panel" aria-label="Product design preview">
          <div className="mockup-toolbar"><span /><span /><span /><strong>Product customiser</strong></div>
          <div className="mockup-stage">
            <div className="shirt-preview"><span className="neck" /><span className="print-box">PSALM 34</span></div>
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
          {steps.map(([title, text], index) => (
            <article className="step-card" key={title}>
              <span className="step-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="products" className="section-block split-section">
        <div>
          <span className="eyebrow"><Church size={16} /> Built for Christian organisations</span>
          <h2>Launch with core product categories before supplier automation.</h2>
          <p>
            The platform starts with practical products churches and ministries already use: outreach tees, worship-night hoodies, charity tote bags, mugs, posters and journals.
          </p>
          <div className="audience-list">{audiences.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product}>
              <span className="product-icon">✦</span>
              <h3>{product}</h3>
              <p>Upload artwork, add scripture, preview, submit and receive artwork approval.</p>
            </article>
          ))}
        </div>
      </section>

      <section id="designer" className="section-block designer-section">
        <div className="section-heading">
          <span className="eyebrow">Designer MVP</span>
          <h2>The first version is practical, not a full Canva clone.</h2>
          <p>Start with the essential controls. Add advanced background removal, vectorisation and supplier fulfilment after orders prove demand.</p>
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
            <div className="canvas-card"><div className="canvas-shirt">RADIANT<br /><span>34</span></div></div>
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
          <span className="eyebrow"><Globe2 size={16} /> Fulfilment dashboard</span>
          <h2>Admin-first operations for manual production control.</h2>
        </div>
        <div className="admin-grid">
          {admin.map(([title, text]) => <article className="admin-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section id="start" className="final-cta">
        <span className="eyebrow">Vercel target</span>
        <h2>This root app is now aligned to the existing design-my-faith Vercel project.</h2>
        <p>The repository root now builds directly with Vite, so the existing Vercel project does not need a subfolder workaround.</p>
      </section>
    </main>
  );
}

export default App;
