const sanitizeObj = (obj = {}) => {
  const res = {}
  Object.entries(obj).forEach(([k, v]) => {
    if (v) {
      res[k] = v
    }
  })
  return res
}

export default sanitizeObj
