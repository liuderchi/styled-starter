import App from '../../src/containers/App'
import { fetchProducts } from '../../src/lib/fetchSpreadsheet'

export const getStaticPaths = async () => {
  const products = await fetchProducts()
  return {
    // e.g. paths: [{ params: { id: '456' } }],
    paths: products?.map((p) => ({ params: { id: p.id } })),
    fallback: false, // for dev your might wanna temporarily enable
  }
}

export const getStaticProps = async (path) => {
  const { params } = path
  const products = await fetchProducts()
  const product =
    (products || []).find((p) => params?.id && p?.id === params.id) || {}

  return {
    props: {
      product,
    },
  }
}

export default (props) => {
  const { product } = props
  return (
    <App name="About" prefix="..">
      <>
        <pre style={{ paddingTop: 100 }}>
          {JSON.stringify({ props }, null, 2)}
        </pre>
        <button
          onClick={() => {
            console.log({ product })
          }}
        >
          test
        </button>
      </>
    </App>
  )
}
