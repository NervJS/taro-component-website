import Vue from "vue"
import Router from "vue-router"

import NavConfig from "./nav"

Vue.use(Router)

function regeisterRoute(navConfig) {
  const rootRouters = {}

  Object.keys(navConfig).forEach(lang => {
    const pageNavs = navConfig[lang]

    for (const value of Object.values(pageNavs)) {
      Object.values(value).forEach(nav => {
        const { name, groups, items } = nav
        const key = `${name}-${lang}`
        rootRouters[key] = rootRouters[key] || addRootRoute(name, lang)

        if (groups) {
          groups.forEach(group => {
            group.items.forEach(item => {
              addRoute(name, lang, item)
            })
          })
        } else if (items) {
          items.forEach(item => {
            addRoute(name, lang, item)
          })
        }
      })
    }
  })

  function addRoute(name, lang, item) {
    const key = `${name}-${lang}`
    let simpleName = item.name.toLowerCase()
    let pathName = simpleName
    if (name == "Docs") {
      pathName = simpleName.split("_")[1]
    }
    rootRouters[key].children.push({
      name: pathName,
      path: pathName,
      component: require(`./markdown/${lang}/${simpleName}.md`).default
    })
  }

  function addRootRoute(name, lang) {
    return {
      path: `/${lang}/${name.toLowerCase()}`,
      component: require(`./views/${name.toLowerCase()}${
        lang === "zh" ? "" : `-${lang}`
      }.vue`).default,
      children: []
    }
  }

  return Object.values(rootRouters)
}

let routes = regeisterRoute(NavConfig)

routes = routes.concat([
  {
    path: "/zh",
    name: "Home",
    component: require("./views/index.vue").default
  },
  {
    path: "*",
    redirect: { name: "Home" }
  }
])

routes.forEach(page => {
  switch (page.path) {
    case "/zh/docs":
      page.children.push({
        path: "",
        name: "Docs",
        redirect: { name: page.children[0].name }
      })
      break
  }
})

export default new Router({
  routes: routes
})
