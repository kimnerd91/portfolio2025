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