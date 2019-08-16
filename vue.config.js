const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false,
  publicPath: ``,
  filenameHashing: true,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@as", resolve("src/assets"))
      .set("@cp", resolve("src/components"))
      .set("@service", resolve("src/service"))
      .set("@views", resolve("src/views"));
  },
  //webpack虚拟服务器
  devServer: {
    open: true
  }
};
