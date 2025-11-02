import React from 'react';
import { ArrowRight } from 'lucide-react';

const rows = [
  { pair: 'GCOIN/USDC', price: 62.13, change: +0.42, volume: 1250345 },
  { pair: 'GCOIN/BTC', price: 0.00091, change: -0.25, volume: 340112 },
  { pair: 'GCOIN/ETH', price: 0.00028, change: +0.17, volume: 210045 },
  { pair: 'GCOIN/USD', price: 62.11, change: +0.39, volume: 1540032 },
];

function formatNum(n) {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(n);
}

export default function Markets() {
  return (
    <section id="markets" className="w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Live Markets</h2>
            <p className="mt-2 text-white/70">Tight spreads and transparent pricing across pairs.</p>
          </div>
          <a
            href="#"
            className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            View Order Books
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
        <div className="overflow-hidden rounded-xl border border-white/10">
          <table className="min-w-full divide-y divide-white/10">
            <thead className="bg-white/5">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-white/60">Pair</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-white/60">Price</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-white/60">24h Change</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-white/60">24h Volume</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {rows.map((r) => (
                <tr key={r.pair} className="hover:bg-white/5">
                  <td className="px-4 py-4 font-medium">{r.pair}</td>
                  <td className="px-4 py-4">{formatNum(r.price)}</td>
                  <td className={`px-4 py-4 ${r.change >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>{r.change >= 0 ? '+' : ''}{r.change}%</td>
                  <td className="px-4 py-4 text-white/80">{formatNum(r.volume)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
