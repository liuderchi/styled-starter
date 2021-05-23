import App from '../../src/containers/App'
import { fetchProducts } from '../../src/lib/fetchSpreadsheet'
import { List } from '../../src/pages/products/Main'

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
      <List products={products} />
    </App>
  )
}
