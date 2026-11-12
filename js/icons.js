// Professional Lucide-standard vector icon suite
// Precision-crafted 24x24 viewBox with 1.8 stroke-width and smooth curves

const svgBase = (cls, content, viewBox = "0 0 24 24", fill = "none", stroke = "currentColor", strokeWidth = "1.8") => `
  <svg class="lucide-icon ${cls}" width="1em" height="1em" viewBox="${viewBox}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    ${content}
  </svg>
`.trim();

export const Icons = {
  briefcase: (cls = "w-5 h-5") => svgBase(cls, `
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  `),

  building: (cls = "w-5 h-5") => svgBase(cls, `
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
    <path d="M10 6h4"/>
    <path d="M10 10h4"/>
    <path d="M10 14h4"/>
    <path d="M10 18h4"/>
  `),

  location: (cls = "w-4 h-4") => svgBase(cls, `
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
    <circle cx="12" cy="10" r="3"/>
  `),

  dollar: (cls = "w-4 h-4") => svgBase(cls, `
    <line x1="12" x2="12" y1="2" y2="22"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  `),

  clock: (cls = "w-4 h-4") => svgBase(cls, `
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  `),

  calendar: (cls = "w-4 h-4") => svgBase(cls, `
    <path d="M8 2v4"/>
    <path d="M16 2v4"/>
    <rect width="18" height="18" x="3" y="4" rx="2"/>
    <path d="M3 10h18"/>
  `),

  calendarCheck: (cls = "w-5 h-5") => svgBase(cls, `
    <path d="M8 2v4"/>
    <path d="M16 2v4"/>
    <rect width="18" height="18" x="3" y="4" rx="2"/>
    <path d="M3 10h18"/>
    <path d="m9 16 2 2 4-4"/>
  `),

  search: (cls = "w-5 h-5") => svgBase(cls, `
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.3-4.3"/>
  `),

  filter: (cls = "w-5 h-5") => svgBase(cls, `
    <line x1="4" x2="20" y1="6" y2="6"/>
    <line x1="10" x2="20" y1="12" y2="12"/>
    <line x1="14" x2="20" y1="18" y2="18"/>
    <circle cx="8" cy="12" r="2"/>
    <circle cx="12" cy="18" r="2"/>
  `),

  plus: (cls = "w-5 h-5") => svgBase(cls, `
    <path d="M5 12h14"/>
    <path d="M12 5v14"/>
  `),

  check: (cls = "w-5 h-5") => svgBase(cls, `
    <path d="M20 6 9 17l-5-5"/>
  `),

  checkCircle: (cls = "w-5 h-5") => svgBase(cls, `
    <circle cx="12" cy="12" r="10"/>
    <path d="m9 12 2 2 4-4"/>
  `),

  x: (cls = "w-5 h-5") => svgBase(cls, `
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  `),

  xCircle: (cls = "w-5 h-5") => svgBase(cls, `
    <circle cx="12" cy="12" r="10"/>
    <path d="m15 9-6 6"/>
    <path d="m9 9 6 6"/>
  `),

  user: (cls = "w-5 h-5") => svgBase(cls, `
    <circle cx="12" cy="8" r="5"/>
    <path d="M20 21a8 8 0 0 0-16 0"/>
  `),

  users: (cls = "w-5 h-5") => svgBase(cls, `
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  `),

  shield: (cls = "w-5 h-5") => svgBase(cls, `
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
    <path d="m9 12 2 2 4-4"/>
  `),

  star: (cls = "w-4 h-4", filled = false) => svgBase(
    cls,
    `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`,
    "0 0 24 24",
    filled ? "#f59e0b" : "none",
    filled ? "#f59e0b" : "#cbd5e1",
    "1.5"
  ),

  bookmark: (cls = "w-5 h-5", filled = false) => svgBase(
    cls,
    `<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>`,
    "0 0 24 24",
    filled ? "currentColor" : "none",
    "currentColor",
    "1.8"
  ),

  fileText: (cls = "w-5 h-5") => svgBase(cls, `
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
    <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
    <path d="M10 9H8"/>
    <path d="M16 13H8"/>
    <path d="M16 17H8"/>
  `),

  fileCheck: (cls = "w-5 h-5") => svgBase(cls, `
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
    <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
    <path d="m9 15 2 2 4-4"/>
  `),

  trash: (cls = "w-4 h-4") => svgBase(cls, `
    <path d="M3 6h18"/>
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
    <line x1="10" x2="10" y1="11" y2="17"/>
    <line x1="14" x2="14" y1="11" y2="17"/>
  `),

  edit: (cls = "w-4 h-4") => svgBase(cls, `
    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>
    <path d="m15 5 4 4"/>
  `),

  eye: (cls = "w-4 h-4") => svgBase(cls, `
    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/>
    <circle cx="12" cy="12" r="3"/>
  `),

  upload: (cls = "w-5 h-5") => svgBase(cls, `
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
    <path d="M12 12v9"/>
    <path d="m8 16 4-4 4 4"/>
  `),

  send: (cls = "w-4 h-4") => svgBase(cls, `
    <path d="m22 2-7 20-4-9-9-4Z"/>
    <path d="M22 2 11 13"/>
  `),

  kanban: (cls = "w-5 h-5") => svgBase(cls, `
    <rect width="18" height="18" x="3" y="3" rx="2"/>
    <path d="M8 7v7"/>
    <path d="M12 7v4"/>
    <path d="M16 7v9"/>
  `),

  chart: (cls = "w-5 h-5") => svgBase(cls, `
    <path d="M3 3v18h18"/>
    <path d="m19 9-5 5-4-4-3 3"/>
  `),

  bell: (cls = "w-5 h-5") => svgBase(cls, `
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
  `),

  info: (cls = "w-4 h-4") => svgBase(cls, `
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 16v-4"/>
    <path d="M12 8h.01"/>
  `),

  chevronDown: (cls = "w-4 h-4") => svgBase(cls, `
    <path d="m6 9 6 6 6-6"/>
  `),

  refresh: (cls = "w-4 h-4") => svgBase(cls, `
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
    <path d="M21 3v5h-5"/>
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
    <path d="M8 16H3v5"/>
  `),

  video: (cls = "w-4 h-4") => svgBase(cls, `
    <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/>
    <rect x="2" y="6" width="14" height="12" rx="2"/>
  `),

  download: (cls = "w-4 h-4") => svgBase(cls, `
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" x2="12" y1="15" y2="3"/>
  `),

  externalLink: (cls = "w-3.5 h-3.5") => svgBase(cls, `
    <path d="M15 3h6v6"/>
    <path d="M10 14 21 3"/>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
  `),

  sparkles: (cls = "w-4 h-4") => svgBase(cls, `
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/>
    <path d="M19 17v4"/>
    <path d="M3 5h4"/>
    <path d="M17 19h4"/>
  `),

  award: (cls = "w-5 h-5") => svgBase(cls, `
    <circle cx="12" cy="8" r="6"/>
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
  `),

  code: (cls = "w-4 h-4") => svgBase(cls, `
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  `),

  palette: (cls = "w-4 h-4") => svgBase(cls, `
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
  `),

  layout: (cls = "w-4 h-4") => svgBase(cls, `
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
    <line x1="3" x2="21" y1="9" y2="9"/>
    <line x1="9" x2="9" y1="21" y2="9"/>
  `),

  megaphone: (cls = "w-4 h-4") => svgBase(cls, `
    <path d="m3 11 18-5v12L3 14v-3z"/>
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
  `),

  database: (cls = "w-4 h-4") => svgBase(cls, `
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
  `),

  globe: (cls = "w-4 h-4") => svgBase(cls, `
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" x2="22" y1="12" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  `),

  arrowRight: (cls = "w-4 h-4") => svgBase(cls, `
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  `)
};
