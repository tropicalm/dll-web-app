export default async function handler(req, res) {
  res.setHeader("Set-Cookie", `session=; path=/; HttpOnly;`);
  return res.status(200).end();
}
