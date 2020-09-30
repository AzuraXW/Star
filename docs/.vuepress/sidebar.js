const sidebar = {
  '/component/': [
    {
      title: '快速开始',
      collapsable: false,
      children: [
        'guide/introduction',
        'guide/guide'
      ]
    },
    {
      title: '组件',
      collapsable: false,
      children: [
        {
          title: 'Basic',
          collapsable: false,
          children: [
            'basic/icon',
            'basic/button'
          ]
        },
        {
          title: 'Form',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'Others',
          collapsable: false,
          children: [
            'others/dialog'
          ]
        }
      ]
    },
  ]
}

module.exports = sidebar;