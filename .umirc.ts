import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '../layout',
      routes: [
        { path: '/helloworld', component: '../pages/index' },
        { path: 'puzzlecards', component: '../pages/puzzlecards' },
        {
          path: '/dashboard',
          routes: [
            {
              path: '/dashboard/analysis',
              component: '../pages/Dashboard/Analysis',
            },
            {
              path: '/dashboard/monitor',
              component: '../pages/Dashboard/Monitor',
            },
            {
              path: '/dashboard/workplace',
              component: '../pages/Dashboard/Workplace',
            },
          ],
        },
      ],
    },
  ],
  fastRefresh: {},
});
