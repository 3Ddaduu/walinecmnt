import { hopeTheme } from 'vuepress-theme-hope';
import { enNavbarConfig, zhNavbarConfig } from './navbar.js';
import { enSidebarConfig, zhSidebarConfig } from './sidebar.js';

export default hopeTheme(
  {
    // --- 1. Basic Settings ---
    hostname: 'https://waline.js.org',
    favicon: '/favicon.ico',
    logo: '/logo.png',
    repo: 'walinejs/waline',
    docsDir: 'docs/src',
    docsBranch: 'main',

    pageInfo: ['ReadingTime', 'PageView'],
    contributors: false,

    // --- 2. Localization Settings ---
    locales: {
      '/': {
        navbar: zhNavbarConfig,
        sidebar: zhSidebarConfig,
        footer: 'GPL-2.0 协议 | Copyright © 2020-present lizheming',
        displayFooter: true,
      },
      '/en/': {
        navbar: enNavbarConfig,
        sidebar: enSidebarConfig,
        footer: 'GPL-2.0 LICENSE | Copyright © 2020-present lizheming',
        displayFooter: true,
      },
    },

    // --- 3. Markdown Features ---
    markdown: {
      codeTabs: true,
      figure: true,
      math: {
        type: 'mathjax',
      },
      sub: true,
      sup: true,
      tasklist: true,
    },

    // --- 4. Comment Settings (Waline) ---
    comment: {
      provider: 'Waline',
      serverURL: "https://walinecmnt-docs.vercel.app", // Use your URL here
      tex: false,      // Disables MathJax in comments to avoid errors
      pageview: false, // Disables pageview counts to avoid Rollup errors
      locales: {
        '/': {
          admin: '可爱的管理员',
          level0: '锻体',
          level1: '炼气',
          level2: '筑基',
          level3: '金丹',
          level4: '元婴',
          level5: '化神',
        },
        '/en/': {
          admin: 'GM',
          level0: 'Dwarves',
          level1: 'Hobbits',
          level2: 'Ents',
          level3: 'Wizards',
          level4: 'Elves',
          level5: 'Maiar',
        },
      },
    },

    // --- 5. Additional Components & Icons ---
    components: {
      components: ['BiliBili', 'VidStack'],
    },

    docsearch: {
      appId: 'W34KABV4KM',
      apiKey: 'd189586c601d439f9247bdaf95b3555f',
      indexName: 'waline',
    },

    icon: {
      assets: '//at.alicdn.com/t/c/font_3180165_6o97v6oir2j.css',
    },
  },
  // The second argument for hopeTheme handles behavior options like 'custom'
  { custom: true }
);
