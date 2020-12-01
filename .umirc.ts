import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Reone',
  mode: 'site',
  favicon: 'https://avatars2.githubusercontent.com/u/73589642?s=200',
  logo: 'https://avatars2.githubusercontent.com/u/73589642?s=200',
  navs: [
    { title: '文档', path: '/docs' },
    { title: '博客', path: '/blog' },
    { title: 'GitHub', path: 'https://github.com/reonejs/reone' },
  ],
});
