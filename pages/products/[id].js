import { GoogleSpreadsheet } from 'google-spreadsheet'

import App from '../../src/containers/App'

// TODO env
import CREDENTIAL from '../../.credentials/kl-dev.json'
import DB from '../../.credentials/db.json'

const fetchProducts = async () => {
  const doc = new GoogleSpreadsheet(DB?.Product?.docID)
  await doc.useServiceAccountAuth(CREDENTIAL)
  await doc.loadInfo()
  const sheet = doc.sheetsById[DB?.Product?.sheetID]
  const rows = await sheet.getRows()

  const products =
    rows?.map((row) => {
      // note: https://theoephraim.github.io/node-google-spreadsheet/#/?id=working-with-rows
      const { _sheet, _rowNumber, _rawData, ...productFields } = row
      return productFields
    }) || []

  return products
}

export const getStaticPaths = async () => {
  const products = await fetchProducts()
  return {
    // e.g. paths: [{ params: { id: '456' } }],
    paths: products?.map((p) => ({ params: { id: p.id } })),
    fallback: false, // for dev your might wanna temporarily enable
  }
}

export const getStaticProps = async ({ params }) => {
  const products = await fetchProducts()
  const product =
    (products || []).find((p) => params?.id && p.id === params.id) || {}

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
