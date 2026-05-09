"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BadgeDollarSign,
  Car,
  CheckCircle2,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Music2,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/381641409093?text=Hi%2C%20I%27m%20interested%20in%20purchasing%20livehavana.com";

const navItems = [
  { label: "Domain", href: "#about" },
  { label: "Why", href: "#why" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const brandUses = [
  "Havana travel concierge or tourism marketplace",
  "Live music, nightlife, and cultural events platform",
  "Cuba relocation, diaspora, or lifestyle media brand",
  "Premium content hub for classic cars, food, beaches, and architecture",
];

const whyPoints = [
  {
    title: "Instantly brandable",
    copy: "Two evocative words create a vivid promise: experience Havana in motion, culture, rhythm, and color.",
  },
  {
    title: "Memorable .com authority",
    copy: "Short, clear, and easy to say aloud, LiveHavana.com is built for radio, social, referrals, and direct navigation.",
  },
  {
    title: "Market-relevant positioning",
    copy: "Havana sits at the intersection of tourism, music, heritage, diaspora audiences, and lifestyle storytelling.",
  },
  {
    title: "Flexible premium use cases",
    copy: "The domain can support booking, media, events, memberships, relocation services, or a high-end lifestyle label.",
  },
];

const galleryItems = [
  {
    title: "Golden-hour Malecon",
    tag: "Skyline",
    image: "https://images.unsplash.com/photo-1500759285222-a95626b934cb?auto=format&fit=crop&w=1000&q=80",
    span: "md:row-span-2",
  },
  {
    title: "Classic car culture",
    tag: "Mobility",
    image: "https://images.unsplash.com/photo-1511527844068-006b95d162c2?auto=format&fit=crop&w=1000&q=80",
    span: "",
  },
  {
    title: "Colonial color",
    tag: "Architecture",
    image: "https://images.unsplash.com/photo-1518086384746-7f5d0f3b1a50?auto=format&fit=crop&w=1000&q=80",
    span: "",
  },
  {
    title: "Live Latin nights",
    tag: "Music",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=80",
    span: "md:row-span-2",
  },
  {
    title: "Caribbean escape",
    tag: "Beaches",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    span: "",
  },
  {
    title: "Cultural pulse",
    tag: "Lifestyle",
    image: "https://images.unsplash.com/photo-1520423465871-0866049020b7?auto=format&fit=crop&w=1000&q=80",
    span: "",
  },
];

const comparableSignals = [
  {
    label: "Geo-lifestyle names",
    value: "Location + experience",
    copy: "Names that pair a destination with an aspirational verb or lifestyle cue are easy to package for travel and media buyers.",
  },
  {
    label: "Culture and events",
    value: "Music + nightlife",
    copy: "LiveHavana.com speaks directly to live events, entertainment discovery, and culturally rich editorial concepts.",
  },
  {
    label: "Premium .com scarcity",
    value: "Clear global extension",
    copy: "The .com extension keeps the asset credible for international buyers, diaspora audiences, and direct outreach.",
  },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.65, delay, ease: "easeOut" as const },
  };
}

function FloatingElements() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {[0, 1, 2, 3, 4].map((item) => (
        <motion.span
          key={item}
          animate={{
            opacity: [0.15, 0.5, 0.15],
            scale: [1, 1.18, 1],
            y: [0, -28, 0],
          }}
          className="absolute h-2 w-2 rounded-full bg-[var(--gold)] shadow-[0_0_24px_rgba(255,200,87,0.75)]"
          style={{
            left: `${12 + item * 18}%`,
            top: `${22 + (item % 3) * 18}%`,
          }}
          transition={{
            duration: 4.5 + item,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item * 0.3,
          }}
        />
      ))}
      <div className="absolute -left-24 top-36 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
    </div>
  );
}

function InquiryModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-4 py-8 backdrop-blur-md"
          initial={{ opacity: 0 }}
          role="dialog"
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-scrollbar relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-white/15 bg-[#071326]/95 p-6 shadow-2xl sm:p-8"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25 }}
          >
            <button
              aria-label="Close price inquiry modal"
              className="absolute right-5 top-5 rounded-full border border-white/15 bg-white/10 p-2 text-white transition hover:bg-white/20"
              onClick={onClose}
              type="button"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="mb-6 inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-200">
              Buy Now / Price Inquiry
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Request private acquisition terms for LiveHavana.com
            </h2>
            <p className="mt-4 text-base leading-8 text-white/72">
              Submit a qualified inquiry or open WhatsApp to discuss the domain asset. This sale concerns the
              domain name only; no business operations, customer lists, trademarks, or services are included.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {["Secure escrow friendly", "Fast transfer path", "Professional negotiation"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm text-white/75">
                  <ShieldCheck className="mb-3 h-5 w-5 text-emerald-300" />
                  {item}
                </div>
              ))}
            </div>
            <form className="mt-8 grid gap-4">
              <input
                className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white outline-none transition placeholder:text-white/38 focus:border-cyan-300/60"
                placeholder="Your name"
                type="text"
              />
              <input
                className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white outline-none transition placeholder:text-white/38 focus:border-cyan-300/60"
                placeholder="Email address"
                type="email"
              />
              <textarea
                className="min-h-32 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white outline-none transition placeholder:text-white/38 focus:border-cyan-300/60"
                placeholder="Tell us about your intended use and budget range"
              />
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#18d5d1] to-[#ffc857] px-6 py-4 text-sm font-bold text-[#071326] shadow-lg shadow-cyan-500/20 transition hover:scale-[1.01]"
                  href={`mailto:domains@unrulo.es?subject=LiveHavana.com%20purchase%20inquiry&body=Hi%2C%20I%27m%20interested%20in%20purchasing%20LiveHavana.com.`}
                >
                  Send email inquiry <Mail className="h-4 w-4" />
                </a>
                <a
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 text-sm font-bold text-white transition hover:border-emerald-300/70 hover:bg-emerald-300/10"
                  href={WHATSAPP_URL}
                  rel="noreferrer"
                  target="_blank"
                >
                  WhatsApp seller <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function DomainLanding() {
  const [modalOpen, setModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 900], [0, 180]);
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <InquiryModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-[#050816]/65 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a className="group flex items-center gap-3" href="#top" aria-label="LiveHavana.com home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-cyan-300 via-emerald-300 to-amber-300 text-[#071326] shadow-lg shadow-cyan-500/20">
              <Sparkles className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-black uppercase tracking-[0.26em] text-white">LiveHavana</span>
              <span className="block text-xs text-white/50">Premium domain asset</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a key={item.href} className="text-sm font-medium text-white/68 transition hover:text-white" href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <button
            className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#071326] transition hover:bg-amber-200 sm:px-5"
            onClick={() => setModalOpen(true)}
            type="button"
          >
            Buy Now
          </button>
        </nav>
      </header>

      <section id="top" className="relative min-h-screen overflow-hidden bg-[#050816] pt-28">
        <motion.div className="hero-backdrop absolute inset-0 scale-110" style={{ y: heroY }} />
        <FloatingElements />
        <div className="tropical-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200/30 bg-[#ff6b4a]/15 px-4 py-2 text-sm font-bold text-orange-100 shadow-lg shadow-orange-500/10">
                <BadgeDollarSign className="h-4 w-4" />
                This Domain is For Sale
              </div>
              <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100">
                Domain only - not an operating business
              </p>
              <h1 className="text-balance text-5xl font-black tracking-[-0.08em] text-white sm:text-7xl lg:text-8xl">
                LiveHavana<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-amber-200 to-orange-300">.com</span>
              </h1>
              <p className="mt-6 max-w-2xl text-2xl font-semibold text-amber-100 sm:text-3xl">
                Own the Essence of Havana Living
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-9 text-white/72">
                A premium .com domain for a vibrant Havana concept: live music, classic cars, colonial color,
                travel energy, diaspora connection, and Caribbean lifestyle storytelling.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#18d5d1] via-[#18b879] to-[#ffc857] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#071326] shadow-2xl shadow-cyan-500/25 transition hover:scale-[1.02]"
                  href="#contact"
                >
                  Inquire Now
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/18 bg-white/10 px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white backdrop-blur transition hover:border-amber-200/70 hover:bg-amber-200/10"
                  href="#comparables"
                >
                  View Comparable Sales
                </a>
              </div>
            </motion.div>

            <motion.aside
              className="glass-panel premium-ring rounded-[2.2rem] p-5 sm:p-7"
              initial={{ opacity: 0, x: 34 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="rounded-[1.8rem] border border-white/10 bg-[#050816]/72 p-5">
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-white/42">Asset status</p>
                    <p className="mt-2 text-2xl font-black text-white">Available for acquisition</p>
                  </div>
                  <span className="rounded-full bg-emerald-300/15 px-4 py-2 text-sm font-bold text-emerald-200">
                    .COM
                  </span>
                </div>
                <div className="mt-7 grid gap-3">
                  {[
                    ["Domain", "LiveHavana.com"],
                    ["Use", "Tourism, culture, music, lifestyle"],
                    ["Transfer", "Escrow and registrar transfer friendly"],
                    ["Included", "Domain name only"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-start justify-between gap-5 rounded-2xl bg-white/[0.06] p-4">
                      <span className="text-sm text-white/45">{label}</span>
                      <span className="max-w-[13rem] text-right text-sm font-semibold text-white">{value}</span>
                    </div>
                  ))}
                </div>
                <button
                  className="mt-6 w-full rounded-full bg-[#ff6b4a] px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white shadow-xl shadow-orange-500/20 transition hover:bg-[#ff7d61]"
                  onClick={() => setModalOpen(true)}
                  type="button"
                >
                  Open price inquiry
                </button>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp()} className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-200">About the domain</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              A name built for a city that already feels like a brand.
            </h2>
            <p className="mt-6 text-lg leading-9 text-white/68">
              LiveHavana.com packages the sensory promise of La Habana into a clean, premium digital asset. It can
              anchor a tourism product, live events calendar, lifestyle publication, music platform, relocation guide,
              or Cuba-focused community with immediate emotional recognition.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {brandUses.map((item, index) => (
              <motion.div
                key={item}
                {...fadeUp(index * 0.06)}
                className="group rounded-3xl border border-white/10 bg-white/[0.055] p-6 transition hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-white/[0.08]"
              >
                <CheckCircle2 className="mb-5 h-7 w-7 text-emerald-300" />
                <p className="text-lg font-semibold text-white">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <motion.div {...fadeUp()}>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-200">Why LiveHavana</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Brandable, emotional, and commercially flexible.
              </h2>
              <p className="mt-6 text-lg leading-9 text-white/68">
                The best premium domains do more than describe a category. They create a point of view. LiveHavana.com
                suggests rhythm, presence, discovery, and lifestyle from the first impression.
              </p>
            </motion.div>
            <div className="grid gap-5 sm:grid-cols-2">
              {whyPoints.map((point, index) => (
                <motion.article
                  key={point.title}
                  {...fadeUp(index * 0.07)}
                  className="rounded-[2rem] border border-white/10 bg-[#071326]/70 p-6 shadow-xl shadow-black/10 transition hover:border-amber-200/35"
                >
                  <div className="mb-7 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-orange-300/20 text-amber-200">
                    {index === 0 ? <Sparkles /> : index === 1 ? <Globe2 /> : index === 2 ? <MapPin /> : <Music2 />}
                  </div>
                  <h3 className="text-xl font-bold text-white">{point.title}</h3>
                  <p className="mt-3 leading-7 text-white/62">{point.copy}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp()} className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-emerald-200">Visual gallery</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
                A placeholder moodboard for Havana energy.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-white/62">
              High-quality placeholder imagery demonstrates the premium direction: music, classic cars, beaches,
              architecture, and colorful city life.
            </p>
          </motion.div>
          <div className="mt-12 grid auto-rows-[18rem] gap-5 md:grid-cols-3">
            {galleryItems.map((item, index) => (
              <motion.article
                key={item.title}
                {...fadeUp(index * 0.05)}
                className={`gallery-card group relative overflow-hidden rounded-[2rem] border border-white/10 ${item.span}`}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/92 via-[#050816]/16 to-transparent transition group-hover:from-[#050816]/78" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="rounded-full bg-white/14 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white/78">
                    {item.tag}
                  </span>
                  <h3 className="mt-3 text-2xl font-black text-white">{item.title}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="comparables" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-white/[0.055] p-6 sm:p-10">
          <motion.div {...fadeUp()} className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-200">Comparable sales signals</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Review the value drivers behind the acquisition.
            </h2>
            <p className="mt-6 text-lg leading-9 text-white/68">
              Exact comparable transactions depend on private market data and buyer strategy. This section highlights
              the premium-name attributes a buyer would evaluate before requesting a curated sales packet.
            </p>
          </motion.div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {comparableSignals.map((signal, index) => (
              <motion.div
                key={signal.label}
                {...fadeUp(index * 0.08)}
                className="rounded-[2rem] border border-white/10 bg-[#050816]/72 p-6"
              >
                <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">{signal.label}</p>
                <p className="mt-4 text-2xl font-black text-white">{signal.value}</p>
                <p className="mt-4 leading-7 text-white/62">{signal.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div {...fadeUp()} className="rounded-[2rem] border border-orange-300/25 bg-orange-400/10 p-8">
            <ShieldCheck className="h-10 w-10 text-orange-200" />
            <h2 className="mt-5 text-3xl font-black text-white">Important disclaimer</h2>
            <p className="mt-5 leading-8 text-white/70">
              This website exists only to market the domain name LiveHavana.com for sale. It is not an operating
              travel agency, event organizer, relocation service, Cuban business, government resource, tourism service,
              or lifestyle publication. Any imagery and copy are illustrative placeholders for potential brand use.
            </p>
          </motion.div>
          <motion.div {...fadeUp(0.08)} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8">
            <Car className="h-10 w-10 text-cyan-200" />
            <h2 className="mt-5 text-3xl font-black text-white">What is included</h2>
            <p className="mt-5 leading-8 text-white/70">
              Acquisition discussions cover the domain asset only. The buyer should perform independent due diligence
              regarding intended use, trademarks, regulations, and local compliance. Professional escrow and registrar
              transfer workflows can be used for a trustworthy transaction.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-cyan-400/10 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div {...fadeUp()}>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-200">Contact</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Start a professional acquisition conversation.
            </h2>
            <p className="mt-6 text-lg leading-9 text-white/68">
              Use the form prompts, email, or WhatsApp to express interest. For related routing context, unrulo.es may
              redirect to or reference this LiveHavana.com domain sale page.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <a
                className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-400 px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#071326] transition hover:bg-emerald-300"
                href={WHATSAPP_URL}
                rel="noreferrer"
                target="_blank"
              >
                WhatsApp inquiry
                <MessageCircle className="h-4 w-4" />
              </a>
              <button
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-amber-200/60 hover:bg-amber-200/10"
                onClick={() => setModalOpen(true)}
                type="button"
              >
                Open Buy Now modal
                <BadgeDollarSign className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          <motion.form {...fadeUp(0.08)} className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white outline-none transition placeholder:text-white/38 focus:border-cyan-300/60"
                placeholder="Full name"
                type="text"
              />
              <input
                className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white outline-none transition placeholder:text-white/38 focus:border-cyan-300/60"
                placeholder="Company / buyer profile"
                type="text"
              />
              <input
                className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white outline-none transition placeholder:text-white/38 focus:border-cyan-300/60 sm:col-span-2"
                placeholder="Email address"
                type="email"
              />
              <select
                className="rounded-2xl border border-white/10 bg-[#162238] px-5 py-4 text-white outline-none transition focus:border-cyan-300/60 sm:col-span-2"
                defaultValue=""
              >
                <option value="" disabled>
                  Intended use
                </option>
                <option>Tourism / travel</option>
                <option>Music / events</option>
                <option>Lifestyle media</option>
                <option>Relocation / diaspora services</option>
                <option>Other premium brand concept</option>
              </select>
              <textarea
                className="min-h-36 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white outline-none transition placeholder:text-white/38 focus:border-cyan-300/60 sm:col-span-2"
                placeholder="Message, budget range, and timing"
              />
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#071326] transition hover:bg-amber-200"
                href="mailto:domains@unrulo.es?subject=LiveHavana.com%20domain%20inquiry&body=Hi%2C%20I%27m%20interested%20in%20purchasing%20LiveHavana.com."
              >
                Send inquiry
                <Mail className="h-4 w-4" />
              </a>
              <a
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:border-emerald-300/70 hover:bg-emerald-300/10"
                href={WHATSAPP_URL}
                rel="noreferrer"
                target="_blank"
              >
                WhatsApp
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </motion.form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/54 md:flex-row md:items-center md:justify-between">
          <p>© {year} LiveHavana.com domain sale presentation. Domain status: available for acquisition.</p>
          <p>Not an operating business. Domain asset only.</p>
        </div>
      </footer>
    </main>
  );
}
