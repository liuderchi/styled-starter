import * as React from 'react'
import styled from 'styled-components'
import { Div, Img, H2, P } from 'styled-system-html'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

const SpecWrap = styled.div`
  table {
    width: 100%;
    text-align: center;
  }
`

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
      <P>
        {product.qty && `Quantity: ${product.qty}. `}
        {product.updateAt && <small>(updated at: {product.updateAt})</small>}
      </P>
      <P>{product.description}</P>
      <SpecWrap>
        <ReactMarkdown remarkPlugins={[gfm]} children={product.spec} />
      </SpecWrap>
    </Div>
  )
}

export default Main
