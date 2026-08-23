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
];

export const categories = ['All', 'Video', 'Voice', 'Design', 'Writing'];

export function getTool(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}
