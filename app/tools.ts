export type Tool = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  bestFor: string;
  price: string;
  rating: string;
  url: string;
  affiliateUrl: string;
  pros: string[];
  cons: string[];
};

export const tools: Tool[] = [
  { slug: 'runway', name: 'Runway', category: 'Video', tagline: 'Cinematic AI video generation', description: 'Turn text, images, and rough ideas into polished video clips with a creator-friendly editing workflow.', bestFor: 'Short films, ads, and visual experiments', price: 'Free plan · paid from $12/mo', rating: '4.8', url: 'https://runwayml.com', affiliateUrl: 'https://runwayml.com', pros: ['Strong motion quality', 'Useful image-to-video tools', 'Fast iteration'], cons: ['Credits can run out quickly', 'Advanced control takes practice'] },
  { slug: 'elevenlabs', name: 'ElevenLabs', category: 'Voice', tagline: 'Natural voice, dubbing, and sound effects', description: 'Create expressive voiceovers and multilingual audio for videos, podcasts, and games.', bestFor: 'Voiceovers, localization, and narration', price: 'Free plan · paid from $5/mo', rating: '4.9', url: 'https://elevenlabs.io', affiliateUrl: 'https://elevenlabs.io', pros: ['Very natural voices', 'Large language coverage', 'Simple API'], cons: ['Best voices are paid', 'Voice rights need attention'] },
  { slug: 'canva-ai', name: 'Canva AI', category: 'Design', tagline: 'Fast thumbnails and social assets', description: 'Generate, resize, and edit visual assets in one familiar browser-based design workspace.', bestFor: 'Thumbnails, presentations, and social posts', price: 'Free plan · Pro from $15/mo', rating: '4.7', url: 'https://www.canva.com', affiliateUrl: 'https://www.canva.com', pros: ['Easy for beginners', 'Huge template library', 'Fast collaboration'], cons: ['Less control than pro tools', 'Some features are Pro-only'] },
  { slug: 'descript', name: 'Descript', category: 'Writing', tagline: 'Edit video by editing the transcript', description: 'A text-first editor for podcasts, interviews, and social clips with AI cleanup built in.', bestFor: 'Podcasts and talking-head videos', price: 'Free plan · paid from $12/mo', rating: '4.6', url: 'https://www.descript.com', affiliateUrl: 'https://www.descript.com', pros: ['Transcript-based editing', 'Great filler-word removal', 'Easy repurposing'], cons: ['Can feel slow on long projects', 'Export limits on lower plans'] },
  { slug: 'notion-ai', name: 'Notion AI', category: 'Writing', tagline: 'Research and organize creator work', description: 'Draft, summarize, and organize content inside a flexible workspace for solo creators and teams.', bestFor: 'Content planning and knowledge bases', price: 'Add-on from $10/user/mo', rating: '4.5', url: 'https://www.notion.so/product/ai', affiliateUrl: 'https://www.notion.so/product/ai', pros: ['Lives inside your workspace', 'Excellent organization', 'Good team context'], cons: ['Best results need clean notes', 'AI is an add-on'] },
  { slug: 'opus-clip', name: 'OpusClip', category: 'Video', tagline: 'Turn long videos into short clips', description: 'Finds highlights in long-form video and packages them into social-ready clips with captions.', bestFor: 'Shorts from podcasts, streams, and webinars', price: 'Free plan · paid from $15/mo', rating: '4.6', url: 'https://www.opus.pro', affiliateUrl: 'https://www.opus.pro', pros: ['Quick highlight detection', 'Automatic captions', 'Strong social workflow'], cons: ['Results need human review', 'Brand controls vary by plan'] },
  { slug: 'midjourney', name: 'Midjourney', category: 'Design', tagline: 'High-quality image generation for visual concepts', description: 'Create distinctive visual concepts, illustrations, and campaign directions from text prompts and references.', bestFor: 'Concept art, moodboards, and visual ideation', price: 'Plans from $10/mo; check current pricing', rating: '4.8', url: 'https://www.midjourney.com', affiliateUrl: 'https://www.midjourney.com', pros: ['Strong visual style', 'Multiple subscription tiers', 'Image and video workflows'], cons: ['Less predictable for exact layouts', 'Commercial use depends on plan and terms'] },
  { slug: 'heygen', name: 'HeyGen', category: 'Video', tagline: 'AI avatars and multilingual video', description: 'Create presenter-led videos, translations, and localized content without a traditional camera workflow.', bestFor: 'Explainers, training, and global content', price: 'Free plan; paid plans vary by region', rating: '4.7', url: 'https://www.heygen.com', affiliateUrl: 'https://www.heygen.com', pros: ['Fast avatar videos', 'Useful translation workflow', 'Beginner-friendly editor'], cons: ['Avatar output needs review', 'Usage limits vary by plan'] },
  { slug: 'adobe-firefly', name: 'Adobe Firefly', category: 'Design', tagline: 'Generative image, video, audio, and vector tools', description: 'Generate and edit creative assets within Adobe’s ecosystem, with workflows for images, video, audio, and vector graphics.', bestFor: 'Adobe users and brand-safe creative workflows', price: 'Free access; paid plans from $9.99/mo', rating: '4.6', url: 'https://www.adobe.com/products/firefly.html', affiliateUrl: 'https://www.adobe.com/products/firefly.html', pros: ['Works with Adobe workflows', 'Broad creative formats', 'Generative editing tools'], cons: ['Credits vary by plan', 'Best value is inside Adobe ecosystem'] },
  { slug: 'framer', name: 'Framer', category: 'Design', tagline: 'Build polished websites with AI assistance', description: 'Generate and refine responsive websites with visual editing, CMS features, and publishing tools in one workspace.', bestFor: 'Creator portfolios, landing pages, and small sites', price: 'Free plan; paid plans vary by site', rating: '4.6', url: 'https://www.framer.com', affiliateUrl: 'https://www.framer.com', pros: ['Strong visual polish', 'Fast page generation', 'Built-in publishing'], cons: ['Advanced CMS needs learning', 'Custom workflows may need code'] },
];

export const categories = ['All', 'Video', 'Voice', 'Design', 'Writing'];

export function getTool(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}
