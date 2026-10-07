import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {config as dotenvconfig}  from "dotenv";

dotenvconfig();

/* TODO: change to read configuration from environment */
const blogEnabled = Boolean(process.env.BLOG_ENABLED === 'true')
const gitRepoUrl = process.env.GIT_REPOSITORY_URL || "https://github.com/coldicka/my-dso-blog";
const deploymentBranch = process.env.DEPLOYMENT_BRANCH || "main";

const config: Config = {
  title: 'CD Portfolio',
  tagline: 'Willkommen auf meinem Blog',
  favicon: 'img/cd-favicon.png',

  url:
    process.env.DEPLOYMENT_URL ||
    "https://coldicka.github.io",

  baseUrl:
    process.env.BASE_URL ||
   "/my-dso-blog/",

  // GitHub pages deployment config.
  organizationName: 
    process.env.GITHUB_USERNAME ||
    "coldicka", // Usually your GitHub org/user name.
  
  projectName: 
    process.env.GITHUB_REPOSITORY_NAME ||
    "my-dso-blog",

  deploymentBranch: process.env.DEPLOYMENT_BRANCH || "main",

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      de: {
        label: 'Deutsch',
      },
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
            editUrl: `${gitRepoUrl}/tree/${deploymentBranch ?? "main"}`
        },
        blog: blogEnabled ? 
          {
            showReadingTime: true,
            feedOptions: {
              type: ['rss', 'atom'],
              xslt: true,
            },
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl: `${gitRepoUrl}/tree/${deploymentBranch ?? "main"}`,
            // Useful options to enforce blogging best practices
            onInlineTags: 'warn',
            onInlineAuthors: 'warn',
            onUntruncatedBlogPosts: 'warn',
          }
          : false,
        theme: {
          customCss: './src/css/custom.scss',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-sass',
      {
        additionalData: `
          @use "sass:map";
          @use "@site/src/css/_variables.scss" as *;
        `,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/cd-social-card.png',
    navbar: {
      title: 'CD Portfolio',

      logo: {
        alt: 'CD Portfolio',
        src: 'img/cd-logo.png',
        href: '/',
      },

      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: gitRepoUrl,
          label: 'Github',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['powershell', 'hcl'],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
