import { Box } from 'grid-styled'
import { Div, Span, A } from 'styled-system-html'
import Link from 'next/link'

console.log('process.env.BACKEND_URL ' + process.env.BACKEND_URL)

export default (props) => (
  <Box>
    <Div width={props.url === '/' ? [1, 'auto'] : 'auto'} p={[2, 3]}>
      <Link href={process.env.BACKEND_URL + props.url}>
        <A
          color="white"
          style={{
            textDecoration: 'none',
            ...(!props.isCurrent && { opacity: 0.5 }),
          }}
          href={props.url}
        >
          {props.children}
        </A>
      </Link>
    </Div>
  </Box>
)
