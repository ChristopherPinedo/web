import { v4 as uuidV4 } from 'uuid';
import { areas } from './areas';

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiJest,
  SiTestinglibrary,
  SiReactrouter,
  SiReacthookform,
  SiRedux,
  SiNodedotjs,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJirasoftware,
  SiNotion,
  SiFigma,
  SiMiro,
  SiAdobeillustrator,
  SiMui,
  SiStyledcomponents,
  SiSass,
  // SiNormalizedotcss,
  SiBem,
  SiTailwindcss,
  // SiVite,
  // SiNextdotjs,
  // SiNextui,
  // SiPlaywright,
  // SiStorybook,
  // SiCreatereactapp,
  SiShadcnui,
  SiReactquery,
  SiCreatereactapp,
  SiVite,
  SiNormalizedotcss,
  SiVitest,
  SiMysql,
  SiMicrosoftsqlserver,
  SiPostgresql,
  SiSupabase,
  SiExpo,
  SiStorybook,
  SiPlaywright,
  SiNextui,
  SiNextdotjs,
  SiCsharp,
  SiDotnet,
  SiBlazor,
  SiStrapi
  // SiExpo
} from 'react-icons/si';

import { TbAtom2 } from 'react-icons/tb';
// import { GiDatabase } from 'react-icons/gi';

const types = {
  lang: {
    name: 'Language',
    value: 70,
    types: {
      langMark: 'Markup language',
      langStyle: 'Style language',
      langProg: 'Programing language',
      langSset: 'Language superset',
      langQuery: 'Query language'
    }
  },
  lib: {
    name: 'Library',
    value: 30,
    types: {
      libUi: 'UI library',
      libComp: 'Component library',
      libRoute: 'Routing library',
      libTesting: 'Testing Library',
      libstateMgt: 'State management library',
      libFormVal: 'Form validation library',
      libStyle: 'Style library',
      libWebRequest: 'Web request management library'
    }
  },
  frw: {
    name: 'Framework',
    value: 50,
    types: {
      frwJs: 'JS framework',
      frwNode: 'Node framework',
      frwReact: 'React framework',
      frwCSharp: 'C# framework'
    }
  },
  rtm: {
    name: 'Runtime',
    value: 50,
    types: {
      rtmJsBrowser: 'Browser Js Runtime',
      rtmJsCross: 'Cross Platform Js Runtime'
    }
  },
  db: {
    name: 'Database',
    value: 60,
    types: {
      dbEngine: 'Database Engine'
    }
  },
  pckRun: {
    name: 'Package runner',
    value: 20,
    types: {
      pckRunJs: 'Javascript package runner'
    }
  },
  cloud: {
    name: 'Cloud computing',
    value: 80,
    types: {
      paas: 'Platform as a service',
      iaas: 'Infrastructure as a service',
      saas: 'Software as a service',
      baas: 'Backend as a service'
    }
  },
  vcs: {
    name: 'Version control system',
    value: 50,
    types: {
      center: 'Centralized version control',
      distrib: 'Distributed version control'
    }
  },
  prjMgt: {
    name: 'Project Management',
    value: 50,
    types: {
      agile: 'Agile project management',
      wfall: 'Waterfall project management'
    }
  },
  app: {
    name: 'App',
    value: 80,
    types: {
      design: 'Design app',
      management: 'Management App'
    }
  },
  methodology: {
    name: 'Methodology',
    value: 50,
    types: {
      design: 'Design methodology',
      development: 'Development methodology'
    }
  }
};

