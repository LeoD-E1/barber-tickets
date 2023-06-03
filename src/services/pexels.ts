import { createClient } from "pexels";
interface Search {
  query: string, 
  per_page: number
}

const { VITE_APP_PEXELS_API_KEY } = import.meta.env

const pexelsClient = createClient(VITE_APP_PEXELS_API_KEY)

export const searchForPhotos = async (obj: Search ) => {
  try {
    return pexelsClient.photos.search({query: obj.query, per_page: obj.per_page})
  } catch (error) {
    console.log(error)
  }
}