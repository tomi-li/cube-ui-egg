<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Upload
      action="//127.0.0.1:7001/upload"
      :simultaneous-uploads="1"
      @files-added="filesAdded" />
  </div>
</template>

<script>
  import { Upload } from 'cube-ui';

  export default {
    name: 'app',
    components: { Upload },
    methods: {
      filesAdded(files) {
        const maxSize = 1 * 1024 * 1024; // 1M
        for (let k in files) {
          const file = files[k];
          if (file.size > maxSize) {
            file.ignore = true;
          }
        }
      }
    }
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
