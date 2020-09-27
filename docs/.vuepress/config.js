const nav = require('./nav');
const sidebar = require('./sidebar');

module.exports = {
  title: 'StarUI',
  base: '/star-ui/',
  description: 'another lightweight ui toolkit for Vue.js 2.X',
  port: 8083, 
  themeConfig: {
    nav,
    sidebar
  }
}