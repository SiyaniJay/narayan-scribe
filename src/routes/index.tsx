import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Home,
  Building2,
  Hammer,
  Palmtree,
  ClipboardList,
  Calculator,
  ArrowRight,
  Quote,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const logoAsset = { url: "/images/logo.png" };
const heroAsset = { url: "/images/project-excavation.jpg" };
const yardAsset = { url: "/images/project-yard.jpg" };
const petrocity1 = { url: "/images/project-petrocity-1.png" };
const petrocity2 = { url: "/images/project-petrocity-2.png" };
const resortAsset = { url: "/images/project-resort.jpg" };

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Home,
    title: "Residential Construction",
    desc: "Custom homes and residential developments built for coastal living.",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    desc: "Offices, retail, and commercial buildings delivered on schedule.",
  },
  {
    icon: Hammer,
    title: "Renovations & Fit-Outs",
    desc: "Upgrades and refurbishments that modernise existing properties.",
  },
  {
    icon: Palmtree,
    title: "Resort & Hospitality",
    desc: "Renovation and construction for hotels, resorts, and villas.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    desc: "End-to-end oversight from planning through to handover.",
  },
  {
    icon: Calculator,
    title: "Quotations & Consulting",
    desc: "Detailed costing and technical consulting for contractors and clients.",
  },
];

const PROJECTS = [
  {
    img: resortAsset.url,
    title: "Coastal Resort Renovation",
    location: "Kenyan Coast",
    tag: "Hospitality",
  },
  {
    img: petrocity1.url,
    title: "Petrocity Fuel Station — Nyali",
    location: "Nyali, Mombasa",
    tag: "Commercial",
  },
  {
    img: petrocity2.url,
    title: "Petrocity Highway Station",
    location: "Mombasa – Nairobi Highway",
    tag: "Commercial",
  },
  {
    img: heroAsset.url,
    title: "Site Excavation & Earthworks",
    location: "Mombasa",
    tag: "Civil Works",
  },
  {
    img: yardAsset.url,
    title: "Materials & Logistics Yard",
    location: "Mombasa",
    tag: "Infrastructure",
  },
];

const PROCESS = [
  { n: "01", title: "Consultation", desc: "Understanding your vision, site, and requirements." },
  { n: "02", title: "Quotation & Planning", desc: "Transparent, detailed costing and scheduling." },
  { n: "03", title: "Construction", desc: "Quality execution with regular progress updates." },
  { n: "04", title: "Handover", desc: "On-time delivery and dependable after-project support." },
];

const TESTIMONIALS = [
  {
    quote:
      "Narayan Builders handled our resort renovation with real professionalism — clear costing, tight timelines, and excellent finishes.",
    name: "Hospitality Client",
    role: "Resort Renovation, Kenyan Coast",
  },
  {
    quote:
      "They delivered our commercial build on schedule with transparent communication throughout. A partner we trust.",
    name: "Commercial Client",
    role: "Fuel Station Project, Mombasa",
  },
  {
    quote:
      "From plans to handover, the team was hands-on and responsive. The workmanship speaks for itself.",
    name: "Private Homeowner",
    role: "Residential Build, Nyali",
  },
];

