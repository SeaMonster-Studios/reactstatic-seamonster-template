import axios from 'axios'
import dotenv from 'dotenv'
//
import {
  cleanTemplateNameOf,
  // getAuthedApiInstance,
  buildPagesWithChildren,
  cleanWPJson,
  handleSlugSpecificProps,
  handleTemplateSpecificProps,
} from './utils'

dotenv.config()

export async function getAPIRoutes() {
  const base = process.env.API_URL

  return {
    base,
    wp: `${base}/wp/v2`,
    acf: `${base}/acf/v3`,
    sms: `${base}/sms/v1`,
    // authedInstance: await getAuthedApiInstance(),
  }
}

export async function getRoutesWithData() {
  const api = await getAPIRoutes()

  const pages = await getPageRoutes({ api })

  return [...pages]
}

async function getPageRoutes({ api }) {
  try {
    const { data } = await axios.get(`${api.wp}/pages?per_page=100`)

    let updatedData = data
      .reverse()
      .map(item => {
        if (item.status === 'publish') {
          const page = {
            ...cleanWPJson(item),
            template:
              item.template === ''
                ? 'Page'
                : (() => cleanTemplateNameOf(item.template))(),
            api,
            title: item.title.rendered,
            content: item.content.rendered,
          }

          return {
            path: item.slug === 'home' ? '/' : item.slug,
            component: `src/screens/${page.template}`,
            children: [],
            id: page.id,
            parent: page.parent,
            getData: async () => ({
              ...page,
              ...(await handleSlugSpecificProps({ page, api })),
              ...(await handleTemplateSpecificProps({ page, api })),
            }),
          }
        }
        return undefined
      })
      .filter(item => item !== undefined)

    return buildPagesWithChildren(updatedData)
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(
      'There was a problem in getPageRoutes, Error: ',
      err.response ? err.response : err,
    )
    return err
  }
}
