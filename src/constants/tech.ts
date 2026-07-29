import {
  siReact,
  siAngular,
  siVuedotjs,
  siTypescript,
  siJavascript,
  siNodedotjs,
  siPython,
  siFastapi,
  siLaravel,
  siFlutter,
  siPostgresql,
  siDocker,
  siKubernetes,
  siN8n,
  siGit,
} from 'simple-icons'

export interface TechEntry {
  name: string
  /** undefined means the generic fallback glyph in <TechIcon> is used instead. */
  icon?: { path: string }
  color: string
}

/**
 * A few brand marks (AWS, Azure, OpenAI, SQL Server, .NET) were removed from
 * simple-icons after trademark takedown requests, so those render through
 * TechIcon's generic fallback glyph instead of a brand SVG.
 */
export const TECH_STACK: TechEntry[] = [
  { name: 'React', icon: siReact, color: '#61DAFB' },
  { name: 'Angular', icon: siAngular, color: '#DD0031' },
  { name: 'Vue', icon: siVuedotjs, color: '#4FC08D' },
  { name: 'TypeScript', icon: siTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: siJavascript, color: '#E8C547' },
  { name: 'Node.js', icon: siNodedotjs, color: '#5FA04E' },
  { name: 'Python', icon: siPython, color: '#3776AB' },
  { name: 'FastAPI', icon: siFastapi, color: '#009688' },
  { name: '.NET', color: '#8B5CF6' },
  { name: 'Laravel', icon: siLaravel, color: '#FF2D20' },
  { name: 'Flutter', icon: siFlutter, color: '#02569B' },
  { name: 'PostgreSQL', icon: siPostgresql, color: '#4169E1' },
  { name: 'SQL Server', color: '#CC2927' },
  { name: 'Docker', icon: siDocker, color: '#2496ED' },
  { name: 'Kubernetes', icon: siKubernetes, color: '#326CE5' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Azure', color: '#0078D4' },
  { name: 'OpenAI', color: '#10A37F' },
  { name: 'N8N', icon: siN8n, color: '#EA4B71' },
  { name: 'Git', icon: siGit, color: '#F05032' },
]