function Index() {
  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- Navbar ---------------- */

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <img src={logoAsset.url} alt="Narayan Builders" className="h-9 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent-hover"
          >
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-2 bg-accent text-accent-foreground hover:bg-accent-hover"
            >
              <a href="#contact" onClick={() => setOpen(false)}>
                Get a Quote
              </a>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroAsset.url}
          alt="Narayan Builders construction site"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, var(--navy) 0%, color-mix(in oklab, var(--navy) 88%, transparent) 45%, color-mix(in oklab, var(--navy) 40%, transparent) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto grid min-h-[86vh] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-navy-foreground">
          <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white/90 backdrop-blur">
            Mombasa · Kenyan Coast
          </span>
          <h1 className="mt-5 text-3xl font-extrabold leading-[1.1] text-white break-words sm:text-5xl lg:text-6xl">
            Building Mombasa's Future,{" "}
            <span className="text-accent">One Project at a Time.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Narayan Builders Ltd delivers residential, commercial, and renovation
            construction across the Kenyan coast — combining decades of on-site
            experience with modern project management.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent-hover"
            >
              <a href="#contact">
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white hover:text-primary"
            >
              <a href="#projects">View Our Work</a>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/20 pt-8 sm:grid-cols-4">
            {[
              ["25+", "Years in Business"],
              ["120+", "Projects Delivered"],
              ["Licensed", "& Insured"],
              ["Coast-wide", "Coverage"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="text-2xl font-bold text-white sm:text-3xl">{k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-white/70">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */

function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl">
            <img src={yardAsset.url} alt="Narayan Builders yard" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-accent px-6 py-5 text-accent-foreground shadow-xl sm:block">
            <div className="text-3xl font-extrabold">25+</div>
            <div className="text-xs uppercase tracking-wider">Years on the Coast</div>
          </div>
        </div>

        <div>
          <SectionEyebrow>About Us</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            A family-run construction firm rooted in Mombasa.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Narayan Builders Ltd is led by its founder alongside his son, now
            Director of Operations & Technology. We combine decades of hands-on
            building experience with a modern, technology-driven approach to
            project management and client communication.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From private homes and commercial developments to resort renovations,
            we deliver work you can stand behind — with clear costing, dependable
            timelines, and craftsmanship that lasts.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              ["25+", "Years of Operation"],
              ["120+", "Projects Delivered"],
              ["100%", "Client Focus"],
              ["Coast", "Region Covered"],
            ].map(([k, v]) => (
              <div key={v} className="rounded-xl border border-border bg-secondary/60 p-5">
                <div className="text-2xl font-bold text-primary">{k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */

function Services() {
  return (
    <section id="services" className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <SectionEyebrow>What We Do</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            Full-service construction, from foundations to handover.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <SectionEyebrow>Our Work</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              Projects across Mombasa and the Kenyan coast.
            </h2>
          </div>
          <Button asChild variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground">
            <a href="#contact">Start Your Project</a>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-background ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <div className={`relative ${i === 0 ? "aspect-[4/5] sm:aspect-auto sm:h-full" : "aspect-[4/3]"}`}>
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <span className="inline-flex rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
                    {p.tag}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold leading-tight">{p.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-white/80">
                    <MapPin className="h-3 w-3" /> {p.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */

function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <SectionEyebrow tone="light">Our Process</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            A clear path from first conversation to keys in hand.
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p) => (
            <li key={p.n} className="relative">
              <div className="text-5xl font-extrabold text-accent">{p.n}</div>
              <div className="mt-3 h-px w-12 bg-accent" />
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{p.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <SectionEyebrow>Client Voices</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            What clients say about working with us.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-background p-7"
            >
              <Quote className="h-8 w-8 text-accent" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/85">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="text-sm font-semibold text-primary">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */

function Contact() {
  return (
    <section id="contact" className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Get in Touch</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
            Request a quote or start a conversation.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Reach out directly by phone or email — we reply within one business day.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="grid gap-5 sm:grid-cols-2">
            <ContactCard
              icon={Phone}
              title="Call us"
              value="+254 728 504 555"
              href="tel:+254728504555"
            />
            <ContactCard
              icon={Mail}
              title="Email"
              value="admin@narayanbuilders.co.ke"
              href="mailto:admin@narayanbuilders.co.ke"
            />
            <ContactCard
              icon={MapPin}
              title="Office"
              value="Mombasa, Kenya"
            />
            <ContactCard
              icon={Clock}
              title="Business Hours"
              value="Mon–Sat · 8:00 AM – 5:30 PM"
            />
          </div>

          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Narayan Builders location — Mombasa"
              src="https://www.google.com/maps?q=Mombasa,Kenya&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block min-h-[260px] border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: typeof Phone;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-background p-5 transition-colors hover:border-accent/50">
      <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </div>
        <div className="mt-1 break-words text-base font-medium text-primary">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="bg-navy-dark py-14 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <img src={logoAsset.url} alt="Narayan Builders" className="h-10 w-auto brightness-0 invert" />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
            Building Quality, Delivering Trust. Residential, commercial, and
            renovation construction across Mombasa and the Kenyan coast.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-white/70 transition-colors hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>
              <a href="tel:+254728504555" className="hover:text-accent">
                +254 728 504 555
              </a>
            </li>
            <li>
              <a href="mailto:admin@narayanbuilders.co.ke" className="hover:text-accent">
                admin@narayanbuilders.co.ke
              </a>
            </li>
            <li>Mombasa, Kenya</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-xs text-white/50 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Narayan Builders Ltd. All rights reserved.
      </div>
    </footer>
  );
}

/* ---------------- Bits ---------------- */

function SectionEyebrow({
  children,
  tone = "dark",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <div className="flex items-center gap-3">
      <span className={`h-px w-8 ${tone === "light" ? "bg-accent" : "bg-accent"}`} />
      <span
        className={`text-xs font-semibold uppercase tracking-[0.2em] ${
          tone === "light" ? "text-accent" : "text-accent"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
