import { useState } from 'react'
import './slider.css'

interface Slide {
  id: number;
  img: string;
  title: string;
  description: string;
}

interface Slider {
  height?: string
  width?: string
}

const slides: Slide[] = [
  {
    id: 0,
    img: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title:" The Hero In The Mountains",
    description: 'Lorem Ipsum is Lorem Ipsum Lorem'
  },
  {
    id: 1,
    img: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg',
    title:" The ideas Tree",
    description: 'Lorem Ipsum is Lorem Ipsum Lorem'
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/897271/pexels-photo-897271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title:" Jupiter in One plane",
    description: 'Lorem Ipsum is Lorem Ipsum Lorem'
  }
]

const Slider: React.FC<Slider> = ({ height, width }) => {

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
     
      <div className='slide' style={{ height, width }}>
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