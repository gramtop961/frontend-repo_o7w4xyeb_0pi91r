import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-black py-10 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <div className="text-lg font-semibold">G‑Coin</div>
            <div className="text-sm text-white/60">Gold‑backed stability for the crypto economy.</div>
          </div>
          <div className="text-xs text-white/50">
            © {new Date().getFullYear()} G‑Coin Labs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
