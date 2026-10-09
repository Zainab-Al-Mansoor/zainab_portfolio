// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Zainab Al Mansoor',
  role: '.NET Developer & Full-Stack Software Engineer',
  location: 'Karachi, Pakistan',
  email: 'zainabalmansoor2024@gmail.com',
  phone: '+92 328 9212815',
  linkedin: 'https://www.linkedin.com/in/zainab-al-mansoor-a37bb631a/',
  github: 'https://github.com/Zainab-Al-Mansoor/',
  resume: '/Zainab_Al_Mansoor_Resume.pdf',
  intro:
    'I build secure, scalable web applications with C#, ASP.NET Core 8 and SQL Server, and I ship AI features that work in production. Currently a .NET Developer at Sirat International.',
};

export const services = [
  {
    title: 'Backend & APIs',
    icon: 'server',
    text: 'Enterprise web apps and REST APIs in C# and ASP.NET Core 8, with clean architecture, EF Core and tuned SQL Server queries.',
    tags: ['ASP.NET Core 8', 'EF Core', 'SQL Server'],
  },
  {
    title: 'Full-stack products',
    icon: 'layers',
    text: 'From database schema to responsive UI: secure sign-in, role-based dashboards and fast front ends that work on every screen.',
    tags: ['TypeScript', 'React / Angular', 'Tailwind CSS'],
  },
  {
    title: 'AI in production',
    icon: 'spark',
    text: 'Machine-learning features that ship: model training and evaluation in Python, served behind a real web app with a human in the loop.',
    tags: ['Python', 'XGBoost', 'TensorFlow.js'],
  },
];

export const marquee = ['C#', 'ASP.NET Core 8', 'Entity Framework Core', 'SQL Server', 'Microsoft Azure', 'TypeScript', 'React', 'Angular', 'Python', 'Flask', 'XGBoost', 'Laravel', 'Docker', 'Tailwind CSS', 'Git', 'REST APIs'];

export const highlights = [
  { value: '1.5+', unit: 'years', label: 'Professional experience at Sirat International' },
  { value: '8+', unit: 'apps', label: 'Live web applications in production' },
  { value: '93.4', unit: '%', label: 'Accuracy of the SonicSentinel AI classifier' },
  { value: '1st', unit: 'place', label: 'Database Designer of the Year, Tech Olympics 2026' },
];

export type Job = { title: string; company: string; dates: string; points: string[]; stack: string[] };

export const experience: Job[] = [
  {
    title: '.NET Developer',
    company: 'Sirat International',
    dates: 'Apr 2026 – Present',
    points: [
      'Architect enterprise web applications and REST APIs with ASP.NET Core 8 MVC, optimizing backend workflows and SQL Server scalability.',
      'Deploy and maintain production applications on Microsoft Azure with responsive Tailwind CSS front ends.',
    ],
    stack: ['C#', 'ASP.NET Core 8', 'SQL Server', 'Azure', 'Tailwind CSS'],
  },
  {
    title: 'Full-Stack Engineer',
    company: 'Sirat International',
    dates: 'Oct 2025 – Apr 2026',
    points: [
      'Engineered full-stack web applications, RESTful APIs and relational databases for the company’s international education portal: student onboarding, course listings and workflows.',
    ],
    stack: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'Git'],
  },
  {
    title: 'Web Designer',
    company: 'Sirat International',
    dates: 'Apr 2025 – Oct 2025',
    points: ['Designed responsive, accessible, mobile-first interfaces and optimized cross-browser performance.'],
    stack: ['HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'JavaScript'],
  },
];

export type Metric = { value: string; label: string };
export type Project = {
  name: string;
  tagline: string;
  role: string;
  context: string;
  summary: string;
  points: string[];
  metrics?: Metric[];
  stack: string[];
  live?: string;
  code?: string;
};

export const featured: Project[] = [
  {
    name: 'SonicSentinel AI',
    tagline: 'Hear the danger before you see it.',
    role: 'AI & Full-Stack Developer',
    context: 'Team project · Aptech competition · built in 5 days (Sep 2026)',
    summary:
      'A real-time acoustic safety monitor. It listens to uploaded audio or a live microphone, classifies every 2-second window into 10 sound classes such as gunshots, breaking glass, screams and calls for help, and explains why each alert fired.',
    points: [
      'Server-side XGBoost classifier on 299 acoustic features (MFCC, log-Mel, chroma, spectral contrast), tuned with GridSearchCV and GroupKFold against Random Forest and MLP.',
      'A second, independent Google Teachable Machine model runs in the browser with TensorFlow.js. Decision logic compares both, flags unknown or overlapping sounds and drives an alert-rule engine.',
      'Flask 3 backend with five user roles, hashed passwords, CSRF protection, account lockout, a human review queue and a full audit trail.',
      'Data pipeline over 6,938 clips (about 10.5 hours) from UrbanSound8K, ESC-50, MIMII and Kaggle, split by source clip to prevent leakage.',
    ],
    metrics: [
      { value: '93.4%', label: 'accuracy on 1,041 unseen clips' },
      { value: '0.945', label: 'macro-F1 score' },
      { value: '0.99', label: 'gunshot recall' },
      { value: '66', label: 'automated pytest tests' },
    ],
    stack: ['Python', 'Flask', 'XGBoost', 'scikit-learn', 'TensorFlow.js', 'librosa', 'SQLAlchemy', 'Tailwind CSS', 'Docker', 'Railway'],
    live: 'https://sonicsentinel-ai-production.up.railway.app/',
  },
  {
    name: 'Realtor’s Portal',
    tagline: 'Real-estate marketplace for buyers, sellers and agents.',
    role: 'Lead Full-Stack Engineer',
    context: 'Aptech · Project of the Month',
    summary:
      'A property marketplace with listings across Pakistan, an agent directory, search filters and image uploads, built on Clean Architecture with ASP.NET Core 8 MVC.',
    points: [
      'Entity Framework Core (Code-First) with async LINQ queries and T-SQL migrations for properties, agents and leads.',
      'ASP.NET Core Identity, JWT bearer tokens and role-based access control protect admin endpoints.',
      'Email notifications run in IHostedService background workers to keep requests fast.',
    ],
    stack: ['C#', 'ASP.NET Core 8 MVC', 'EF Core', 'SQL Server', 'Identity', 'JWT', 'Tailwind CSS'],
    live: 'http://realtors.runasp.net/',
  },
];

