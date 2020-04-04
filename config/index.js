const path = require('path')

const isProduction = process.env.WEBPACK_MODE === 'production'
const isDevelopment = !isProduction
const shouldUseSourceMap = isDevelopment
const shouldMinify = isProduction
const shouldPreload = false
const shouldPrefixCss = isProduction
const shouldHashName = isDevelopment
const shouldGenerateManifest = false

// paths
const rootDir = path.resolve(__dirname, '..')
const srcDir = path.join(rootDir, 'src')
const buildDir = path.join(rootDir, 'dist')
const scriptDir = path.join(srcDir, 'scripts')
const entry = {
  index: path.join(scriptDir, 'index.js')
}

if (shouldMinify) {
  entry['index.min'] = path.join(scriptDir, 'index.js')
}

module.exports = {
  isProduction,
  isDevelopment,
  shouldUseSourceMap,
  shouldMinify,
  shouldPreload,
  shouldPrefixCss,
  shouldHashName,
  shouldGenerateManifest,
  entry,
  rootDir,
  srcDir,
  buildDir
}