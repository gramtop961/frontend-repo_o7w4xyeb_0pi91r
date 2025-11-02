import React from 'react';
import { Shield, Coins, TrendingUp, Lock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Fully Collateralized',
    desc: 'Every G‑Coin is backed 1:1 with vaulted, insured gold held with audited custodians.',
  },
  {
    icon: Lock,
    title: 'Institutional Security',
    desc: 'Multi‑sig cold storage, real‑time monitoring, and end‑to‑end encryption safeguard your assets.',
  },
  {
    icon: Coins,
    title: 'Low Fees, Deep Liquidity',
    desc: 'Tight spreads and efficient routing across venues keep your costs low and fills fast.',
  },
  {
    icon: TrendingUp,
    title: 'Spot + Earn',
    desc: 'Trade instantly or stake to earn yield from market‑making and reserve strategies.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Built for stability. Designed for speed.</h2>
          <p className="mt-3 text-white/70">
            Transparent reserves, modern rails, and a trading interface that moves at the speed of crypto.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <div className="mb-4 inline-flex rounded-lg bg-emerald-500/15 p-2 text-emerald-400">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
