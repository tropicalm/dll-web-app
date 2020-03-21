const { getFs } = require('./../../../lib/firebase/firebase')

export default async (req, res) => {
  // const {
  //   query: { db },
  // } = req

  const data = await getFs(req.query.collection, req.query.doc)


  // console.log(data)

  // res.end(`Post: ${req.query.name}`)
  res.end.json(
    data
  );
}
