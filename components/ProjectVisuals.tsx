// Interface illustrations for the featured projects, drawn in HTML/CSS.
// They show what each product does; swap in real screenshots any time.

function Browser({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-bg-2 shadow-xl shadow-black/20">
      <div className="flex items-center gap-1.5 border-b border-line bg-surface-2 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="code ml-3 min-w-0 flex-1 truncate rounded-md bg-bg px-2.5 py-1 text-[11px] text-muted">{url}</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

const events = [
  { cls: 'Gunshot', state: 'Alert raised', tone: 'text-danger bg-[color-mix(in_srgb,var(--danger)_14%,transparent)]', models: 'Both models agree' },
  { cls: 'Glass breaking', state: 'Alert raised', tone: 'text-danger bg-[color-mix(in_srgb,var(--danger)_14%,transparent)]', models: 'Both models agree' },
  { cls: 'Call for help', state: 'Sent to review', tone: 'text-warn bg-[color-mix(in_srgb,var(--warn)_14%,transparent)]', models: 'Models disagree' },
  { cls: 'Machinery fault', state: 'Logged', tone: 'text-mint bg-[color-mix(in_srgb,var(--mint)_14%,transparent)]', models: 'Both models agree' },
];

export function SonicVisual() {
  return (
    <Browser url="sonicsentinel-ai.up.railway.app/live">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-display text-sm font-semibold">Live monitor</span>
        <span className="flex items-center gap-2 rounded-full border border-line px-2.5 py-1 text-[11px] font-semibold text-mint">
          <span className="live-dot h-2 w-2 rounded-full bg-mint" /> Listening
        </span>
      </div>
      <div className="eq mb-4 flex h-14 items-end gap-[3px] rounded-lg bg-surface px-3 py-2" aria-hidden="true">
        {Array.from({ length: 44 }, (_, i) => (
          <span
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${30 + ((i * 37) % 70)}%`,
              background: i > 18 && i < 26 ? 'var(--danger)' : 'linear-gradient(var(--accent-2), var(--accent))',
              animationDelay: `${(i % 11) * 90}ms`,
            }}
          />
        ))}
      </div>
      <ul className="flex flex-col gap-2">
        {events.map((e) => (
          <li key={e.cls} className="flex items-center justify-between gap-3 rounded-lg bg-surface px-3 py-2 text-[13px]">
            <span className="min-w-0">
              <span className="block font-semibold">{e.cls}</span>
              <span className="block text-[11px] text-muted">{e.models} · 2 s window</span>
            </span>
            <span className={`shrink-0 rounded-md px-2 py-1 text-[11px] font-semibold ${e.tone}`}>{e.state}</span>
          </li>
        ))}
      </ul>
    </Browser>
  );
}

export function RealtorVisual() {
  const tiles = [
    { type: 'House', city: 'Karachi', hue: 'from-[#8b6cff] to-[#38d6f5]' },
    { type: 'Apartment', city: 'Lahore', hue: 'from-[#38d6f5] to-[#3ee0a1]' },
    { type: 'Plot', city: 'Islamabad', hue: 'from-[#ffb547] to-[#ff6b7a]' },
  ];
  return (
    <Browser url="realtors.runasp.net">
      <div className="mb-3 flex flex-wrap gap-2 text-[12px]">
        {['Buy', 'Karachi', '3+ beds', 'Any price'].map((f, i) => (
          <span key={f} className={`rounded-lg border px-2.5 py-1.5 font-semibold ${i === 0 ? 'border-accent bg-accent-soft text-accent' : 'border-line bg-surface text-muted'}`}>{f}</span>
        ))}
        <span className="btn-primary ml-auto rounded-lg px-3 py-1.5 font-semibold">Search</span>
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        {tiles.map((t) => (
          <div key={t.city} className="overflow-hidden rounded-lg border border-line bg-surface">
            <div className={`relative h-16 bg-gradient-to-br ${t.hue} opacity-80`}>
              <svg viewBox="0 0 40 24" className="absolute bottom-1.5 left-2 h-6 w-10 text-white/90" fill="currentColor" aria-hidden="true"><path d="M4 22V11l9-7 9 7v11h-6v-6h-6v6zM24 22V8h12v14z" /></svg>
            </div>
            <div className="p-2">
              <p className="text-[11px] font-semibold">{t.type}</p>
              <p className="text-[10px] text-muted">{t.city}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[11px]">
        {[['Agents', 'Directory'], ['Leads', 'Tracked'], ['Roles', 'RBAC']].map(([a, b]) => (
          <div key={a} className="rounded-lg bg-surface px-2 py-2">
            <p className="font-semibold">{a}</p>
            <p className="text-muted">{b}</p>
          </div>
        ))}
      </div>
    </Browser>
  );
}
