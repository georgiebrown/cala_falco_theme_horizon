module.exports = {
  prefix: 'tw-',
  content: [
    './layout/**/*.liquid',
    './templates/**/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './blocks/**/*.liquid',
    './assets/**/*.js'
  ],
  corePlugins: {
    preflight: false,
  },
}