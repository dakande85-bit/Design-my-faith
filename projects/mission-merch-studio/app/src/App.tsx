import {
  ArrowRight,
  Check,
  ClipboardCheck,
  HeartHandshake,
  LayoutDashboard,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Upload,
} from 'lucide-react'
import { Link, NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { campaigns, orders, products, useCases, type FulfilmentStatus } from './data/sampleData'

const publicLinks = [
  ['How it works', '/how-it-works'],
  ['Churches', '/churches'],
  ['Missionaries', '/missionaries'],
  ['Charities', '/charities'],
  ['Products', '/products'],
  ['Campaigns', '/campaigns'],
  ['Pricing', '/pricing'],
  ['Contact', '/contact'],
]

const dashboardLinks = [
  ['Overview', '/dashboard'],
  ['Organisation', '/dashboard/organisation'],
  ['Designs', '/dashboard/designs'],
  ['Orders', '/dashboard/orders'],
  ['Campaigns', '/dashboard/campaigns'],
]

const adminLinks = [
  ['Overview', '/admin'],
  ['Orders', '/admin/orders'],
  ['Artwork review', '/admin/artwork-review'],
  ['Products', '/admin/products'],
  ['Campaigns', '/admin/campaigns'],
  ['Organisations', '/admin/organisations'],
]

function PublicHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-gold">
            <Sparkles size={20} />
          </span>
          <span>
            <span className="block text-base font-semibold text-ink">Mission Merch Studio</span>
            <span className="hidden text-xs uppercase tracking-wide text-muted sm:block">Manual fulfilment first</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-muted lg:flex">
          {publicLinks.map(([label, href]) => (
            <NavLink key={href} to={href} className={({ isActive }) => (isActive ? 'text-ink' : 'hover:text-ink')}>
              {label}
            </NavLink>
          ))}
        </nav>
        <Link className="btn-primary hidden sm:inline-flex" to="/start-designing">
          Start designing
        </Link>
      </div>
    </header>
  )
}

function PublicFooter() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-ink">Mission Merch Studio</p>
          <p className="mt-3 max-w-md text-sm text-muted">
            Custom Christian merch for churches, missions, charities, and ministries. Designed online,
            reviewed by people, fulfilled with care.
          </p>
        </div>
        <div className="text-sm text-muted">
          <p className="font-semibold text-ink">Build status</p>
          <p className="mt-3">MVP uses sample data and placeholder checkout. Supabase and Stripe come later.</p>
        </div>
        <div className="text-sm text-muted">
          <p className="font-semibold text-ink">Next actions</p>
          <p className="mt-3">Submit artwork, approve proofs, track manual production, and ship orders.</p>
        </div>
      </div>
    </footer>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_50%_0%,rgba(184,139,74,0.20),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="eyebrow">Premium Christian merchandise platform</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight text-ink md:text-6xl">
            Custom merch for churches, missions, and ministries.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Choose products, upload artwork, preview the design, and submit an order for careful manual
            artwork review and fulfilment.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="btn-primary" to="/start-designing">
              Start designing <ArrowRight size={18} />
            </Link>
            <Link className="btn-secondary" to="/how-it-works">
              See how it works
            </Link>
          </div>
        </div>
        <MockupPreview />
      </div>
    </section>
  )
}

function UseCaseCards() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {useCases.map((item) => (
        <Link key={item.title} to={item.href} className="card group">
          <HeartHandshake className="text-gold" size={28} />
          <h3 className="mt-5 text-xl font-semibold text-ink">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted">{item.copy}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink">
            Explore use case <ArrowRight className="transition group-hover:translate-x-1" size={16} />
          </span>
        </Link>
      ))}
    </div>
  )
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <article className="card">
      <div className="flex h-44 items-end rounded-lg bg-gradient-to-br from-stone-100 to-stone-200 p-4">
        <div className="h-28 w-full rounded-lg border border-white/70 bg-white/75 shadow-soft" />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-gold">{product.category}</p>
          <h3 className="mt-2 text-xl font-semibold text-ink">{product.name}</h3>
        </div>
        <span className="rounded-full bg-gold/10 px-3 py-1 text-sm font-semibold text-ink">{product.price}</span>
      </div>
      <p className="mt-3 text-sm leading-6 text-muted">{product.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {product.colours.map((colour) => (
          <span key={colour} className="rounded-full border border-stone-200 px-3 py-1 text-xs text-muted">
            {colour}
          </span>
        ))}
      </div>
    </article>
  )
}

function CampaignCard({ campaign }: { campaign: (typeof campaigns)[number] }) {
  return (
    <article className="card">
      <p className="text-sm font-semibold text-gold">{campaign.organisation}</p>
      <h3 className="mt-3 text-2xl font-semibold text-ink">{campaign.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted">{campaign.description}</p>
      <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
        <span className="rounded-lg bg-cream p-3 font-semibold text-ink">{campaign.raised}</span>
        <span className="rounded-lg bg-cream p-3 text-muted">{campaign.goal}</span>
      </div>
    </article>
  )
}

function PricingCards() {
  const plans = [
    ['Starter order', 'Small ministry drops', 'Artwork review, product setup, manual order summary'],
    ['Campaign launch', 'Fundraising stores', 'Campaign page, product bundle, production coordination'],
    ['Ministry partner', 'Ongoing teams', 'Reusable products, order tracking, priority artwork review'],
  ]
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {plans.map(([name, audience, detail]) => (
        <article key={name} className="card">
          <p className="text-sm font-semibold text-gold">{audience}</p>
          <h3 className="mt-3 text-2xl font-semibold text-ink">{name}</h3>
          <p className="mt-3 text-sm leading-6 text-muted">{detail}</p>
          <p className="mt-6 text-sm font-semibold text-ink">Quote-based MVP pricing</p>
        </article>
      ))}
    </div>
  )
}

