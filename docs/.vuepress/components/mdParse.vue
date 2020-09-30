<template>
  <div class="md-parse" v-html="parseHTML">
  </div>
</template>

<script>
import Marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
export default {
  mounted () {
    console.log(this.$slots.default);
    Marked.setOptions({
        renderer: new Marked.Renderer(),
        highlight: function(code) {
          return hljs.highlightAuto(code).value;
        },
        pedantic: false,
        gfm: true,
        tables: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
      }
    );
  },
  computed: {
    parseHTML () {
      return Marked(this.$slots.default[0].text);
    }
  }
}
</script>

<style>

</style>