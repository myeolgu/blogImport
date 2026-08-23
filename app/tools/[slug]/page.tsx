import type { Metadata } from 'next';
import Link from 'next/link';
import { getTool, tools } from '../../tools';

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  return { title: tool ? `${tool.name} Review & Pricing | ToolScout` : 'Tool not found', description: tool?.description };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return <main className="min-h-screen bg-[#101114] p-10 text-white"><Link href="/">← Back to ToolScout</Link><h1 className="mt-16 text-4xl font-bold">Tool not found</h1></main>;
  return <main className="min-h-screen bg-[#101114] text-white"><nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6"><Link href="/" className="font-bold">ToolScout</Link><Link href="/" className="text-sm text-[#a7f3d0]">← All tools</Link></nav><article className="mx-auto max-w-4xl px-6 pb-24 pt-16"><div className="flex flex-wrap items-center gap-3 text-sm"><span className="rounded-full bg-[#a7f3d0]/10 px-3 py-1 text-[#a7f3d0]">{tool.category}</span><span className="text-yellow-300">★ {tool.rating}</span></div><h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl">{tool.name}</h1><p className="mt-5 max-w-2xl text-xl leading-8 text-white/60">{tool.tagline}</p><div className="mt-8 flex flex-wrap gap-3"><a href={tool.affiliateUrl} target="_blank" rel="noreferrer sponsored" className="rounded-xl bg-[#a7f3d0] px-5 py-3 text-sm font-semibold text-[#101114]">Visit {tool.name} ↗</a><span className="rounded-xl border border-white/10 px-5 py-3 text-sm text-white/55">{tool.price}</span></div><div className="mt-16 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-[1fr_280px]"><div><h2 className="text-2xl font-semibold">What it does</h2><p className="mt-4 leading-8 text-white/65">{tool.description}</p><h2 className="mt-12 text-2xl font-semibold">Best for</h2><p className="mt-4 leading-8 text-white/65">{tool.bestFor}</p></div><aside className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"><h2 className="font-semibold">Quick verdict</h2><ul className="mt-5 space-y-3 text-sm leading-6 text-white/65">{tool.pros.map((item) => <li key={item}>✓ {item}</li>)}{tool.cons.map((item) => <li key={item} className="text-white/45">− {item}</li>)}</ul></aside></div><p className="mt-16 text-xs text-white/30">Disclosure: ToolScout may earn a commission from some links. Recommendations remain independent.</p></article></main>;
}
