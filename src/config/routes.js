import axios from 'axios'
import dotenv from 'dotenv'
//
import {
  cleanTemplateNameOf,
  getAuthedApiInstance,
  getGravityForm,
  cleanWPJson,
} from './utils'

dotenv.config()

export async function getAPIRoutes() {
  const base = process.env.API_URL

  return {
    base,
    wp: `${base}/wp/v2`,
    acf: `${base}/acf/v3`,
    sms: `${base}/sms/v1`,
    authedInstance: await getAuthedApiInstance(),
  }
}

export async function getRoutesWithData() {
  const api = await getAPIRoutes()

  const pages = await getPageRoutes({ api })

  return [...pages]
}

async function getPageRoutes({ api }) {
  try {
    const { data: pages } = await axios.get(`${api.wp}/pages`)

    return pages.map(page => {
      if (page.status === 'publish') {
        const template =
          page.template === ''
            ? 'Page'
            : (() => cleanTemplateNameOf(page.template))()

        page.title = page.title.rendered
        page.content = page.content.rendered
        page.template = template

        page = cleanWPJson(page)

        const slug = page.slug === 'home' ? '/' : `/${page.slug}`

        return {
          path: slug,
          // component: `src/screens/${template}`,
          component: `src/screens/NotFound`,
          getData: async () => ({
            ...(await handleTemplateSpecificProps({ page, api })),
          }),
        }
      }
      return {}
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(
      'There was a problem in getPageRoutes, Error: ',
      err.response ? err.response : err,
    )
    return err
  }
}

async function handleTemplateSpecificProps({ page, api }) {
  switch (page.template) {
    case 'contact': {
      return {
        ...page,
        form: await getGravityForm(api.authedInstance, 1),
      }
    }
    default:
      return page
  }
}