const technologies = {
  git: {
    id: uuidV4(),
    name: 'Git',
    area: areas.management.name,
    group: types.vcs.name,
    type: types.vcs,
    typeDef: types.vcs.types.distrib,
    icon: <SiGit />,
    color: '#f05539',
    colorLayer1: '#f05539',
    colorLayer2: 'grey.200',
    ecosystem: ['git'],
    state: 'conocida'
  },
  github: {
    id: uuidV4(),
    name: 'Github',
    area: areas.management.name,
    group: types.vcs.name,
    type: types.vcs,
    typeDef: types.vcs.types.distrib,
    icon: <SiGithub />,
    color: 'grey.800',
    colorLayer1: 'grey.800',
    colorLayer2: 'grey.200',
    ecosystem: ['git'],
    state: 'conocida'
  },
  jira: {
    id: uuidV4(),
    name: 'Jira',
    area: areas.management.name,
    group: types.prjMgt.name,
    type: types.prjMgt,
    typeDef: types.prjMgt.types.agile,
    icon: <SiJirasoftware />,
    color: '#2580f7',
    colorLayer1: '#2580f7',
    colorLayer2: 'grey.200',
    ecosystem: ['management'],
    state: 'conocida'
  },
  notion: {
    id: uuidV4(),
    name: 'Notion',
    area: areas.management.name,
    group: types.app.name,
    type: types.app,
    typeDef: types.app.types.management,
    icon: <SiNotion />,
    color: 'grey.200',
    colorLayer1: 'grey.200',
    colorLayer2: 'grey.800',
    ecosystem: ['management'],
    state: 'conocida'
  },
  html: {
    id: uuidV4(),
    name: 'Html',
    area: areas.frontend.name,
    group: types.lang.name,
    type: types.lang,
    typeDef: types.lang.types.langMark,
    icon: <SiHtml5 />,
    color: '#ec7430',
    colorLayer1: '#ec7430',
    colorLayer2: 'grey.200',
    ecosystem: ['html'],
    state: 'conocida'
  },
  css: {
    id: uuidV4(),
    name: 'Css',
    area: areas.frontend.name,
    group: types.lang.name,
    type: types.lang,
    typeDef: types.lang.types.langStyle,
    icon: <SiCss3 />,
    color: '#2862e9',
    colorLayer1: '#2862e9',
    colorLayer2: 'grey.200',
    ecosystem: ['css'],
    state: 'conocida'
  },
  js: {
    id: uuidV4(),
    name: 'Javascript',
    area: areas.frontend.name,
    group: types.lang.name,
    type: types.lang,
    typeDef: types.lang.types.langProg,
    icon: <SiJavascript />,
    color: '#efd81d',
    colorLayer1: 'grey.800',
    colorLayer2: '#efd81d',
    ecosystem: ['javascript'],
    state: 'conocida'
  },
  react: {
    id: uuidV4(),
    name: 'React',
    area: areas.frontend.name,
    group: types.lib.name,
    type: types.lib,
    typeDef: types.lib.types.libUi,
    icon: <SiReact />,
    color: '#5bd9fb',
    colorLayer1: 'grey.800',
    colorLayer2: '#5bd9fb',
    ecosystem: ['javascript', 'react'],
    state: 'conocida'
  },
  cra: {
    id: uuidV4(),
    name: 'Create React App',
    area: areas.frontend.name,
    group: types.pckRun.name,
    type: types.pckRun,
    typeDef: types.pckRun.types.pckRunJs,
    icon: <SiCreatereactapp />,
    color: '#09d3ac',
    colorLayer1: '#09d3ac',
    colorLayer2: 'grey.800',
    ecosystem: ['javascript', 'react'],
    state: 'conocida'
  },
  vite: {
    id: uuidV4(),
    name: 'Vite',
    area: areas.frontend.name,
    group: types.pckRun.name,
    type: types.pckRun,
    typeDef: types.pckRun.types.pckRunJs,
    icon: <SiVite />,
    color: '#a842f6',
    colorLayer1: '#a842f6',
    colorLayer2: '#f6c928',
    ecosystem: ['javascript', 'react'],
    state: 'conocida'
  },
  ts: {
    id: uuidV4(),
    name: 'Typescript',
    area: areas.frontend.name,
    group: types.lang.name,
    type: types.lang,
    typeDef: types.lang.types.langSset,
    icon: <SiTypescript />,
    color: '#377cc8',
    colorLayer1: 'grey.200',
    colorLayer2: '#377cc8',
    ecosystem: ['javascript'],
    state: 'conocida'
  },
  blazor: {
    id: uuidV4(),
    name: 'Blazor',
    area: areas.frontend.name,
    group: types.frw.name,
    type: types.frw,
    typeDef: types.frw.types.frwCSharp,
    icon: <SiBlazor />,
    color: '#592c8c',
    colorLayer1: 'grey.200',
    colorLayer2: '#592c8c',
    ecosystem: ['javascript'],
    state: 'pendiente'
  },
  node: {
    id: uuidV4(),
    name: 'Node.js',
    area: areas.backend.name,
    group: types.rtm.name,
    type: types.rtm,
    typeDef: types.rtm.types.rtmJsCross,
    icon: <SiNodedotjs />,
    color: '#58a149',
    colorLayer1: '#58a149',
    colorLayer2: 'grey.200',
    ecosystem: ['javascript'],
    state: 'conocida'
  },
  // sql: {
  //   id: uuidV4(),
  //   name: 'SQL',
  //   area: areas.backend.name,
  //   group: types.lang.name,
  //   type: types.lang,
  //   typeDef: types.lang.types.langQuery,
  //   icon: <GiDatabase />,
  //   color: '#424242',
  //   colorLayer1: 'grey.800',
  //   colorLayer2: 'grey.200',
  //   ecosystem: ['Database'],
  //   state: 'conocida'
  // },
  sqlServer: {
    id: uuidV4(),
    name: 'SQL Server',
    area: areas.backend.name,
    group: types.db.name,
    type: types.db,
    typeDef: types.db.types.dbEngine,
    icon: <SiMicrosoftsqlserver />,
    color: '#ef372e',
    colorLayer1: 'grey.200',
    colorLayer2: '#ef372e',
    ecosystem: ['Database'],
    state: 'aprendiendo'
  },
  mySql: {
    id: uuidV4(),
    name: 'MySQL',
    area: areas.backend.name,
    group: types.db.name,
    type: types.db,
    typeDef: types.db.types.dbEngine,
    icon: <SiMysql />,
    color: '#e48e00',
    colorLayer1: 'grey.200',
    colorLayer2: '#e48e00',
    ecosystem: ['Database'],
    state: 'pendiente'
  },
  cSharp: {
    id: uuidV4(),
    name: 'C#',
    area: areas.backend.name,
    group: types.lang.name,
    type: types.lang,
    typeDef: types.lang.types.langQuery,
    icon: <SiCsharp />,
    color: '#9078e3',
    colorLayer1: '#9078e3',
    colorLayer2: 'grey.200',
    ecosystem: ['Language'],
    state: 'aprendiendo'
  },
  dotNet: {
    id: uuidV4(),
    name: '.NET',
    area: areas.backend.name,
    group: types.frw.name,
    type: types.frw,
    typeDef: types.frw.types.frwCSharp,
    icon: <SiDotnet />,
    color: '#5632d5',
    colorLayer1: '#5632d5',
    colorLayer2: 'grey.200',
    ecosystem: ['Language'],
    state: 'pendiente'
  },
  strapi: {
    id: uuidV4(),
    name: 'Strapi',
    area: areas.backend.name,
    group: types.frw.name,
    type: types.frw,
    typeDef: types.frw.types.frwJs,
    icon: <SiStrapi />,
    color: '#5632d5',
    colorLayer1: 'grey.200',
    colorLayer2: '#4f4bfe',
    ecosystem: ['Framework'],
    state: 'pendiente'
  },
  postgreSql: {
    id: uuidV4(),
    name: 'PostgreSQL',
    area: areas.backend.name,
    group: types.db.name,
    type: types.db,
    typeDef: types.db.types.dbEngine,
    icon: <SiPostgresql />,
    color: '#396c94',
    colorLayer1: 'grey.200',
    colorLayer2: '#396c94',
    ecosystem: ['Database'],
    state: 'pendiente'
  },
  reactNative: {
    id: uuidV4(),
    name: 'React Native',
    area: areas.frontend.name,
    group: types.lib.name,
    type: types.lib,
    typeDef: types.lib.types.libUi,
    icon: <SiReact />,
    color: '#5bd9fb',
    colorLayer1: '#5bd9fb',
    colorLayer2: 'grey.800',
    ecosystem: ['javascript', 'react'],
    state: 'pendiente'
  },
  expo: {
    id: uuidV4(),
    name: 'Expo',
    area: areas.frontend.name,
    group: types.lib.name,
    type: types.lib,
    typeDef: types.lib.types.libUi,
    icon: <SiExpo />,
    color: 'grey.200',
    colorLayer1: 'grey.200',
    colorLayer2: 'grey.800',
    ecosystem: ['javascript', 'react'],
    state: 'pendiente'
  },
  firebase: {
    id: uuidV4(),
    name: 'Firebase',
    area: areas.backend.name,
    group: types.cloud.name,
    type: types.cloud,
    typeDef: types.cloud.types.baas,
    icon: <SiFirebase />,
    color: '#ffcd32',
    colorLayer1: 'grey.800',
    colorLayer2: '#ffcd32',
    ecosystem: ['javascript'],
    state: 'conocida'
  },
  supabase: {
    id: uuidV4(),
    name: 'Supabase',
    area: areas.backend.name,
    group: types.cloud.name,
    type: types.cloud,
    typeDef: types.cloud.types.baas,
    icon: <SiSupabase />,
    color: '#47cf93',
    colorLayer1: 'grey.800',
    colorLayer2: '#47cf93',
    ecosystem: ['javascript'],
    state: 'pendiente'
  },
  jest: {
    id: uuidV4(),
    name: 'Jest',
    area: areas.testing.name,
    group: types.lib.name,
    type: types.lib,
    typeDef: types.lib.types.libTesting,
    icon: <SiJest />,
    color: '#ca451a',
    colorLayer1: '#ca451a',
    colorLayer2: 'grey.200',
    ecosystem: ['javascript'],
    state: 'conocida'
  },
  SiVitest: {
    id: uuidV4(),
    name: 'Vitest',
    area: areas.testing.name,
    group: types.lib.name,
    type: types.lib,
    typeDef: types.lib.types.libTesting,
    icon: <SiVitest />,
    color: '#a842f6',
    colorLayer1: '#6aa108',
    colorLayer2: '#f6c928',
    ecosystem: ['javascript'],
    state: 'conocida'
  },
  reactTestingLibrary: {
    id: uuidV4(),
    name: 'React Testing Library',
    area: areas.testing.name,
    group: types.lib.name,
    type: types.lib,
    typeDef: types.lib.types.libTesting,
    icon: <SiTestinglibrary />,
    color: '#ff4949',
    colorLayer1: '#ff4949',
    colorLayer2: 'grey.200',
    ecosystem: ['javascript', 'React.js'],
    state: 'conocida'
  },
  reactRouter: {
    id: uuidV4(),
    name: 'React Router',
    area: areas.frontend.name,
    group: types.lib.name,
    type: types.lib,
    typeDef: types.lib.types.libRoute,
    icon: <SiReactrouter />,
    color: '#d10a22',
    colorLayer1: 'grey.200',
    colorLayer2: '#d10a22',
    ecosystem: ['javascript', 'React.js'],
    state: 'conocida'
  },
  reactHookForm: {
    id: uuidV4(),
    name: 'React Hook Form',
    area: areas.frontend.name,
    group: types.lib.name,
    type: types.lib,
    typeDef: types.lib.types.libFormVal,
    icon: <SiReacthookform />,
    color: '#ed5e93',
    colorLayer1: '#ed5e93',
    colorLayer2: 'grey.200',
    ecosystem: ['javascript', 'React.js'],
    state: 'conocida'
  },
  tanStackQuery: {
    id: uuidV4(),
    name: 'TanStack Query',
    area: areas.frontend.name,
    group: types.lib.name,
    type: types.lib,
    typeDef: types.lib.types.libWebRequest,
    icon: <SiReactquery />,
    color: '#ff4759',
    colorLayer1: '#ff4759',
    colorLayer2: '#ffda52',
    ecosystem: ['javascript', 'React.js'],
    state: 'conocida'
  },
  redux: {
    id: uuidV4(),
    name: 'Redux',
    area: areas.frontend.name,
    group: types.lib.name,
    type: types.lib,
    typeDef: types.lib.types.libstateMgt,
    icon: <SiRedux />,
    color: '#764abc',
    colorLayer1: 'grey.200',
    colorLayer2: '#764abc',
    ecosystem: ['javascript', 'React.js'],
    state: 'conocida'
  },
  mui: {
    id: uuidV4(),
    name: 'Material UI',
    area: areas.frontend.name,
    group: types.lib.name,
    type: types.lib,
    typeDef: types.lib.types.libComp,
    icon: <SiMui />,
    color: '#007fff',
    colorLayer1: 'grey.200',
    colorLayer2: '#007fff',
    ecosystem: ['design'],
    state: 'conocida'
  },
  shadcn: {
    id: uuidV4(),
    name: 'Shadcn/ui',
    area: areas.frontend.name,
    group: types.lib.name,
    type: types.lib,
    typeDef: types.lib.types.libComp,
    icon: <SiShadcnui />,
    color: 'black',
    colorLayer1: 'black',
    colorLayer2: 'grey.200',
    ecosystem: ['design'],
    state: 'conocida'
  },
  tailwind: {
    id: uuidV4(),
    name: 'Tailwind Css',
    area: areas.frontend.name,
    group: types.lib.name,
    type: types.lib,
    typeDef: types.lib.types.libStyle,
    icon: <SiTailwindcss />,
    color: '#06B6D4',
    colorLayer1: 'grey.200',
    colorLayer2: '#06B6D4',
    ecosystem: ['design'],
    state: 'conocida'
  },
  next: {
    id: uuidV4(),
    name: 'Next.js',
    area: areas.frontend.name,
    group: types.frw.name,
    type: types.frw,
    typeDef: types.frw.types.frwReact,
    icon: <SiNextdotjs />,
    color: 'black',
    colorLayer1: 'grey.200',
    colorLayer2: 'black',
    ecosystem: ['design'],
    state: 'aprendiendo'
  },
  nextUi: {
    id: uuidV4(),
    name: 'Next UI',
    area: areas.frontend.name,
    group: types.lib.name,
    type: types.lib,
    typeDef: types.lib.types.libComp,
    icon: <SiNextui />,
    color: 'black',
    colorLayer1: 'grey.200',
    colorLayer2: 'black',
    ecosystem: ['design'],
    state: 'aprendiendo'
  },
  playwright: {
    id: uuidV4(),
    name: 'Playwright',
    area: areas.testing.name,
    group: types.lib.name,
    type: types.lib,
    typeDef: types.lib.types.libTesting,
    icon: <SiPlaywright />,
    color: '#dc594f',
    colorLayer1: '#dc594f',
    colorLayer2: '#2EAD33',
    ecosystem: ['design'],
    state: 'aprendiendo'
  },
  storybook: {
    id: uuidV4(),
    name: 'Storybook',
    area: areas.testing.name,
    group: types.lib.name,
    type: types.lib,
    typeDef: types.lib.types.libTesting,
    icon: <SiStorybook />,
    color: '#FF4785',
    colorLayer1: 'grey.200',
    colorLayer2: '#FF4785',
    ecosystem: ['design'],
    state: 'pendiente'
  },
  sass: {
    id: uuidV4(),
    name: 'Sass',
    area: areas.frontend.name,
    group: types.lib.name,
    type: types.lib,
    typeDef: types.lib.types.libStyle,
    icon: <SiSass />,
    color: '#CC6699',
    colorLayer1: 'grey.200',
    colorLayer2: '#CC6699',
    ecosystem: ['design'],
    state: 'conocida'
  },
  styledComp: {
    id: uuidV4(),
    name: 'Styled Components',
    area: areas.frontend.name,
    group: types.lib.name,
    type: types.lib,
    typeDef: types.lib.types.libStyle,
    icon: <SiStyledcomponents />,
    color: '#DB7093',
    colorLayer1: 'grey.200',
    colorLayer2: '#DB7093',
    ecosystem: ['design'],
    state: 'conocida'
  },
  normalCss: {
    id: uuidV4(),
    name: 'Normalize Css',
    area: areas.frontend.name,
    group: types.lib.name,
    type: types.lib,
    typeDef: types.lib.types.libStyle,
    icon: <SiNormalizedotcss />,
    color: '#E3695F',
    colorLayer1: 'grey.200',
    colorLayer2: '#E3695F',
    ecosystem: ['design'],
    state: 'conocida'
  },
  figma: {
    id: uuidV4(),
    name: 'Figma',
    area: areas.design.name,
    group: types.app.name,
    type: types.app,
    typeDef: types.app.types.design,
    icon: <SiFigma />,
    color: '#5551ff',
    colorLayer1: 'grey.200',
    colorLayer2: '#5551ff',
    ecosystem: ['javascript', 'React.js'],
    state: 'conocida'
  },
  miro: {
    id: uuidV4(),
    name: 'Miro',
    area: areas.design.name,
    group: types.app.name,
    type: types.app,
    typeDef: types.app.types.design,
    icon: <SiMiro />,
    color: '#ffdd33',
    colorLayer1: '#ffdd33',
    colorLayer2: 'grey.800',
    ecosystem: ['design'],
    state: 'conocida'
  },
  illustrator: {
    id: uuidV4(),
    name: 'Adobe Illustrator',
    area: areas.design.name,
    group: types.app.name,
    type: types.app,
    typeDef: types.app.types.design,
    icon: <SiAdobeillustrator />,
    color: '#330000',
    colorLayer1: '#ff9a00',
    colorLayer2: '#330000',
    ecosystem: ['design'],
    state: 'conocida'
  },
  bem: {
    id: uuidV4(),
    name: 'BEM',
    area: areas.design.name,
    group: types.methodology.name,
    type: types.methodology,
    typeDef: types.methodology.types.design,
    icon: <SiBem />,
    color: 'grey.200',
    colorLayer1: 'grey.200',
    colorLayer2: 'grey.800',
    ecosystem: ['design methodologies'],
    state: 'conocida'
  },
  atomicDsg: {
    id: uuidV4(),
    name: 'Atomic Design',
    area: areas.design.name,
    group: types.methodology.name,
    type: types.methodology,
    typeDef: types.methodology.types.design,
    icon: <TbAtom2 />,
    color: '#bc6719',
    colorLayer1: 'grey.800',
    colorLayer2: '#bc6719',
    ecosystem: ['design methodologies'],
    state: 'conocida'
  }
};

export { technologies };