function OrderStatusBadge({ status }: { status: FulfilmentStatus }) {
  const warm = ['Awaiting Artwork Review', 'Needs Customer Changes', 'Awaiting Payment']
  const done = ['Artwork Approved', 'Ready to Ship', 'Shipped', 'Completed']
  const tone = warm.includes(status) ? 'bg-amber-100 text-amber-900' : done.includes(status) ? 'bg-emerald-100 text-emerald-900' : 'bg-stone-100 text-stone-800'
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tone}`}>{status}</span>
}

function MockupPreview() {
  return (
    <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-soft">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-ink">Live order preview</p>
        <OrderStatusBadge status="Awaiting Artwork Review" />
      </div>
      <div className="mt-5 grid min-h-80 place-items-center rounded-lg bg-ink p-8 text-center text-cream">
        <div className="rounded-lg border border-gold/40 p-8">
          <p className="text-sm uppercase tracking-wide text-gold">Grace City Youth</p>
          <p className="mt-4 text-3xl font-semibold">Sent With Hope</p>
          <p className="mt-3 text-sm text-cream/70">Premium tee · ivory print · 120 units</p>
        </div>
      </div>
      <PrintQualityChecklist />
    </div>
  )
}

function PrintQualityChecklist() {
  const checks = ['Artwork uploaded', 'Text is readable', 'Print area selected', 'Manual review required']
  return (
    <div className="mt-5 grid gap-2 text-sm text-muted sm:grid-cols-2">
      {checks.map((check) => (
        <span key={check} className="flex items-center gap-2">
          <Check size={16} className="text-gold" /> {check}
        </span>
      ))}
    </div>
  )
}

function UploadArtworkPanel() {
  return (
    <div className="rounded-lg border border-dashed border-gold/60 bg-gold/10 p-6 text-center">
      <Upload className="mx-auto text-gold" size={32} />
      <p className="mt-3 font-semibold text-ink">Upload artwork or church logo</p>
      <p className="mt-2 text-sm text-muted">PNG, SVG, or PDF placeholder. Files will connect to storage later.</p>
    </div>
  )
}

function OrderCard({ order }: { order: (typeof orders)[number] }) {
  return (
    <article className="card">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-muted">{order.id}</p>
          <h3 className="mt-1 text-xl font-semibold text-ink">{order.customer}</h3>
        </div>
        <OrderStatusBadge status={order.status} />
      </div>
      <p className="mt-4 text-sm text-muted">
        {order.quantity} x {order.product}
      </p>
      <p className="mt-3 text-sm leading-6 text-muted">{order.nextAction}</p>
    </article>
  )
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <Section eyebrow="Built for ministry workflows" title="A clean path from idea to delivered order.">
        <UseCaseCards />
      </Section>
      <Section eyebrow="Catalogue" title="Start with products people actually use.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </Section>
      <Section eyebrow="Fundraising" title="Campaign stores for causes, trips, and outreach.">
        <div className="grid gap-5 md:grid-cols-3">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.title} campaign={campaign} />
          ))}
        </div>
      </Section>
    </>
  )
}

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-ink">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  )
}

function SimplePublicPage({ kind }: { kind: string }) {
  const content: Record<string, [string, string, string[]]> = {
    '/how-it-works': ['How it works', 'Design online. We check the artwork. We produce and deliver.', ['Choose a product', 'Upload artwork and text', 'Submit for manual review', 'Track production and delivery']],
    '/churches': ['Church merch without the clutter', 'Create coordinated pieces for teams, events, groups, and Sunday rhythms.', ['Welcome team apparel', 'Youth group drops', 'Conference products']],
    '/missionaries': ['Support mission trips with campaign merch', 'Give supporters a practical way to fund travel, outreach, and team identity.', ['Trip apparel', 'Supporter gifts', 'Cause-led campaign pages']],
    '/charities': ['Fundraising products with careful fulfilment', 'Offer polished products connected to outreach, support work, and community projects.', ['Totes and mugs', 'Event products', 'Manual payout tracking later']],
    '/contact': ['Talk to the studio', 'Tell us about your church, mission, charity, or event and we will prepare the next step.', ['Project brief form placeholder', 'Artwork guidance', 'Quote-based order planning']],
    '/start-designing': ['Start designing', 'Choose a practical MVP flow and build your first order preview.', ['Select product', 'Upload artwork', 'Continue to checkout placeholder']],
  }
  const [title, subtitle, bullets] = content[kind] ?? content['/how-it-works']
  return (
    <Section eyebrow="Mission Merch Studio" title={title}>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-lg leading-8 text-muted">{subtitle}</p>
          <Link className="btn-primary mt-8" to="/designer">
            Open designer <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid gap-4">
          {bullets.map((bullet) => (
            <div key={bullet} className="card flex items-center gap-4">
              <ShieldCheck className="text-gold" />
              <span className="font-semibold text-ink">{bullet}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function ProductsPage() {
  return (
    <Section eyebrow="Product catalogue" title="Premium blanks ready for Christian organisations.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </Section>
  )
}

function CampaignsPage() {
  return (
    <Section eyebrow="Campaigns" title="Raise support through clear, cause-led merch drops.">
      <div className="grid gap-5 md:grid-cols-3">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.title} campaign={campaign} />
        ))}
      </div>
    </Section>
  )
}

function PricingPage() {
  return (
    <Section eyebrow="Pricing" title="Simple MVP pricing while fulfilment is manual.">
      <PricingCards />
    </Section>
  )
}

function DashboardSidebar() {
  return <Sidebar title="Customer" links={dashboardLinks} icon={<LayoutDashboard size={18} />} />
}

function AdminSidebar() {
  return <Sidebar title="Admin" links={adminLinks} icon={<ClipboardCheck size={18} />} />
}

function Sidebar({ title, links, icon }: { title: string; links: string[][]; icon: React.ReactNode }) {
  return (
    <aside className="rounded-lg border border-stone-200 bg-white p-4">
      <p className="mb-4 flex items-center gap-2 font-semibold text-ink">
        {icon} {title}
      </p>
      <nav className="grid gap-2 text-sm">
        {links.map(([label, href]) => (
          <NavLink key={href} to={href} className={({ isActive }) => `rounded-lg px-3 py-2 ${isActive ? 'bg-ink text-white' : 'text-muted hover:bg-cream hover:text-ink'}`}>
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

function DashboardPage() {
  return (
    <AppShell sidebar={<DashboardSidebar />} title="Organisation dashboard">
      <div className="grid gap-5 lg:grid-cols-3">
        <Stat label="Active designs" value="6" />
        <Stat label="Open orders" value="3" />
        <Stat label="Campaign drafts" value="2" />
      </div>
      <div className="mt-6 grid gap-5">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </AppShell>
  )
}

function AdminPage() {
  return (
    <AppShell sidebar={<AdminSidebar />} title="Manual fulfilment board">
      <div className="grid gap-5">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </AppShell>
  )
}

function AppShell({ sidebar, title, children }: { sidebar: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <main className="mx-auto grid max-w-7xl gap-6 px-5 py-10 lg:grid-cols-[260px_1fr]">
      {sidebar}
      <section>
        <h1 className="text-4xl font-semibold text-ink">{title}</h1>
        <div className="mt-6">{children}</div>
      </section>
    </main>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="card">
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-ink">{value}</p>
    </div>
  )
}

function DesignerPage() {
  return (
    <Section eyebrow="Designer MVP" title="A practical product customiser, not a complex design clone.">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="grid gap-4">
          <select className="field"><option>Premium T-shirt</option><option>Midweight Hoodie</option><option>Canvas Tote</option></select>
          <select className="field"><option>Ivory</option><option>Navy</option><option>Charcoal</option></select>
          <input className="field" placeholder="Add text or scripture reference" />
          <UploadArtworkPanel />
          <div className="grid grid-cols-2 gap-3">
            <button className="btn-secondary" type="button">Remove background later</button>
            <button className="btn-secondary" type="button">Vectorise later</button>
          </div>
          <Link className="btn-primary" to="/checkout">Continue to checkout <ArrowRight size={18} /></Link>
        </div>
        <MockupPreview />
      </div>
    </Section>
  )
}

function CheckoutPage() {
  return (
    <Section eyebrow="Checkout placeholder" title="Review the order before payment is added later.">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <MockupPreview />
        <div className="card">
          <PackageCheck className="text-gold" size={32} />
          <h3 className="mt-4 text-2xl font-semibold text-ink">Order summary</h3>
          <p className="mt-3 text-muted">120 premium T-shirts, front print, manual artwork review required.</p>
          <p className="mt-6 rounded-lg bg-cream p-4 text-sm text-muted">Stripe is intentionally not implemented in this MVP. This button is a placeholder for a later checkout session.</p>
          <button className="btn-primary mt-6 w-full justify-center" type="button">Submit order placeholder</button>
        </div>
      </div>
    </Section>
  )
}

function PlaceholderPage({ admin = false }: { admin?: boolean }) {
  return admin ? <AdminPage /> : <DashboardPage />
}

function PublicLayout() {
  return (
    <>
      <PublicHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/campaigns" element={<CampaignsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/designer" element={<DesignerPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/dashboard/*" element={<PlaceholderPage />} />
        <Route path="/admin/*" element={<PlaceholderPage admin />} />
        {['/how-it-works', '/churches', '/missionaries', '/charities', '/contact', '/start-designing'].map((path) => (
          <Route key={path} path={path} element={<SimplePublicPage kind={path} />} />
        ))}
      </Routes>
      <PublicFooter />
    </>
  )
}

export default function App() {
  return (
    <Router>
      <PublicLayout />
    </Router>
  )
}
