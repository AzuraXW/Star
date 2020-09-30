import Button from './packages/button'
import Icon from './packages/icon'
import ButtonGroup from './packages/buttonGroup';
import Dialog from './packages/dialog';

// 所有组件
const components = {
  sButton: Button,
  sIcon: Icon,
  sButtonGroup: ButtonGroup,
  SDialog: Dialog
}

export default function (Vue, options = {}) {
  Object.keys(components).forEach(name => {
    Vue.component(name, components[name])
  })
}
