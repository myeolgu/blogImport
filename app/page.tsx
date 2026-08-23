'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { categories, tools } from './tools';

export default function Home() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const filtered = useMemo(() => tools.filter((tool) => {
    const matchesCategory = category === 'All' || tool.category === category;
    const text = `${tool.name} ${tool.category} ${tool.tagline}`.toLowerCase();
    return matchesCategory && text.includes(query.toLowerCase());
  }), [category, query]);

  return (
    <main className="min-h-screen bg-[#101114] text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6"><Link href="/" className="text-lg font-bold tracking-tight">ToolScout</Link><span className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/60">For creators</span></nav>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-14 sm:pt-20"><p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#a7f3d0]">AI Tools Finder</p><h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">Find the right AI tool for your next idea.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">Clear, practical comparisons of AI tools for video, voice, design, writing, and growth.</p><div className="mt-9 flex max-w-xl gap-3"><input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search AI tools" placeholder="Search video, voice, thumbnails..." className="min-w-0 flex-1 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-[#a7f3d0]" /><button onClick={() => setQuery(query.trim())} className="rounded-xl bg-[#a7f3d0] px-5 py-3 text-sm font-semibold text-[#101114]">Search</button></div></section>
      <section className="mx-auto max-w-6xl px-6 pb-24"><div className="mb-6 flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm text-white/45">{filtered.length} curated tools</p><h2 className="mt-1 text-2xl font-semibold">Explore by category</h2></div><div className="flex flex-wrap gap-2">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-4 py-2 text-xs transition ${category === item ? 'bg-[#a7f3d0] font-semibold text-[#101114]' : 'border border-white/10 text-white/55 hover:border-white/30'}`}>{item}</button>)}</div></div><div className="grid gap-4 md:grid-cols-3">{filtered.map((tool) => <article key={tool.slug} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-[#a7f3d0]/50"><div className="mb-9 flex items-center justify-between"><span className="rounded-full bg-[#a7f3d0]/10 px-3 py-1 text-xs text-[#a7f3d0]">{tool.category}</span><span className="text-sm text-yellow-300">★ {tool.rating}</span></div><h3 className="text-xl font-semibold">{tool.name}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-white/55">{tool.tagline}</p><div className="mt-auto flex items-center justify-between pt-7"><span className="text-xs text-white/40">{tool.price}</span><Link href={`/tools/${tool.slug}`} className="text-sm font-semibold text-[#a7f3d0]">Read review →</Link></div></article>)}</div>{filtered.length === 0 && <p className="rounded-2xl border border-dashed border-white/15 p-10 text-center text-white/50">No tools found. Try another search.</p>}</section>
      <footer className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/35">ToolScout · Independent AI tool research for creators</footer>
    </main>
  );
}
