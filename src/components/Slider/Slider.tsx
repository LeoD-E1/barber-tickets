import { useState } from 'react'
import './slider.css'

interface Slide {
  id: number;
  img: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 0,
    img: 'https://wallpaperaccess.com/full/2390661.jpg',
    title:" The Hero In The Mountains",
    description: 'Lorem Ipsum is Lorem Ipsum Lorem'
  },
  {
    id: 1,
    img: 'https://free4kwallpapers.com/uploads/originals/2020/12/18/autumn-dreams-wallpaper.jpg',
    title:" The ideas Tree",
    description: 'Lorem Ipsum is Lorem Ipsum Lorem'
  },
  {
    id: 2,
    img: 'https://images3.alphacoders.com/555/thumb-1920-555277.jpg',
    title:" Jupiter in One plane",
    description: 'Lorem Ipsum is Lorem Ipsum Lorem'
  }
]

const Slider = () => {

  const [slideRender, setSlideRender] = useState(0)
 
    setTimeout(() => {
      setSlideRender(slideRender +1)
      if (slideRender === 2) {
        setSlideRender(0)
      }
    }, 3000)

  const slide = slides[slideRender]
  
  return (
    <section className="slider">
     
      <div className='slide'>
        <img src={slide.img} alt={slide.title} />
        <div>
        <article className='info'>
          <h1 className='title'>{slide.title}</h1>
          <p className='description'>{slide.description}</p>
        </article>
        </div>
      </div>

    </section>
  )
}

export default Slider