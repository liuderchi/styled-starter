import App from '../../src/containers/App'
import { fetchProducts } from '../../src/lib/fetchSpreadsheet'

export const getStaticProps = async (path) => {
  const products = await fetchProducts()
  return {
    props: {
      products,
    },
  }
}

export default (props) => {
  const { products } = props
  return (
    <App prefix="..">
      <>
        <pre style={{ paddingTop: 100 }}>
          {JSON.stringify({ props }, null, 2)}
        </pre>
        <button
          onClick={() => {
            console.log({ products })
          }}
        >
          test
        </button>
      </>
    </App>
  )
}
