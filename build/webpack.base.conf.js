"use strict"
const path = require("path")
const utils = require("./utils")
const config = require("../config")
const vueLoaderConfig = require("./vue-loader.conf")

const striptags = require("./strip-tags")
const MarkdownItContainer = require("markdown-it-container")
const MarkdownItCheckBox = require("markdown-it-checkbox")

function resolve(dir) {
  return path.join(__dirname, "..", dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: "eslint-loader",
  enforce: "pre",
  include: [resolve("src"), resolve("test")],
  options: {
    formatter: require("eslint-friendly-formatter"),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

const vueMarkdown = {
  preventExtract: true,
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
    ],
    [
      MarkdownItCheckBox,
      {
        divWrap: true,
        divClass: "at-component-markdown_checkbox",
      }
    ]
  ]
}

module.exports = {
  context: path.resolve(__dirname, "../"),
  entry: {
    app: "./src/main.js"
  },
  output: {
    path: config.build.assetsRoot,
    filename: "[name].js",
    publicPath:
      process.env.NODE_ENV === "production"
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": resolve("src"),
      "~assets": resolve("src/assets/")
    }
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [
          resolve("src"),
          resolve("test"),
          resolve("node_modules/webpack-dev-server/client")
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("img/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("media/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("fonts/[name].[hash:7].[ext]"),
          publicPath: process.env.NODE_ENV === "production" ? "../../" : "/"
        }
      },
      {
        test: /\.md$/,
        loader: "vue-markdown-loader",
        options: vueMarkdown
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  }
}
