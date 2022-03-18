const path = require("path")
const { Resolver } = require('@parcel/plugin')

const plugin = new Resolver({
  async resolve({specifier, dependency}) {
    if (specifier === 'prando') {
      const [before, after] = dependency.resolveFrom.split('node_modules')
      const filePath = path.resolve(before, 'node_modules', 'prando', 'dist', 'Prando.umd.js')
      return {
        filePath: filePath,
      }
    }

    return null
  }
})

module.exports = plugin
module.exports.default = plugin
