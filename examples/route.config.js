import navConfig from './nav.config.json';

const registeRoute = (navConfig) => {
  const route = [
    {
      name: '/',
      path: '/',
      component: r => r(require('./pages/index.vue'))
    },
    {
      name: 'component',
      path: '/component',
      redirect: '/component/installation',
      component: r => require.ensure([], () =>
        r(require('./pages/component.vue'))),
      children: []
    },
    {
      name: 'about',
      path: '/about',
      component: r => require.ensure([], () =>
        r(require('./pages/about.vue')))
    },
    {
      path: '*',
      redirect: '/'
    }
  ];
  Object.keys(navConfig).forEach((nav, index) => {
    navConfig[nav].forEach(item => {
      if (item.groups) {
        item.groups.forEach(group => {
          group.list.forEach(nav => {
            addRoute(nav);
          });
        });
      } else if (item.children) {
        item.children.forEach(nav => {
          addRoute(nav);
        });
      }
    });
  });

  function addRoute(page, index) {
    const component = r => r(require(`./docs${page.path}.md`));
    route[1].children.push({
      path: page.path.slice(1),
      meta: {
        title: (page.title || page.name)
      },
      name: 'component-' + (page.title || page.name),
      component: component
    });
  }

  return route;
};

const route = registeRoute(navConfig);
export default route;
