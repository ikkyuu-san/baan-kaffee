import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const menu = [
  { name: 'Coconut Cloud', type: 'Signature coffee', desc: 'Coconut cream, espresso, toasted palm sugar', price: '฿145', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85' },
  { name: 'Khao Soi Toast', type: 'All-day plate', desc: 'Curry butter, soft egg, crispy shallot, sourdough', price: '฿185', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85' },
  { name: 'Mango Sticky Rice', type: 'Something sweet', desc: 'Nam dok mai mango, coconut cream, black sesame', price: '฿165', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85' },
  { name: 'Midnight Mocha', type: 'Slow sipper', desc: 'Dark chocolate, espresso, sea salt, oat milk', price: '฿155', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=85' },
]

const gallery = [
  'https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1493857671505-72967e2e2760?auto=format&fit=crop&w=900&q=85',
]

function ArrowIcon() { return <span aria-hidden="true">↗</span> }

function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="navbar">
    <a className="brand" href="#top" aria-label="Baan Kaffee home"><span className="brand-mark">BK</span><span>baan<br /><i>kaffee</i></span></a>
    <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}><span></span><span></span></button>
    <nav className={open ? 'nav-links open' : 'nav-links'}>
      <a href="#menu" onClick={() => setOpen(false)}>Menu</a><a href="#story" onClick={() => setOpen(false)}>Our story</a><a href="#space" onClick={() => setOpen(false)}>The space</a><a href="#contact" onClick={() => setOpen(false)}>Visit</a>
    </nav>
    <a className="nav-cta" href="#contact">Find us <ArrowIcon /></a>
  </header>
}

function Hero() { return <section className="hero" id="top">
  <div className="hero-copy reveal"><p className="eyebrow"><span className="dot"></span> Sathorn, Bangkok · Est. 2021</p><h1>Slow coffee.<br /><em>Fast city.</em></h1><p className="hero-intro">A neighbourhood coffee bar & Thai kitchen for the in-between moments.</p><a className="button button-light" href="#menu">Explore the menu <ArrowIcon /></a></div>
  <div className="hero-art reveal"><div className="hero-stamp">BKK<br /><small>13° 43' N</small></div><div className="hero-image"><img src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=1400&q=90" alt="Latte on a wooden table at Baan Kaffee" /></div><p className="image-caption">No. 04 — morning light<br /><span>บ้านกาแฟ</span></p></div>
  <div className="scroll-cue">Scroll to wander <span>↓</span></div>
</section> }

function MenuCard({ item, index }) { return <article className="menu-card reveal" style={{ '--delay': `${index * 80}ms` }}><div className="menu-image"><img src={item.image} alt={item.name} /><span className="card-number">0{index + 1}</span></div><div className="menu-card-body"><div><p className="card-type">{item.type}</p><h3>{item.name}</h3></div><span className="price">{item.price}</span><p className="card-desc">{item.desc}</p></div></article> }

function MenuSection() { return <section className="section menu-section" id="menu"><div className="section-heading reveal"><div><p className="eyebrow"><span className="line"></span> From the counter</p><h2>Made slowly.<br /><em>Enjoyed fully.</em></h2></div><p className="section-note">Our menu follows the seasons and the mood of the room. Come curious.</p></div><div className="menu-grid">{menu.map((item, index) => <MenuCard item={item} index={index} key={item.name} />)}</div><a className="text-link" href="#contact">See the full menu <ArrowIcon /></a></section> }

function StorySection() { return <section className="story section" id="story"><div className="story-image reveal"><img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85" alt="Warm interior of a coffee bar" /><span className="image-tag">A little<br />corner of<br /><em>calm.</em></span></div><div className="story-copy reveal"><p className="eyebrow"><span className="line"></span> Our story</p><h2>A softer way<br />to <em>start</em> the day.</h2><p>Somewhere between the first train and the last email, there is Baan Kaffee. A sun-warmed shophouse where we roast with intention, cook with memory, and make room for long conversations.</p><p>Our coffee is Thai at heart — bright, generous, and a little unexpected.</p><a className="text-link" href="#contact">More about us <ArrowIcon /></a></div></section> }

function SpaceSection() { return <section className="space section" id="space"><div className="section-heading reveal"><div><p className="eyebrow"><span className="line"></span> The space</p><h2>Come as you are.<br /><em>Stay a while.</em></h2></div><p className="section-note">Golden hour looks good from every seat.</p></div><div className="gallery-grid">{gallery.map((image, i) => <div className={`gallery-item gallery-${i + 1} reveal`} key={image}><img src={image} alt={`Baan Kaffee atmosphere ${i + 1}`} /></div>)}</div></section> }

function ContactSection() { return <section className="contact section" id="contact"><div className="contact-top reveal"><p className="eyebrow"><span className="dot"></span> Make a little detour</p><h2>See you<br /><em>around?</em></h2><a className="button button-accent" href="mailto:hello@baankaffee.com">Say hello <ArrowIcon /></a></div><div className="contact-details"><div><p className="detail-label">Find us</p><p>18 Soi Suan Phlu 3<br />Sathorn, Bangkok 10120</p><a className="text-link" href="https://maps.google.com/?q=Sathorn+Bangkok" target="_blank" rel="noreferrer">Open in maps <ArrowIcon /></a></div><div><p className="detail-label">Opening hours</p><p>Mon — Fri · 07:30 — 18:00<br />Sat — Sun · 08:00 — 19:00</p><p className="status"><span className="dot"></span> Open today until 18:00</p></div><div><p className="detail-label">Follow along</p><p><a href="#contact">Instagram</a><br /><a href="mailto:hello@baankaffee.com">hello@baankaffee.com</a></p></div></div></section> }

function Footer() { return <footer><a className="brand" href="#top"><span className="brand-mark">BK</span><span>baan<br /><i>kaffee</i></span></a><p>© 2024 Baan Kaffee. Made with care in Bangkok.</p><a className="back-top" href="#top">Back to top ↑</a></footer> }

function App() { useEffect(() => { const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible') }), { threshold: 0.12 }); document.querySelectorAll('.reveal').forEach(el => observer.observe(el)); return () => observer.disconnect() }, []); return <><Navbar /><main><Hero /><MenuSection /><StorySection /><SpaceSection /><ContactSection /></main><Footer /></> }

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
