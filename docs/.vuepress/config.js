const nav = require('./nav');
const sidebar = require('./sidebar');

module.exports = {
  title: 'StarxUI',
  base: '/starx-ui/',
  head: [
    ['script', { charset: "utf-8", src: "/js/disable-user-zoom.js" }]
  ],
  description: 'another lightweight ui toolkit for Vue.js 2.X',
  port: 8083, 
  themeConfig: {
    nav,
    sidebar
  }
}