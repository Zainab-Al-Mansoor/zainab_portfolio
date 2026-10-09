// Hero visual: an editor window holding a real, compilable C# 12 class.

const K = ({ c }: { c: string }) => <span className="tok-k">{c}</span>;
const T = ({ c }: { c: string }) => <span className="tok-t">{c}</span>;
const S = ({ c }: { c: string }) => <span className="tok-s">{c}</span>;
const P = ({ c }: { c: string }) => <span className="tok-p">{c}</span>;
const B = ({ c }: { c: string }) => <span className="tok-b">{c}</span>;

const lines: React.ReactNode[] = [
  <><K c="namespace" /> <T c="Portfolio" />;</>,
  <></>,
  <><K c="public sealed class" /> <T c="Engineer" /></>,
  <>{'{'}</>,
  <>{'    '}<K c="public" /> <T c="string" /> <P c="Name" /> =&gt; <S c={'"Zainab Al Mansoor"'} />;</>,
  <>{'    '}<K c="public" /> <T c="string" /> <P c="Role" /> =&gt; <S c={'".NET Developer"'} />;</>,
  <>{'    '}<K c="public" /> <T c="string" /> <P c="Company" /> =&gt; <S c={'"Sirat International"'} />;</>,
  <></>,
  <>{'    '}<K c="public" /> <T c="string" />[] <P c="Stack" /> =&gt;</>,
  <>{'        '}[<S c={'"C#"'} />, <S c={'"ASP.NET Core 8"'} />, <S c={'"SQL Server"'} />, <S c={'"Azure"'} />];</>,
  <></>,
  <>{'    '}<K c="public" /> <T c="string" />[] <P c="Ships" /> =&gt;</>,
  <>{'        '}[<S c={'"REST APIs"'} />, <S c={'"Full-stack apps"'} />, <S c={'"ML models"'} />];</>,
  <></>,
  <>{'    '}<K c="public" /> <T c="bool" /> <P c="OpenToWork" /> =&gt; <B c="true" />;<span className="caret ml-0.5 inline-block h-[1.05em] w-[0.5em] translate-y-[3px] bg-[#c792ea]" /></>,
  <>{'}'}</>,
];

export default function CodeCard() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="glow absolute -inset-10 -z-10 opacity-70" />
      <div className="gradient-border overflow-hidden rounded-2xl shadow-2xl shadow-black/30">
        <div className="flex items-center gap-2 border-b border-white/5 bg-[#0b1020] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="code ml-3 rounded-md bg-white/5 px-2.5 py-1 text-xs text-[#9aa3bd]">Engineer.cs</span>
          <span className="code ml-auto hidden text-xs text-[#637199] sm:inline">C# 12 · .NET 8</span>
        </div>
        <pre className="code overflow-x-auto bg-[#0b1020] py-4 text-[12.5px] leading-[1.75] text-[#d6deeb] sm:text-[13.5px]" aria-label="C# class describing Zainab Al Mansoor">
          {lines.map((l, i) => (
            <div key={i} className="flex">
              <span className="tok-c w-10 shrink-0 select-none pr-4 text-right">{i + 1}</span>
              <code className="whitespace-pre pr-5">{l}</code>
            </div>
          ))}
        </pre>
        <div className="code flex items-center justify-between gap-3 border-t border-white/5 bg-[#0d1326] px-4 py-2 text-[11px] text-[#9aa3bd]">
          <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#3ee0a1]" />Build succeeded · 0 warnings</span>
          <span className="hidden sm:inline">UTF-8 · LF</span>
        </div>
      </div>
    </div>
  );
}
