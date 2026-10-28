import eventImg from '../assets/projects/event-management-preview.png';
import dsaImg from '../assets/projects/dsa-mastery-preview.png';
import schemaImg from '../assets/projects/schemaiq-preview.png';
import jewelleryImg from '../assets/projects/jewellery-missing-stone-preview.jpg';

export const projects = [
  {
    id: 'event-management',
    title: 'Event Management System',
    shortDesc:
      'A full-stack event platform with role-based access control, JWT authentication, QR-code attendance tracking, and automated PDF certificate generation.',
    image: eventImg,
    imageAlt: 'EVENTIQ — Event Management System interface',
    technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'Spring Security', 'JWT', 'Hibernate', 'AWS EC2'],
    category: 'Full Stack',
    status: 'Live',
    featured: true,
    accentColor: '#6366F1',
    repoUrl: 'https://github.com/shanjaiy2006/Event-Management-System',
    demoUrl: 'http://65.0.178.251:4173/',
    primaryAction: { label: 'Live Demo', url: 'http://65.0.178.251:4173/', external: true },
    features: [
      'Role-based access — Admin, Organizer, Student',
      'JWT stateless authentication & authorization',
      'QR-code based attendance tracking',
      'Automated PDF certificate generation',
      'REST API backend deployed on AWS EC2',
    ],
  },
  {
    id: 'dsa-mastery',
    title: 'DSA Mastery',
    shortDesc:
      'A pattern-based DSA learning platform with structured roadmaps and curated problem sets to master algorithms for technical interviews.',
    image: dsaImg,
    imageAlt: 'DSA Patterns — pattern-based learning platform',
    technologies: ['React', 'JavaScript', 'Vercel'],
    category: 'Frontend',
    status: 'Live',
    featured: false,
    accentColor: '#8B5CF6',
    repoUrl: null,
    demoUrl: 'https://dsa-mastery-iota.vercel.app/',
    primaryAction: { label: 'Live Demo', url: 'https://dsa-mastery-iota.vercel.app/', external: true },
    features: [
      'Pattern-based DSA learning',
      'Structured problem roadmaps',
      'Clean, focused interface',
    ],
  },
  {
    id: 'schema-iq',
    title: 'SchemaIQ',
    shortDesc:
      'An AI-powered data analysis application — upload a SQL database and query it using natural language with LLM-driven insights and visualizations.',
    image: schemaImg,
    imageAlt: 'SchemaIQ — AI Data Analyst interface',
    technologies: ['Python', 'Streamlit', 'FastAPI', 'LangGraph', 'Groq', 'MySQL', 'Pandas', 'Plotly'],
    category: 'AI / Data',
    status: 'Live',
    featured: false,
    accentColor: '#6366F1',
    repoUrl: null,
    demoUrl: 'https://schema-iq.streamlit.app/',
    primaryAction: { label: 'Live Demo', url: 'https://schema-iq.streamlit.app/', external: true },
    features: [
      'Natural language to SQL query',
      'LangGraph AI agent pipeline',
      'Groq LLM integration',
      'Interactive Plotly visualizations',
    ],
  },
  {
    id: 'jewellery-detection',
    title: 'Stone Missing Detection',
    shortDesc:
      'A computer vision project using YOLOv8n to detect missing stones in jewellery images. Base model trained; further training in progress. Frontend deployed.',
    image: jewelleryImg,
    imageAlt: 'GemsGuard AI — Jewellery missing stone detection frontend',
    technologies: ['YOLOv8n', 'Python', 'OpenCV', 'Roboflow', 'React', 'Vercel'],
    category: 'Computer Vision',
    status: 'Model training in progress',
    statusNote: 'Frontend deployed. Model inference not yet connected to the live site.',
    featured: false,
    accentColor: '#F59E0B',
    repoUrl: null,
    demoUrl: 'https://gems-guard-ai.vercel.app/',
    primaryAction: { label: 'View Frontend', url: 'https://gems-guard-ai.vercel.app/', external: true },
    features: [
      'YOLOv8n custom model training',
      'Missing stone detection focus',
      'OpenCV image preprocessing',
      'Frontend demo live on Vercel',
    ],
  },
];
