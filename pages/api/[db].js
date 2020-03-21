export default (req, res) => {
  const {
    query: { db },
  } = req

  res.end(`Post: ${db}`)
}
