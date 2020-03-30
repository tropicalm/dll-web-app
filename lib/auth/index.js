import Cookie from "js-cookie";
import admin from "../firebase/admin";

export async function login(token) {
  return admin
    .auth()
    .verifyIdToken(token)
    .catch((error) => {
      throw error;
    });
}
