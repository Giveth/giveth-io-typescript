import { createClient } from 'contentful'

export async function fetchEntries({ contentType }: any) {
  try {
    const space = process.env.CONTENTFUL_SPACE_ID as string
    const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN as string

    const client = createClient({
      space: space, // ID of a Compose-compatible space to be used \
      accessToken: accessToken // delivery API key for the space \
    })
    const entries = await client.getEntries({
      content_type: contentType
    })
    if (entries.items) return entries.items
  } catch (error) {
    return null
  }
}
