import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const management: AppRouteModule = {
  path: '/management',
  name: 'Management',
  component: LAYOUT,
  redirect: '/management/user',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.management.management'),
  },
  children: [
    {
      path: 'user',
      name: 'User',
      component: () => import('/@/views/management/user/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.management.user'),
      },
    },
    // {
    //   path: 'workbench',
    //   name: 'Workbench',
    //   component: () => import('/@/views/dashboard/workbench/index.vue'),
    //   meta: {
    //     title: t('routes.dashboard.workbench'),
    //   },
    // },
  ],
};

export default management;
