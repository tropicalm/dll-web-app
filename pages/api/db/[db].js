const { getFs, writeFs } = require("./../../../lib/firebase/firestore");

export default async (req, res) => {
  const {
    query: { collection, doc },
    method,
  } = req;

  console.log(method);
  console.log(collection);
  console.log(doc);

  var data;

  switch (method) {
    case "GET":
      // Get data from your database
      data = await getFs(req.query.collection, req.query.doc);
      res.status(200).json(data);
      break;
    case "PUT":
      // Update data in your database
      data = await writeFs(req.query.collection, req.query.doc);
      res.status(200).json({ id, name: name || `User ${id}` });
      break;
    case "POST":
      // Create data in your database
      data = await writeFs(req.query.collection, req.query.doc);
      res.status(200).json({ id, name: name || `User ${id}` });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }

  // console.log(data)

  // res.end(`Post: ${req.query.name}`)
};
