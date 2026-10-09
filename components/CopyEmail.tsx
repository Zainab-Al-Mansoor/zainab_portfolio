'use client';

import { useState } from 'react';

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.getElementById('contact-email');
      if (el) window.getSelection()?.selectAllChildren(el);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="rounded-full border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
    >
      {copied ? 'Copied' : 'Copy email'}
    </button>
  );
}
