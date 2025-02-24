// Define paths for all assets
const frontend = '/icons/frontend.png';
const backend = '/icons/backend.png';
const ux = '/icons/ux.png';
const prototyping = '/icons/prototyping.png';
const javascript = '/tech/javascript.png';
const typescript = '/tech/typescript.png';
const html = '/tech/html.png';
const css = '/tech/css.png';
const reactjs = '/tech/reactjs.png';
const redux = '/tech/redux.png';
const tailwind = '/tech/tailwind.png';
const nodejs = '/tech/nodejs.png';
const git = '/tech/git.png';
const figma = '/tech/figma.png';
const docker = '/tech/docker.png';
const postgresql = '/tech/postgresql.png';
const rubyrails = '/tech/rubyrails.png';
const graphql = '/tech/graphql.png';
const tensorflow = '/tech/tensorflow.png';
const k8s = '/tech/k8s.png';
const ai = '/icons/ai.png';
const signal = '/icons/signal.png';

// Project images
const komikult = '/projects/komikult.png';
const leaderboard = '/projects/leaderboard.png';
const math = '/projects/math-magicians.png';
const movie = '/projects/movie-metro.png';
const nyeusi = '/projects/nyeusi.png';
const space = '/projects/space-hub.png';

// Company logos
const coverhunt = '/company/coverhunt.png';
const dcc = '/company/dcc.png';
const kelhel = '/company/kelhel.png';
const microverse = '/company/microverse.png';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'AI Engineer',
    icon: ai,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Signal Processing Engineer',
    icon: signal,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Kubernetes',
    icon: k8s,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Tensorflow',
    icon: tensorflow,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Backend Developer',
    company_name: 'Tata Consultancy Service',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Feb 2017 - Feb 2018',
  },
  {
    title: 'Signal Processing & AI Engineer',
    company_name: 'IMMS GmbH',
    icon: microverse,
    iconBg: '#333333',
    date: 'Aug 2022 - May 2023',
  },
  {
    title: 'Project Manager & AI Engineer',
    company_name: 'AiVader GmbH',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2023 - Mar 2024',
  },
  {
    title: 'AI Consultant',
    company_name: 'Self-employed',
    icon: dcc,
    iconBg: '#333333',
    date: 'April 2024 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/sayan-bhattacharya/AgentRAGroute',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description: 'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description: 'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };