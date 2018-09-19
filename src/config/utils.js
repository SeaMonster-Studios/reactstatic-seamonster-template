import { pascal } from "to-case"
import axios from "axios"

export function removeKeyNamespace(object, namespace) {
  const objectFiltered = {}

  Object.keys(object).map((key) => {
    const keySplit = key.split(namespace)
    const newKey = keySplit.length > 1 ? keySplit[1] : key

    objectFiltered[newKey] = object[key]
    return key
  })

  return objectFiltered
}

export function cleanTemplateNameOf(templateName) {
  if (templateName === "") return ""
  const templateFiltered = templateName.split(".php")[0]
  return pascal(templateFiltered.split("templates/")[1])
}

export async function getAuthedApiInstance() {
  try {
    const instance = axios.create({ baseURL: process.env.API_URL })

    const {
      data: { token },
    } = await instance.post(`${process.env.API_URL}/jwt-auth/v1/token`, {
      username: process.env.API_USER,
      password: process.env.API_PASSWORD,
    })

    instance.defaults.headers.common.Authorization = `Bearer ${token}`

    return instance
  } catch (error) {
    throw error
  }
}

export async function getGravityForm(authedApiInstance, id) {
  try {
    const {
      data: { title, fields, description, button, is_active },
    } = await authedApiInstance.get(`${process.env.API_URL}/gf/v2/forms/${id}`)

    const formData = {
      title,
      fields,
      description,
      button,
      id,
    }

    return parseInt(is_active) // (is a string), PHP – 1 is true, 0 is false
      ? formData
      : `Form with id, ${id}, is not currently active. Please activate it within WordPress if you wish to use it.`
  } catch (error) {
    throw error
  }
}

export async function handleSlugSpecificProps({ page, api }) {
  switch (page.slug) {
    case "about": {
      return {
        people: await getPeople(api),
      }
    }
    default:
      return {}
  }
}

export async function handleTemplateSpecificProps({ page, api }) {
  switch (page.template) {
    // case 'contact': {
    //   return {
    //     ...page,
    //     form: await getGravityForm(api.authedInstance, 1),
    //   }
    // }
    default:
      return {}
  }
}

export function buildPagesWithChildren(pages, newPages = [], orphans = []) {
  pages.map((page) => {
    if (page.path === "a-place-to-belong") {
      // console.log('a-place-to-belong', page.id)
    }

    if (page.path === "community-groups") {
      // console.log('community-groups', page.id)
    }

    if (page.parent > 0) {
      const response = getPageWithAllDecendents(newPages, page)
      response.found ? (newPages = response.newPages) : orphans.push(page)
    } else {
      newPages.push(page)
    }
  })

  newPages = findParentsOfOrphans(newPages, orphans) // orphans occur when a child page is created before it's parent page within WordPress

  return newPages
}

function getPageWithAllDecendents(newPages, page, found = false) {
  newPages.map((parent) => {
    if (parent.id === page.parent) {
      found = true
      parent.children.push(page)
    } else {
      return getPageWithAllDecendents(parent.children, page, found)
    }
  })
  return { newPages, found }
}

function findParentsOfOrphans(newPages, orphans, retries = 5) {
  if (retries > 0) {
    orphans.map((page, i) => {
      const { newPages: pages, found } = getPageWithAllDecendents(
        newPages,
        page,
      )
      if (found) {
        newPages = pages
        orphans.splice(i, 1)
      } else {
        retries -= 1
      }
    })
    if (orphans.length) findParentsOfOrphans(newPages, orphans, retries)
  }
  return newPages
}

export function cleanWPJson(post) {
  // Remove WP data we're not using, can always add later.
  // We don't want to add route data that isn't used
  const removeProperties = [
    "author",
    "comment_status",
    "date",
    "guid",
    "history",
    "link",
    "menu_order",
    "modified",
    "modified_gmt",
    "parent",
    "ping_status",
    "type",
    "_links",
  ]

  for (let i = 0; i <= removeProperties.length; i += 1) {
    const property = removeProperties[i]
    if (property && property in post) delete post[property]
  }

  if ("acf" in post) {
    post = {
      ...post,
      ...post.acf,
    }
    delete post.acf
  }

  return post
}
