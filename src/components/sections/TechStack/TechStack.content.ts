export const techStackContent = {
  title: 'My Tech Stacks',
  columns: [
    {
      category: 'Languages',
      items: [
        { name: 'JavaScript (ES6+)', icon: 'Code' },
        { name: 'TypeScript', icon: 'Code' },
        { name: 'Python', icon: 'Code' },
        { name: 'PHP', icon: 'Code' },
        { name: 'C#', icon: 'Code' },
      ],
    },
    {
      category: 'Frontend',
      items: [
        { name: 'React', icon: 'Atom' },
        { name: 'jQuery', icon: 'Layers' },
        { name: 'Storybook', icon: 'BookOpen' },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: 'Server' },
        { name: 'Express.js', icon: 'Server' },
        { name: 'REST API', icon: 'Network' },
        { name: 'GraphQL', icon: 'Network' },
      ],
    },
    {
      category: 'Databases',
      items: [
        { name: 'MySQL', icon: 'Database' },
        { name: 'PostgreSQL', icon: 'Database' },
        { name: 'MongoDB', icon: 'Database' },
        { name: 'Redis', icon: 'Database' },
        { name: 'DynamoDB', icon: 'Database' },
      ],
    },
    {
      category: 'DevOps & Tools',
      items: [
        { name: 'AWS', icon: 'Cloud' },
        { name: 'Webpack', icon: 'Package' },
        { name: 'Git', icon: 'GitBranch' },
        { name: 'Jira', icon: 'ClipboardList' },
      ],
    },
    {
      category: 'Monitoring & Analytics',
      items: [
        { name: 'Dynatrace', icon: 'Activity' },
        { name: 'Mixpanel', icon: 'BarChart3' },
        { name: 'Loggly', icon: 'Search' },
      ],
    },
    {
      category: 'Design & Productivity',
      items: [
        { name: 'Figma', icon: 'PenTool' },
        { name: 'Lucidchart', icon: 'Flow' },
        { name: 'Notion', icon: 'Book' },
        { name: 'Contentful', icon: 'FileText' },
      ],
    },
  ],
} as const;