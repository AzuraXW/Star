import Button from './packages/button';
import Icon from './packages/icon';
import ButtonGroup from './packages/buttonGroup';
import Dialog from './packages/dialog';
import Input from './packages/input';

// 所有组件
const components = {
  sButton: Button,
  sIcon: Icon,
  sButtonGroup: ButtonGroup,
  sDialog: Dialog,
  sInput: Input
};

export default function(Vue, options = {}) {
  Object.keys(components).forEach(name => {
    Vue.component(name, components[name]);
  });
}
