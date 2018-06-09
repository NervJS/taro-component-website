const path = require("path")
const MarkdownItContainer = require("markdown-it-container")

const CLIENT_PATH = path.join(__dirname, "src")

const utils = require(CLIENT_PATH + "/helper/utils")
const striptags = require(CLIENT_PATH + "/helper/strip-tags")

const vueMarkdown = {
  preprocess: (MarkdownIt, source) => {
    MarkdownIt.renderer.rules.table_open = function() {
      return '<table class="table">'
    }
    MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(
      MarkdownIt.renderer.rules.fence
    )
    return source
  },
  use: [
    [
      MarkdownItContainer,
      "demo",
      {
        validate: params => params.trim().match(/^demo\s*(.*)$/),
        render: (tokens, idx) => {
          if (tokens[idx].nesting === 1) {
            const html = utils.convertHtml(
              striptags(tokens[idx + 1].content, "script")
            )

            return `<demo-box>
                    <div slot="demo">${html}</div>
                    <div slot="source-code">`
          }

          // closing tag
          return "</div></demo-box>"
        }
      }
    ]
  ]
}

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('vue-markdown-loader')
        .loader('vue-markdown-loader')
        .options(vueMarkdown)
        .end()
  },
  configureWebpack: {
    resolve: {
      alias: {
        "~": CLIENT_PATH
      }
    }
  }
}
