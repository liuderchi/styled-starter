import styled from 'styled-components'
import { Div, Img, H3 } from 'styled-system-html'

const AnchorWrap = styled.a`
  text-decoration: none;
`

export default (props) => {
  // cannot SSG render nextjs Link component
  return (
    <AnchorWrap href={props.href}>
      <Div
        bg={props.bg || 'white'}
        css={{
          display: 'flex',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
        borderRadius="8px"
        borderColor="rgba(0,0,0,.1)"
        border="1px solid"
      >
        {props.imageSrc && (
          <Img
            style={{
              display: 'block',
              maxWidth: '100px',
              maxHeight: '100px',
              borderBottomRightRadius: '8px',
            }}
            m={0}
            w={1}
            src={props.imageSrc}
            alt={props.imageAlt}
          />
        )}

        <Div p={3}>
          {props.title && (
            <H3 color={props.color || 'base'} pb={2}>
              {props.title}
            </H3>
          )}
          {props.children}
        </Div>
      </Div>
    </AnchorWrap>
  )
}
