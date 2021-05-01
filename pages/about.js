import { GoogleSpreadsheet } from 'google-spreadsheet'

import About from '../src/pages/About'
import App from '../src/containers/App'

// TODO env
import CREDENTIAL from '../.credentials/kl-dev.json'
import DB from '../.credentials/db.json'

export const getStaticProps = async () => {
  const doc = new GoogleSpreadsheet(DB.docID)
  await doc.useServiceAccountAuth(CREDENTIAL)
  await doc.loadInfo()
  const sheet = doc.sheetsById[DB.sheetID]
  const rows = await sheet.getRows()

  let aboutData = {}
  if (rows?.[0]) {
    // note: https://theoephraim.github.io/node-google-spreadsheet/#/?id=working-with-rows
    const { _sheet, _rowNumber, _rawData, ...otherFields } = rows[0]
    aboutData = otherFields
  }

  return {
    props: {
      about: {
        ...aboutData,
      },
    },
  }
}

export default (props) => {
  return (
    <App name="About" prefix="..">
      <>
        <About />
        <pre>{JSON.stringify({ props }, null, 2)}</pre>
      </>
    </App>
  )
}
