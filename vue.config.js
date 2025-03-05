<<<<<<< HEAD
const {
  defineConfig
} = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ?
    '/portfolio2025/' // Replace with your repository name
    :
    '/'
});
=======
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
 publicPath: process.env.NODE_ENV === 'production' ? '/portfolio2025/' : '/'
});
>>>>>>> 9c5399188c42b3f86c18e2b1d3b60b22ba370817
