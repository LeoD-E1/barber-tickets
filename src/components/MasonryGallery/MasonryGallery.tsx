import { useEffect, useState } from 'react'
import { searchForPhotos } from '../../services/pexels'
import './masonry.css'
import MasonryItem from './MasonryItem'
import { PhotosWithTotalResults, Photo, ErrorResponse } from 'pexels'

const MasonryGallery = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [images, setImages] = useState<any>()

  const getImages = async() => {
    try {
      const results: PhotosWithTotalResults | ErrorResponse | undefined = await searchForPhotos({ query: 'barber shop', per_page: 7})
      results && setImages(results)
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  } 

  useEffect(() => {
   getImages()
  }, [])

  return (
    <main className="container">

      <div className="grid-wrapper">
        {
          images?.photos.map((item: any) => (
            <MasonryItem item={item}/>
          ))
        }
       
      </div>
    </main>
  )
}

export default MasonryGallery