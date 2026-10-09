'use client';

import { useEffect, useState } from 'react';

// Shows a real screenshot from /public/projects when it exists,
// and falls back to the drawn illustration (or a placeholder) when it doesn't.
export default function ProjectImage({
  src,
  alt,
  fallback,
  className = '',
  frameUrl,
}: {
  src?: string;
  alt: string;
  fallback: React.ReactNode;
  className?: string;
  frameUrl?: string;
}) {
  // Start with the fallback (also what the static HTML contains), then swap in
  // the screenshot only once the browser has confirmed the file loads.
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!src) return;
    const probe = new Image();
    probe.onload = () => setReady(true);
    probe.src = src;
  }, [src]);
  if (!src || !ready) return <>{fallback}</>;
  // eslint-disable-next-line @next/next/no-img-element
  const img = <img src={src} alt={alt} className={className} />;
  if (!frameUrl) return img;
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-bg-2 shadow-xl shadow-black/20">
      <div className="flex items-center gap-1.5 border-b border-line bg-surface-2 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="code ml-3 min-w-0 flex-1 truncate rounded-md bg-bg px-2.5 py-1 text-[11px] text-muted">{frameUrl}</span>
      </div>
      {img}
    </div>
  );
}
