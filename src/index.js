import Button from './packages/button';

// 所有组件
const components = {
  sButton: Button
}

export default function (Vue, options = {}) {
  Object.keys(components).forEach(name => {
    Vue.component(name, components[name]);
  })
}