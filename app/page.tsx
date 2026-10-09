import { awards, education, experience, featured, highlights, marquee, moreProjects, profile, services, skills } from '@/lib/data';
import CodeCard from '@/components/CodeCard';
import { RealtorVisual, SonicVisual } from '@/components/ProjectVisuals';
import ThemeToggle from '@/components/ThemeToggle';
import CopyEmail from '@/components/CopyEmail';
import ProjectImage from '@/components/ProjectImage';

const nav = [
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

function Icon({ name, className = 'h-5 w-5' }: { name: string; className?: string }) {
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths: Record<string, React.ReactNode> = {
    server: <><rect x="3" y="4" width="18" height="7" rx="2" {...p} /><rect x="3" y="13" width="18" height="7" rx="2" {...p} /><path d="M7 7.5h.01M7 16.5h.01" {...p} /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5z" {...p} /><path d="m3 13 9 5 9-5" {...p} /></>,
    spark: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" {...p} /></>,
    arrow: <path d="M7 17 17 7M9 7h8v8" {...p} />,
    github: <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" {...p} />,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" {...p} /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" {...p} /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" {...p} /><path d="m3 7 9 6 9-6" {...p} /></>,
    download: <path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" {...p} />,
    trophy: <><path d="M8 4h8v5a4 4 0 0 1-8 0V4zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 21h8M9 17h6v4H9z" {...p} /></>,
    cap: <><path d="m2 9 10-5 10 5-10 5L2 9z" {...p} /><path d="M6 11v5c3 2 9 2 12 0v-5" {...p} /></>,
    phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" {...p} />,
    pin: <><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" {...p} /><circle cx="12" cy="10" r="2.5" {...p} /></>,
  };
  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true">{paths[name]}</svg>;
}

function SectionHead({ id, kicker, title, note }: { id: string; kicker: string; title: string; note?: string }) {
  return (
    <div id={id} className="mb-12 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
      <div>
        <p className="code mb-3 text-sm text-accent">{kicker}</p>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-[2.75rem] sm:leading-[1.1]">{title}</h2>
      </div>
      {note && <p className="max-w-md text-muted lg:text-right">{note}</p>}
    </div>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {items.map((s) => <li key={s} className="chip">{s}</li>)}
    </ul>
  );
}

export default function Home() {
  const [sonic, realtor] = featured;
  return (
    <>
      {/* Navigation */}
      <header className="sticky top-0 z-30 border-b border-line bg-[color-mix(in_srgb,var(--bg)_78%,transparent)] backdrop-blur-xl">
        <div className="progress absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-accent to-accent-2" />
        <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Zainab Al Mansoor, home">
            <span className="btn-primary grid h-9 w-9 place-items-center rounded-xl font-display text-sm font-bold">ZA</span>
            <span className="hidden font-display text-[15px] font-semibold sm:block">Zainab Al Mansoor</span>
          </a>
          <nav aria-label="Sections" className="hidden items-center gap-1 rounded-xl border border-line bg-surface p-1 text-sm font-medium text-muted lg:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="rounded-lg px-3.5 py-1.5 transition-colors hover:bg-surface-2 hover:text-ink">{n.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href={profile.resume} {...ext} className="btn-primary hidden items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold sm:flex">
              <Icon name="download" className="h-4 w-4" /> Résumé
            </a>
            <details className="relative lg:hidden">
              <summary className="grid h-10 w-10 cursor-pointer place-items-center rounded-xl border border-line bg-surface text-muted" aria-label="Open menu">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
              </summary>
              <nav aria-label="Mobile sections" className="card absolute right-0 top-12 flex w-52 flex-col rounded-xl p-2 shadow-2xl">
                {nav.map((n) => <a key={n.href} href={n.href} className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-surface-2">{n.label}</a>)}
                <a href={profile.resume} {...ext} className="rounded-lg px-3 py-2 text-sm font-semibold text-accent hover:bg-surface-2">Download résumé</a>
              </nav>
            </details>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />
          <div aria-hidden="true" className="glow absolute -top-40 left-1/2 -z-10 h-[34rem] w-[60rem] -translate-x-1/2 opacity-60" />
          <div className="mx-auto grid max-w-page gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12">
            <div className="min-w-0">
              <p className="rise d1 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-muted">
                <span className="live-dot h-2 w-2 rounded-full bg-mint" />
                Available for full-time roles · {profile.location}
              </p>
              <div className="rise d2 mt-7 flex items-center gap-4">
                <span className="rounded-full bg-gradient-to-br from-accent to-accent-2 p-[2px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={profile.photo} alt="Zainab Al Mansoor" width={64} height={64} className="h-16 w-16 rounded-full border-2 border-bg object-cover" />
                </span>
                <span>
                  <span className="block font-display text-lg font-bold">Hi, I’m Zainab Al Mansoor</span>
                  <span className="block text-sm font-medium text-muted">{profile.role}</span>
                </span>
              </div>
              <h1 className="rise d2 mt-2 font-display text-[clamp(2.4rem,5.6vw,4.4rem)] font-extrabold leading-[1.04] tracking-[-0.035em]">
                I build secure web platforms and <span className="text-gradient">ship AI that works.</span>
              </h1>
              <p className="rise d3 mt-6 max-w-[36rem] text-lg text-muted">{profile.intro}</p>
              <ul className="rise d4 mt-6 flex flex-wrap gap-2 text-sm font-semibold" aria-label="Roles I’m open to">
                {['.NET Developer', 'Full-Stack Engineer', 'AI/ML Engineer'].map((r) => (
                  <li key={r} className="rounded-lg border border-line bg-surface px-3 py-1.5"><span className="mr-1.5 text-mint">✓</span>{r}</li>
                ))}
              </ul>
              <div className="rise d4 mt-8 flex flex-wrap gap-3">
                <a href="#work" className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold">
                  View projects <Icon name="arrow" className="h-4 w-4" />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-6 py-3.5 font-semibold transition-colors hover:border-accent">
                  Hire me
                </a>
              </div>
              <div className="rise d5 mt-9 flex items-center gap-3">
                {[['github', profile.github, 'GitHub'], ['linkedin', profile.linkedin, 'LinkedIn'], ['mail', `mailto:${profile.email}`, 'Email']].map(([icon, href, label]) => (
                  <a key={label} href={href} {...(icon === 'mail' ? {} : ext)} aria-label={label} className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface text-muted transition-colors hover:border-accent hover:text-ink">
                    <Icon name={icon} />
                  </a>
                ))}
              </div>
            </div>
            <div className="rise d3 min-w-0">
              <CodeCard />
            </div>
          </div>

          {/* Tech marquee */}
          <div className="border-y border-line bg-bg-2">
            <div className="marquee-mask mx-auto max-w-page overflow-hidden py-5">
              <div className="marquee flex w-max gap-10 pr-10">
                {[...marquee, ...marquee].map((t, i) => (
                  <span key={i} className="code flex items-center gap-10 whitespace-nowrap text-sm text-muted" aria-hidden={i >= marquee.length}>
                    {t}<span className="h-1 w-1 rounded-full bg-accent" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-page px-5 sm:px-8">
          {/* Stats */}
          <section aria-label="Highlights" className="grid grid-cols-2 gap-4 py-16 lg:grid-cols-4">
            {highlights.map((h) => (
              <div key={h.label} className="card rounded-2xl p-6">
                <p className="font-display text-4xl font-bold tracking-tight tabular-nums sm:text-5xl">
                  <span className="text-gradient">{h.value}</span>
                  <span className="ml-1.5 text-base font-semibold text-muted">{h.unit}</span>
                </p>
                <p className="mt-2 text-sm text-muted">{h.label}</p>
              </div>
            ))}
          </section>

          {/* Services */}
          <section className="py-16">
            <SectionHead id="services" kicker="// what I do" title="Engineering across the whole stack" note="I take features from schema to production and keep them fast, secure and maintainable." />
            <div className="grid gap-5 md:grid-cols-3">
              {services.map((s) => (
                <article key={s.title} className="card card-hover flex flex-col rounded-2xl p-7">
                  <span className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-accent-soft text-accent"><Icon name={s.icon} className="h-6 w-6" /></span>
                  <h3 className="font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 flex-1 text-muted">{s.text}</p>
                  <div className="mt-6"><Stack items={s.tags} /></div>
                </article>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="py-16">
            <SectionHead id="experience" kicker="// experience" title="Promoted twice in 18 months" note="Web Designer to Full-Stack Engineer to .NET Developer, all at Sirat International." />
            <ol className="grid gap-5">
              {experience.map((j, i) => (
                <li key={j.title} className={`${i === 0 ? 'gradient-border' : 'card'} card-hover grid gap-6 rounded-2xl p-7 md:grid-cols-[14rem_1fr]`}>
                  <div>
                    <p className="code text-sm text-muted tabular-nums">{j.dates}</p>
                    {i === 0 && <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-[color-mix(in_srgb,var(--mint)_14%,transparent)] px-2.5 py-1 text-xs font-semibold text-mint"><span className="h-1.5 w-1.5 rounded-full bg-mint" />Current role</span>}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-2xl font-bold tracking-tight">{j.title}</h3>
                    <p className="font-semibold text-accent">{j.company}</p>
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {j.points.map((pt) => (
                        <li key={pt} className="flex gap-3 text-muted"><span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /><span>{pt}</span></li>
                      ))}
                    </ul>
                    <div className="mt-5"><Stack items={j.stack} /></div>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Featured projects */}
          <section className="py-16">
            <SectionHead id="work" kicker="// featured projects" title="Products I’ve shipped" note="Live, deployed and built end to end. Open them and try them." />

            {[{ p: sonic, visual: <SonicVisual />, flip: false }, { p: realtor, visual: <RealtorVisual />, flip: true }].map(({ p, visual, flip }) => (
              <article key={p.name} className="card mb-8 grid gap-10 overflow-hidden rounded-3xl p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
                <div className={`min-w-0 ${flip ? 'lg:order-2' : ''}`}>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold">
                    {p.context.split(' · ').map((c) => <span key={c} className="rounded-full border border-line px-3 py-1 text-muted">{c}</span>)}
                  </div>
                  <h3 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{p.name}</h3>
                  <p className="mt-2 font-display text-lg font-semibold text-gradient">{p.tagline}</p>
                  <p className="mt-4 text-muted">{p.summary}</p>
                  {p.metrics && (
                    <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {p.metrics.map((m) => (
                        <div key={m.label} className="rounded-xl border border-line bg-bg-2 p-3">
                          <dd className="font-display text-2xl font-bold tabular-nums">{m.value}</dd>
                          <dt className="text-xs leading-snug text-muted">{m.label}</dt>
                        </div>
                      ))}
                    </dl>
                  )}
                  <ul className="mt-6 flex flex-col gap-2.5">
                    {p.points.slice(0, 3).map((pt) => (
                      <li key={pt} className="flex gap-3 text-[15px]"><svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 shrink-0 text-mint" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="m5 12 4.5 4.5L19 7" /></svg><span>{pt}</span></li>
                    ))}
                  </ul>
                  <div className="mt-6"><Stack items={p.stack.slice(0, 8)} /></div>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    {p.live && <a href={p.live} {...ext} className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold">Open live app <Icon name="arrow" className="h-4 w-4" /></a>}
                    <span className="text-sm text-muted">Role: <span className="font-semibold text-ink">{p.role}</span></span>
                  </div>
                </div>
                <div className={`min-w-0 ${flip ? 'lg:order-1' : ''}`}><ProjectImage src={p.image} alt={`${p.name} screenshot`} frameUrl={p.live?.replace(/^https?:\/\//, '').replace(/\/$/, '')} className="block h-auto w-full" fallback={visual} /></div>
              </article>
            ))}

            <h3 className="mb-6 mt-16 font-display text-2xl font-bold tracking-tight">More projects</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {moreProjects.map((p) => {
                const inner = (
                  <>
                    <div className="-mx-6 -mt-6 mb-5 aspect-[2/1] overflow-hidden rounded-t-2xl border-b border-line bg-bg-2">
                      <ProjectImage
                        src={p.image}
                        alt={`${p.name} screenshot`}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        fallback={
                          <div className="grid h-full w-full place-items-center bg-[radial-gradient(circle_at_30%_20%,var(--accent-soft),transparent_60%)]">
                            <span className="font-display text-3xl font-extrabold text-gradient">{p.name.split(' ').map((w) => w[0]).join('').slice(0, 3)}</span>
                          </div>
                        }
                      />
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="font-display text-lg font-bold">{p.name}</h4>
                      {p.live
                        ? <Icon name="arrow" className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-accent" />
                        : <span className="shrink-0 rounded-md border border-line px-2 py-0.5 text-[11px] text-muted">Private</span>}
                    </div>
                    <p className="mt-2 flex-1 text-[15px] text-muted">{p.desc}</p>
                    <p className="code mt-5 text-xs text-accent">{p.stack}</p>
                  </>
                );
                return p.live
                  ? <a key={p.name} href={p.live} {...ext} className="group card card-hover flex flex-col rounded-2xl p-6">{inner}</a>
                  : <div key={p.name} className="card flex flex-col rounded-2xl p-6">{inner}</div>;
              })}
            </div>
          </section>

          {/* Skills */}
          <section className="py-16">
            <SectionHead id="skills" kicker="// tech stack" title="Tools I work with every day" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((s) => (
                <div key={s.group} className="card rounded-2xl p-6">
                  <h3 className="mb-4 font-display text-base font-bold">{s.group}</h3>
                  <ul className="flex flex-wrap gap-2">{s.items.map((it) => <li key={it} className="chip">{it}</li>)}</ul>
                </div>
              ))}
            </div>
          </section>

          {/* Awards & education */}
          <section className="py-16">
            <SectionHead id="awards" kicker="// recognition" title="Awards and education" />
            <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
              <div className="grid gap-4">
                <a href={awards[0].url} {...ext} className="gradient-border card-hover group relative overflow-hidden rounded-2xl p-7">
                  <div aria-hidden="true" className="glow absolute -right-16 -top-16 h-56 w-56 opacity-60" />
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-[color-mix(in_srgb,var(--warn)_16%,transparent)] text-warn"><Icon name="trophy" className="h-6 w-6" /></span>
                  <p className="mt-5 font-display text-2xl font-bold">1st place, Database Designer of the Year</p>
                  <p className="mt-1 text-muted">{awards[0].org}. Fully normalized SQL Server schemas with advanced query optimization.</p>
                  <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">View certificate <Icon name="arrow" className="h-4 w-4" /></p>
                </a>
                {awards.slice(1).map((a) => (
                  <a key={a.title} href={a.url} {...ext} className="card card-hover group flex items-center justify-between gap-4 rounded-2xl px-6 py-4">
                    <span className="min-w-0">
                      <span className="block font-semibold">{a.title}</span>
                      <span className="block text-sm text-muted">{a.org}</span>
                    </span>
                    <Icon name="arrow" className="h-5 w-5 shrink-0 text-muted group-hover:text-accent" />
                  </a>
                ))}
              </div>
              <div className="card rounded-2xl p-7">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent-soft text-accent"><Icon name="cap" className="h-6 w-6" /></span>
                <ol className="mt-6 border-l border-line">
                  {education.map((e, i) => (
                    <li key={e.title} className="relative pb-7 pl-6 last:pb-0">
                      <span aria-hidden="true" className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ${i === 0 ? 'bg-accent' : 'bg-line'}`} />
                      <p className="code text-xs text-muted">{e.dates}</p>
                      <p className="mt-1 font-semibold">{e.title}</p>
                      <p className="text-sm text-muted">{e.school}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="gradient-border relative my-16 overflow-hidden rounded-3xl px-6 py-14 sm:px-14 sm:py-16">
            <div aria-hidden="true" className="hero-grid absolute inset-0 -z-0 opacity-70" />
            <div aria-hidden="true" className="glow absolute -bottom-32 -right-20 h-80 w-[36rem] opacity-50" />
            <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
              <div>
                <p className="code text-sm text-accent">// let’s work together</p>
                <h2 className="mt-3 font-display text-[clamp(2rem,4.6vw,3.4rem)] font-extrabold leading-[1.05] tracking-tight">
                  Hiring for .NET, full-stack or AI/ML roles?
                </h2>
                <p className="mt-4 max-w-lg text-muted">I’m open to full-time and remote roles as a .NET Developer, Full-Stack Engineer or AI/ML Engineer, and I can start right away. Email is the fastest way to reach me.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={`mailto:${profile.email}`} className="btn-primary inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold"><Icon name="mail" className="h-4 w-4" /> Email me</a>
                  <a href={profile.resume} {...ext} className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-6 py-3.5 font-semibold hover:border-accent"><Icon name="download" className="h-4 w-4" /> Download résumé</a>
                </div>
              </div>
              <ul className="flex flex-col gap-3 text-[15px]">
                <li className="card flex items-center justify-between gap-3 rounded-xl px-4 py-3">
                  <span className="flex min-w-0 items-center gap-3"><Icon name="mail" className="h-4 w-4 shrink-0 text-accent" /><span id="contact-email" className="truncate">{profile.email}</span></span>
                  <CopyEmail email={profile.email} />
                </li>
                <li className="card flex items-center gap-3 rounded-xl px-4 py-3"><Icon name="phone" className="h-4 w-4 text-accent" />{profile.phone}</li>
                <li className="card flex items-center gap-3 rounded-xl px-4 py-3"><Icon name="pin" className="h-4 w-4 text-accent" />{profile.location}</li>
                <li className="flex gap-3">
                  <a href={profile.linkedin} {...ext} className="card card-hover flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold"><Icon name="linkedin" className="h-4 w-4" />LinkedIn</a>
                  <a href={profile.github} {...ext} className="card card-hover flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold"><Icon name="github" className="h-4 w-4" />GitHub</a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-3 px-5 py-8 text-sm text-muted sm:px-8">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span className="code text-xs">Built with Next.js · TypeScript · Tailwind CSS</span>
        </div>
      </footer>
    </>
  );
}
