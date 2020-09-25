const withImages = require('next-images')

module.exports = withImages({
  distDir: 'build',
  webpack(config) {
    return config
  }
})
