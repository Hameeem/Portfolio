import type { SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  {
    group: 'Languages',
    icon: 'code',
    skills: ['Python', 'TypeScript', 'JavaScript (ES6+)', 'SQL (MySQL/Postgres)', 'C++', 'Java', 'C', 'HTML5', 'CSS3'],
  },
  {
    group: 'Frameworks & Full-Stack',
    icon: 'layers',
    skills: ['Next.js', 'React 19', 'Node.js', 'Express.js', 'FastAPI', 'Streamlit', 'Tailwind CSS v4', 'Chakra UI'],
  },
  {
    group: 'State & Real-Time Telemetry',
    icon: 'activity',
    skills: ['Redux Toolkit', 'Socket.io', 'Mapbox GL', 'WebSockets', 'REST APIs', 'JWT Auth', 'Recharts', 'Plotly'],
  },
  {
    group: 'AI & Machine Learning',
    icon: 'cpu',
    skills: [
      'RAG Architecture',
      'FAISS Vector Search',
      'LangChain',
      'OpenAI API',
      'Anthropic API',
      'Prompt Optimization',
      'AI Agent Development',
      'Machine Learning (Scikit-learn)',
    ],
  },
  {
    group: 'Data Engineering & Analytics',
    icon: 'database',
    skills: ['Pandas', 'NumPy', 'SQLAlchemy', 'Apache Airflow', 'Docker', 'Redis', 'Power BI', 'Tableau', 'WordCloud', 'Matplotlib'],
  },
  {
    group: 'Tools & Platforms',
    icon: 'tool',
    skills: ['Git', 'GitHub', 'MySQL', 'PostgreSQL', 'SQLite', 'Vercel', 'VS Code', 'Jupyter Notebook', 'Arduino', 'Proteus'],
  },
]
