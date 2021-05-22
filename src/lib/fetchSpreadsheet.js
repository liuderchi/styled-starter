import { GoogleSpreadsheet } from 'google-spreadsheet'
import sanitizeObj from './sanitizeObj'
// TODO env
import CREDENTIAL from '../../.credentials/kl-dev.json'
import DB from '../../.credentials/db.json'

const doc = new GoogleSpreadsheet(DB?.Product?.docID)

export const fetchProducts = async () => {
  await doc.useServiceAccountAuth(CREDENTIAL)
  await doc.loadInfo()
  const sheet = doc.sheetsById[DB?.Product?.sheetID]
  const rows = await sheet.getRows()

  const products =
    rows?.map((row) => {
      // note: https://theoephraim.github.io/node-google-spreadsheet/#/?id=working-with-rows
      const { _sheet, _rowNumber, _rawData, ...productFields } = row
      // we need to remove nullish fields values to avoid SSG error
      return sanitizeObj(productFields)
    }) || []

  return products
}

export const fetchAbout = async () => {
  await doc.useServiceAccountAuth(CREDENTIAL)
  await doc.loadInfo()
  const sheet = doc.sheetsById[DB?.About?.sheetID]
  const rows = await sheet.getRows()

  let aboutData = {}
  if (rows?.[0]) {
    // note: https://theoephraim.github.io/node-google-spreadsheet/#/?id=working-with-rows
    const { _sheet, _rowNumber, _rawData, ...otherFields } = rows[0]
    aboutData = otherFields
  }
  return aboutData
}
