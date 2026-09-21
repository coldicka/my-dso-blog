// Export Interfaces
export interface Tag {
  label: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  tags: Tag[];
  docPath: string;
  githubLink: string;
  image: string;
}

// export Data
export const AVAILABLE_TAGS: Record<string, Tag> = {
  python: {
    label: 'Python',
    icon: '/img/projects/icon_python.svg',
  },
  docker: {
    label: 'Docker',
    icon: '/img/projects/icon_container.svg',
  },
  django: {
    label: 'Django',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  },
  angular: {
    label: 'Angular',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  },
  nginx: {
    label: 'Nginx',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
  },
  githubActions: {
    label: 'GitHub Actions',
    icon: '/img/projects/icon_ci_cd.svg',
  },
  linux: {
    label: 'Linux',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  },
  security: {
    label: 'Security',
    icon: '/img/projects/icon_itSecurity.svg',
  },
  shell: {
    label: 'Shell',
    icon: '/img/github.svg',
  },
  git: {
    label: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  react: {
    label: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  typescript: {
    label: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  }
};

// Type safety for tag inputs (prevents arbitrary strings)
export type TagKey = keyof typeof AVAILABLE_TAGS;

// Export Help Component/Function
export function getTags(tagKeys: TagKey[]): Tag[] {
  return tagKeys
    .map((key) => AVAILABLE_TAGS[key])
    .filter((tag) => tag !== undefined);
}
