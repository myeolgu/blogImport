const tools = [
  { name: "Runway", type: "Video", note: "Best for cinematic AI video" },
  { name: "ElevenLabs", type: "Voice", note: "Natural voice and dubbing" },
  { name: "Canva AI", type: "Design", note: "Fast thumbnails and social assets" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#101114] text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6"><a href="/" className="text-lg font-bold tracking-tight">ToolScout</a><span className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/60">For creators</span></nav>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24"><p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#a7f3d0]">AI Tools Finder</p><h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">Find the right AI tool for your next idea.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">Clear, practical comparisons of AI tools for video, voice, design, writing, and growth. Spend less time searching and more time creating.</p><div className="mt-9 flex max-w-xl gap-3"><input aria-label="Search AI tools" placeholder="Search video, voice, thumbnails..." className="min-w-0 flex-1 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-[#a7f3d0]" /><button className="rounded-xl bg-[#a7f3d0] px-5 py-3 text-sm font-semibold text-[#101114]">Search</button></div></section>
      <section className="mx-auto max-w-6xl px-6 pb-24"><div className="mb-5 flex items-end justify-between"><div><p className="text-sm text-white/45">Curated picks</p><h2 className="mt-1 text-2xl font-semibold">Start here</h2></div><a href="#tools" className="text-sm text-[#a7f3d0]">View all tools →</a></div><div id="tools" className="grid gap-4 md:grid-cols-3">{tools.map((tool) => <article key={tool.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-[#a7f3d0]/50"><div className="mb-10 flex items-center justify-between"><span className="rounded-full bg-[#a7f3d0]/10 px-3 py-1 text-xs text-[#a7f3d0]">{tool.type}</span><span className="text-white/30">↗</span></div><h3 className="text-xl font-semibold">{tool.name}</h3><p className="mt-2 text-sm text-white/55">{tool.note}</p></article>)}</div></section>
      <footer className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/35">ToolScout · Independent AI tool research for creators</footer>
    </main>
  );
}
