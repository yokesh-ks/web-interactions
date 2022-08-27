const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Components',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root:
          '/Users/yokeshks/Downloads/projects/web-interactions/packages/components/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Components',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root:
            '/Users/yokeshks/Downloads/projects/web-interactions/packages/components',
          templates:
            '/Users/yokeshks/Downloads/projects/web-interactions/node_modules/docz-core/dist/templates',
          docz:
            '/Users/yokeshks/Downloads/projects/web-interactions/packages/components/.docz',
          cache:
            '/Users/yokeshks/Downloads/projects/web-interactions/packages/components/.docz/.cache',
          app:
            '/Users/yokeshks/Downloads/projects/web-interactions/packages/components/.docz/app',
          appPackageJson:
            '/Users/yokeshks/Downloads/projects/web-interactions/packages/components/package.json',
          appTsConfig:
            '/Users/yokeshks/Downloads/projects/web-interactions/packages/components/tsconfig.json',
          gatsbyConfig:
            '/Users/yokeshks/Downloads/projects/web-interactions/packages/components/gatsby-config.js',
          gatsbyBrowser:
            '/Users/yokeshks/Downloads/projects/web-interactions/packages/components/gatsby-browser.js',
          gatsbyNode:
            '/Users/yokeshks/Downloads/projects/web-interactions/packages/components/gatsby-node.js',
          gatsbySSR:
            '/Users/yokeshks/Downloads/projects/web-interactions/packages/components/gatsby-ssr.js',
          importsJs:
            '/Users/yokeshks/Downloads/projects/web-interactions/packages/components/.docz/app/imports.js',
          rootJs:
            '/Users/yokeshks/Downloads/projects/web-interactions/packages/components/.docz/app/root.jsx',
          indexJs:
            '/Users/yokeshks/Downloads/projects/web-interactions/packages/components/.docz/app/index.jsx',
          indexHtml:
            '/Users/yokeshks/Downloads/projects/web-interactions/packages/components/.docz/app/index.html',
          db:
            '/Users/yokeshks/Downloads/projects/web-interactions/packages/components/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
