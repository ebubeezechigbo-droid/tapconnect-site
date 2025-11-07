import { useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SITE = {
  brand: "TapConnect",
  tagline: "Your business card. Reinvented.",
  subtext: "Share your contact, socials, and website with one tap — powered by smart NFC cards.",
  contactEmail: "hello@tapconnect.demo",
  contactPhone: "+1 (281) 555‑0199",
  location: "Houston, TX",
  heroImage: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2000&auto=format&fit=crop",
  demoProfiles: [
    { name: "CrystalGlow", url: "/demo/crystalglow" },
    { name: "John Doe Photography", url: "/demo/johndoe" },
    { name: "Houston Fit Coach", url: "/demo/fitcoach" },
  ],
  products: [
    { title: "Matte Black", img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1400&auto=format&fit=crop" },
    { title: "Frosted Clear", img: "https://images.unsplash.com/photo-1496024840928-4c417adf211d?q=80&w=1400&auto=format&fit=crop" },
    { title: "Gold Foil", img: "https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=1400&auto=format&fit=crop" },
  ],
  features: [
    "One‑tap contact sharing (NFC + QR)",
    "Customizable profile page",
    "Social links + website integration",
    "Instant ‘Save Contact’ (.vcf)",
    "Works on iPhone & Android",
    "Eco‑friendly (no paper)",
  ],
  how: [
    { title: "Tap", text: "Your card has a tiny NFC chip. Hold it near any phone.", img: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1200&auto=format&fit=crop" },
    { title: "Connect", text: "The phone opens your profile instantly — no app needed.", img: "https://images.unsplash.com/photo-1555626906-4a13bb13c7b6?q=80&w=1200&auto=format&fit=crop" },
    { title: "Grow", text: "They save your contact or follow your socials in one tap.", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop" },
  ],
  pricing: [
    { plan: "Basic", price: 45, period: "one‑time", bullets: ["1 custom NFC card", "Hosted profile page", "QR fallback"], cta: "Get Basic", popular: false },
    { plan: "Pro", price: 75, period: "one‑time", bullets: ["Premium NFC card", "Hosted profile + custom domain", "Priority support"], cta: "Get Pro", popular: true },
    { plan: "Team", price: 250, period: "bundle", bullets: ["5 NFC cards", "Team landing + profiles", "Bulk setup"], cta: "Get Team", popular: false },
  ],
  testimonials: [
    { name: "Brittany", quote: "I made new clients the first week. Everyone remembers the tap!" },
    { name: "Omar", quote: "No more paper cards. Looks premium and works instantly." },
    { name: "Jade", quote: "Setup took minutes. The landing page is clean and professional." },
  ],
};

const Section = (props) => <section className="max-w-6xl mx-auto px-4 py-16" {...props} />;
const Card = ({ children, className = "" }) => (
  <div className={`rounded-3xl border border-white/10 bg-white/[0.03] ${className}`}>{children}</div>
);

export default function App() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [order, setOrder] = useState({ name: "", business: "", email: "", phone: "", instagram: "", tiktok: "", website: "", color: "Matte Black", plan: "Pro", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.6], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.85]);

  const fadeUp = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
  const fadeIn = { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.5 } } };

  function submitOrder(e) { e.preventDefault(); console.log("TapConnect order:", order); setSubmitted(true); }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-black/60">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#home" className="tracking-widest font-semibold">{SITE.brand}</a>
          <nav className="hidden md:flex gap-8 text-sm text-white/80">
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#demos" className="hover:text-white">Demos</a>
            <a href="#order" className="hover:text-white">Order</a>
          </nav>
          <a href="#order" className="hidden md:inline-flex rounded-xl bg-white text-black px-4 py-2 font-medium">Get yours</a>
        </div>
      </header>

      <section id="home" className="relative">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative">
          <img src={SITE.heroImage} alt="NFC tap hero" className="w-full h-[62vh] object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        </motion.div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-6xl mx-auto px-4 pb-12">
            <motion.h1 variants={fadeUp} initial="initial" animate="animate" className="text-4xl md:text-6xl font-semibold">{SITE.tagline}</motion.h1>
            <motion.p variants={fadeUp} initial="initial" animate="animate" className="text-white/80 text-lg mt-3 max-w-2xl">{SITE.subtext}</motion.p>
            <motion.div variants={fadeUp} initial="initial" animate="animate" className="flex gap-3 mt-6">
              <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} href="#order" className="rounded-xl bg-white text-black px-5 py-3 font-medium">Get your card</motion.a>
              <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} href="#demos" className="rounded-xl border border-white/20 px-5 py-3">See demo</motion.a>
            </motion.div>
            <motion.p variants={fadeIn} initial="initial" animate="animate" className="text-white/50 text-sm mt-6">Based in {SITE.location}</motion.p>
          </div>
        </div>
      </section>

      <Section id="how">
        <motion.h2 variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-3xl font-semibold">How it works</motion.h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            { title: "Tap", text: "Your card has a tiny NFC chip. Hold it near any phone.", img: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1200&auto=format&fit=crop" },
            { title: "Connect", text: "The phone opens your profile instantly — no app needed.", img: "https://images.unsplash.com/photo-1555626906-4a13bb13c7b6?q=80&w=1200&auto=format&fit=crop" },
            { title: "Grow", text: "They save your contact or follow your socials in one tap.", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop" },
          ].map((s, i) => (
            <motion.div key={s.title} variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.35 }} transition={{ delay: i * 0.05 }}>
              <Card className="overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-40 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-medium">{s.title}</h3>
                  <p className="text-white/70 mt-2">{s.text}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="features">
        <motion.h2 variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-3xl font-semibold">Why TapConnect</motion.h2>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {SITE.features.map((f, i) => (
            <motion.div key={f} variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.25 }} transition={{ delay: i * 0.03 }}>
              <Card className="p-6 flex items-start gap-4">
                <img src="https://images.unsplash.com/photo-1614306172084-88a8b1a54f56?q=80&w=300&auto=format&fit=crop" alt="feature icon" className="w-12 h-12 rounded-xl object-cover" />
                <p className="text-white/80">{f}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="cards">
        <motion.h2 variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-3xl font-semibold">Card styles</motion.h2>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {SITE.products.map((p, i) => (
            <motion.div key={p.title} variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ y: -4 }} className="group relative rounded-3xl overflow-hidden border border-white/10">
              <img src={p.img} alt={p.title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <div className="text-lg font-medium">{p.title}</div>
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} href="#order" className="rounded-xl bg-white text-black px-3 py-2 text-sm font-medium">Customize</motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="pricing">
        <motion.h2 variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-3xl font-semibold">Pricing</motion.h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {SITE.pricing.map((t, i) => (
            <motion.div key={t.plan} variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Card className={`p-6 ${t.popular ? "ring-1 ring-white/30" : ""} hover:bg-white/[0.06] transition-colors`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold">{t.plan}</h3>
                  {t.popular && <span className="text-xs px-2 py-1 rounded-full bg-white/10">Most popular</span>}
                </div>
                <div className="mt-3 text-4xl font-semibold">${t.price}<span className="text-base text-white/60">/{t.period}</span></div>
                <ul className="mt-4 space-y-2 text-white/80">
                  {t.bullets.map((b) => (<li key={b}>• {b}</li>))}
                </ul>
                <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="#order" className="mt-6 inline-flex rounded-xl bg-white text-black px-4 py-2 font-medium">{t.cta}</motion.a>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="demos">
        <motion.h2 variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-3xl font-semibold">Live demos</motion.h2>
        <p className="text-white/70 mt-2">See what your profile looks like when someone taps your card.</p>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {SITE.demoProfiles.map((d, i) => (
            <motion.div key={d.url} variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Card className="overflow-hidden">
                <img src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=1200&auto=format&fit=crop" alt="Demo preview" className="w-full h-40 object-cover" />
                <div className="p-6">
                  <div className="text-lg font-medium">{d.name}</div>
                  <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href={d.url} className="inline-block mt-3 rounded-xl border border-white/20 px-4 py-2 hover:border-white/40">Open demo</motion.a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="order">
        <motion.h2 variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-3xl font-semibold">Customize & order</motion.h2>
        <p className="text-white/70 mt-2">Tell us your details — we’ll build your landing page and link your card.</p>
        <motion.form variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} onSubmit={submitOrder} className="grid md:grid-cols-2 gap-4 mt-8">
          {[
            { name: "name", label: "Your name", type: "text", ph: "Jane Doe" },
            { name: "business", label: "Business name", type: "text", ph: "CrystalGlow" },
            { name: "email", label: "Email", type: "email", ph: "you@domain.com" },
            { name: "phone", label: "Phone", type: "tel", ph: "+1 281‑000‑0000" },
            { name: "instagram", label: "Instagram", type: "text", ph: "@handle" },
            { name: "tiktok", label: "TikTok", type: "text", ph: "@handle" },
            { name: "website", label: "Website", type: "url", ph: "https://..." },
          ].map((f) => (
            <label key={f.name} className="block">
              <span className="text-sm text-white/80">{f.label}</span>
              <input
                required={f.name == "name" || f.name == "email"}
                type={f.type}
                placeholder={f.ph}
                value={order[f.name]}
                onChange={(e) => setOrder((o) => ({ ...o, [f.name]: e.target.value }))}
                className="mt-1 w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 outline-none focus:border-white/40"
              />
            </label>
          ))}

          <label className="block">
            <span className="text-sm text-white/80">Card color</span>
            <select value={order.color} onChange={(e) => setOrder((o) => ({ ...o, color: e.target.value }))} className="mt-1 w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 outline-none focus:border-white/40">
              {SITE.products.map((p) => (<option key={p.title} value={p.title}>{p.title}</option>))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm text-white/80">Plan</span>
            <select value={order.plan} onChange={(e) => setOrder((o) => ({ ...o, plan: e.target.value }))} className="mt-1 w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 outline-none focus:border-white/40">
              {SITE.pricing.map((p) => (<option key={p.plan} value={p.plan}>{p.plan}</option>))}
            </select>
          </label>

          <label className="md:col-span-2 block">
            <span className="text-sm text-white/80">Notes (optional)</span>
            <textarea rows={4} placeholder="Logos, brand colors, special requests..." value={order.notes} onChange={(e) => setOrder((o) => ({ ...o, notes: e.target.value }))} className="mt-1 w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 outline-none focus:border-white/40" />
          </label>

          <div className="md:col-span-2 flex gap-3">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} type="submit" className="rounded-xl bg-white text-black px-5 py-3 font-medium">Submit order</motion.button>
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href={`mailto:${SITE.contactEmail}`} className="rounded-xl border border-white/20 px-5 py-3">Email us</motion.a>
          </div>

          {submitted && (
            <div className="md:col-span-2 mt-4 text-sm text-white/80">
              ✅ Thanks! We received your details. We’ll reach out at <span className="font-medium">{order.email}</span> soon.
            </div>
          )}
        </motion.form>
      </Section>

      <Section id="testimonials">
        <motion.h2 variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-3xl font-semibold">What customers say</motion.h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {SITE.testimonials.map((t) => (
            <motion.figure key={t.name} variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="rounded-3xl border border-white/10 p-6 bg-white/5">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop" alt="happy client" className="w-full h-40 object-cover rounded-2xl mb-4" />
              <blockquote className="text-lg">“{t.quote}”</blockquote>
              <figcaption className="text-white/60 mt-3">— {t.name}</figcaption>
            </motion.figure>
          ))}
        </div>
      </Section>

      <Section id="about">
        <h2 className="text-3xl font-semibold">About {SITE.brand}</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="p-6 md:col-span-2">
            <p className="text-white/80 leading-relaxed">
              {SITE.brand} helps small businesses make unforgettable first impressions.
              With NFC‑powered cards and beautiful profile pages, your details are always one tap away.
              No apps, no paper — just instant connections.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-sm text-white/80">
              <div><span className="text-white/60">Email:</span> <a className="hover:text-white" href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a></div>
              <div className="mt-1"><span className="text-white/60">Phone:</span> {SITE.contactPhone}</div>
              <div className="mt-1"><span className="text-white/60">Location:</span> {SITE.location}</div>
            </div>
          </Card>
        </div>
      </Section>

      <Section id="contact">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold">Questions? Let’s talk.</h2>
          <p className="text-white/70 mt-2">We’ll help you choose the right card and setup.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={`mailto:${SITE.contactEmail}`} className="rounded-xl bg-white text-black px-5 py-3 font-medium">Email us</a>
            <a href="#order" className="rounded-xl border border-white/20 px-5 py-3">Customize & order</a>
          </div>
        </Card>
      </Section>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        <div>{SITE.brand} • {SITE.location}</div>
        <div className="mt-1">© {year} {SITE.brand}. All rights reserved.</div>
      </footer>
    </main>
  );
}
