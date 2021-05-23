import { GoogleSpreadsheet } from 'google-spreadsheet'
import sanitizeObj from './sanitizeObj'

const CREDENTIAL = JSON.parse(process.env.GL_CREDENTIAL || "{}")
const doc = new GoogleSpreadsheet(process.env.DB_SS_DOC_ID)

export const fetchProducts = async () => {
  await doc.useServiceAccountAuth(CREDENTIAL)
  await doc.loadInfo()
  const sheet = doc.sheetsById[process.env.DB_SS_PRODUCT_ID]

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
  const sheet = doc.sheetsById[process.env.DB_SS_ABOUT_ID]
  const rows = await sheet.getRows()

  let aboutData = {}
  if (rows?.[0]) {
    // note: https://theoephraim.github.io/node-google-spreadsheet/#/?id=working-with-rows
    const { _sheet, _rowNumber, _rawData, ...otherFields } = rows[0]
    aboutData = otherFields
  }
  return aboutData
}
