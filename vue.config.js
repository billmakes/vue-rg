const theme = 'red'

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "./src/styles/main";
        @import "./src/styles/${theme}/variables";
        `
      }
    }
  }
}
