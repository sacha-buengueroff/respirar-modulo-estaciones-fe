const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080, // De cambiarse este puerto debera actualizarse el dockerfile
  },
})