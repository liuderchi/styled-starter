import * as React from 'react'
import { Div, Img, H2, P } from 'styled-system-html'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const Main = ({ product }) => {
  const images =
    product?.images
      ?.split(',')
      ?.map((url) => url.trim())
      ?.filter((url) => !!url) || []

  return (
    <Div style={{ paddingTop: 70, margin: '0 30px' }}>
      <H2>{product.title}</H2>
      <br />
      <Carousel width={'50%'} showThumbs={false} showStatus={false}>
        {images.map((imageUrl) => (
          <div key={imageUrl}>
            <img src={imageUrl} />
          </div>
        ))}
      </Carousel>
      <br />
      <P>{product.description}</P>
    </Div>
  )
}

export default Main
