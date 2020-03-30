import admin from "../../lib/firebase/admin";

// Set session expiration to 5 days.
const expiresIn = 60 * 60 * 24 * 5 * 1000;

const handler = async (req, res) => {
  if (!req.body) {
    return res.status(400);
  }

  const { token } = req.body;

  try {
    const decodedToken = await admin
      .auth()
      .verifyIdToken(token)
      .catch((error) => {
        throw error;
      });

    const sessionCookie = await admin
      .auth()
      .createSessionCookie(token, { expiresIn })
      .catch((error) => {
        throw error;
      });
    res.setHeader(
      "Set-Cookie",
      `session=${sessionCookie}; path=/; Max-Age=${expiresIn}; HttpOnly;`
    );

    return res.status(200).json({ status: true, decodedToken });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default handler;
