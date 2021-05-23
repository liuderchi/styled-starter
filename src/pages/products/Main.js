import * as React from 'react'
import styled from 'styled-components'
import { Div, Img, H2, H3, P } from 'styled-system-html'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import _groupBy from 'lodash/groupBy'

import Card from '../../../src/components/Card'

const ProductGroupWrap = styled.div`
  margin: 10px 0;
  > a + a {
    & > div {
      margin-top: 20px;
    }
  }
`

const CarouselWrap = styled.div`
  .carousel.carousel-slider {
    max-width: 300px;
  }
`

const SpecWrap = styled.div`
  overflow: scroll;
  table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
  }
  table,
  th,
  td {
    border: 1px solid grey;
  }
`

const Main = ({ product }) => {
  const images =
    product?.images
      ?.split(',')
      ?.map((url) => url.trim())
      ?.filter((url) => !!url) || []

  return (
    <Div css={{ paddingTop: '70px', margin: '0 30px 30px' }}>
      <H2>{product.title}</H2>
      <br />
      <CarouselWrap>
        <Carousel width={'100%'} showThumbs={false} showStatus={false}>
          {images.map((imageUrl) => (
            <div key={imageUrl}>
              <img src={imageUrl} />
            </div>
          ))}
        </Carousel>
      </CarouselWrap>
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

export const List = ({ products = [] }) => {
  const productGroups = _groupBy(products, (p) => p.group || 'Others') || {}

  return (
    <Div css={{ paddingTop: '70px', margin: '0 30px' }}>
      {Object.entries(productGroups).map(([group, products]) => {
        return (
          <ProductGroupWrap>
            <H3 css={{ margin: '20px 0' }}>{group}</H3>
            {products.map((product) => {
              return (
                <Card
                  title={product.title}
                  href={`products/${product.id}`}
                  imageSrc={
                    product.images?.split(',')?.[0] ||
                    `https://via.placeholder.com/100?text=${product.title}`
                  }
                ></Card>
              )
            })}
          </ProductGroupWrap>
        )
      })}
    </Div>
  )
}

export default Main
