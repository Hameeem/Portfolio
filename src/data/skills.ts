import type { SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  {
    group: 'Languages',
    icon: 'code',
    skills: ['Python', 'Java', 'C++', 'C', 'JavaScript', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    group: 'Frameworks',
    icon: 'layers',
    skills: ['React', 'Tailwind CSS', 'Streamlit'],
  },
  {
    group: 'Libraries',
    icon: 'box',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
  },
  {
    group: 'Tools & Platforms',
    icon: 'tool',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'MySQL', 'Power BI', 'Excel', 'Tableau', 'AutoCAD'],
  },
  {
    group: 'Big Data',
    icon: 'database',
    skills: ['Hadoop', 'Hive', 'HBase', 'Cassandra'],
  },
  {
    group: 'AI',
    icon: 'cpu',
    skills: ['Prompt Engineering', 'Prompt Optimization', 'AI-Assisted Development', 'AI Agent Development', 'Machine Learning'],
  },
]