export const moreProjects = [
  { name: 'CARE', desc: 'Healthcare management system with role-based panels for patients, physicians and admins.', stack: 'PHP · MySQL · Tailwind CSS' },
  { name: 'Sirat-ul-Jinan Academy', desc: 'Student registration and a custom CMS with admin reporting.', stack: 'PHP · MySQL · JavaScript', live: 'https://www.siratacademy.com.pk/' },
  { name: 'E-Kart', desc: 'Electronics store with a live REST API catalog, instant search and a persistent cart.', stack: 'JavaScript · REST APIs', live: 'https://zainab-al-mansoor.github.io/E-Kart/' },
  { name: 'A-Bari Dental', desc: 'Wireframes and high-fidelity prototypes for frictionless patient booking.', stack: 'Figma · UI/UX', live: 'https://www.abaridental.com.pk/' },
  { name: 'Merciado Amusement Park', desc: 'Ticketing portal with form validation and animated interactions.', stack: 'jQuery · Bootstrap 5', live: 'https://zainab-al-mansoor.github.io/Merciado-Amusement-Park/' },
  { name: 'Cell Info', desc: 'Phone specifications site deployed through GitHub Pages.', stack: 'HTML5 · CSS3 · JavaScript', live: 'https://qirat-al-mansoor.github.io/CELLINFO/index.html/' },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Backend', items: ['C#', 'ASP.NET Core 8 MVC / Web API', 'Entity Framework Core', 'LINQ', 'Laravel', 'Flask', 'Node.js', 'RESTful APIs'] },
  { group: 'Frontend', items: ['TypeScript', 'JavaScript (ES6+)', 'React', 'Angular', 'Tailwind CSS', 'Bootstrap 5', 'Material UI', 'jQuery'] },
  { group: 'Data', items: ['SQL Server', 'T-SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Stored Procedures', 'Query Optimization'] },
  { group: 'AI / ML', items: ['Python', 'scikit-learn', 'XGBoost', 'TensorFlow.js', 'Teachable Machine', 'librosa', 'Feature Engineering', 'Model Evaluation'] },
  { group: 'Security & architecture', items: ['ASP.NET Identity', 'JWT', 'RBAC', 'CSRF protection', 'Clean Architecture', 'Repository Pattern', 'Dependency Injection', 'OOP'] },
  { group: 'Tools', items: ['Git & GitHub', 'Docker', 'CI/CD', 'Microsoft Azure', 'Railway', 'Visual Studio', 'pytest', 'Figma'] },
];

export const awards = [
  { title: 'Database Designer of the Year — 1st place', org: 'Tech Olympics 2026, 100+ participants', url: 'https://drive.google.com/file/d/1DawaTVKXItror6PW5hU12oUH4XcbDfA5/view?usp=sharing' },
  { title: 'Project of the Month, ASP.NET Core 8 MVC', org: 'Aptech Pakistan, 2026', url: 'https://drive.google.com/file/d/1VfYNJ72Nh4Lq8lfwTIbycJzHxAjaave2/view?usp=sharing' },
  { title: 'Academic Distinction in Full-Stack Development', org: 'Aptech Pakistan, 2025', url: 'https://drive.google.com/file/d/1JZCDFjX-rhBxUXKzUQuxAjCoOu7yo7el/view?usp=sharing' },
  { title: 'Academic Distinction in Information Systems Management', org: 'Aptech Pakistan, 2025', url: 'https://drive.google.com/file/d/1oR768JweNP6g6vNs19Pcp8qrOCcBIYO8/view?usp=sharing' },
];

export const education = [
  { title: 'Higher Diploma in Software Engineering (ACCP AI Program)', school: 'Aptech Computer Education', dates: 'Nov 2025 – Present' },
  { title: 'Certificate of Proficiency in Information Systems Management', school: 'Aptech Computer Education', dates: 'May 2025 – Oct 2025' },
  { title: 'Diploma in Information Systems Management', school: 'Aptech Computer Education', dates: 'Nov 2024 – Apr 2025' },
];
