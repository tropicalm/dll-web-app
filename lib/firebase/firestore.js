const admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      project_id: process.env.FIREBASE_PROJECT_ID,
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  });
}

const db = admin.firestore();

/**
 * Get data for shop
 * @param {*} app app collection
 * @param {*} shop shop
 */

const getFs = (app, shop) => {
  const docRef = db.collection(app).doc(shop);
  const getDoc = docRef
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return false;
      }
      return doc.data();
    })
    .catch((err) => {
      console.log("Error getting document", err);
    });

  return getDoc;
};

/**
 * Gett Application settings from Firestore
 * @param {*} app name of app
 */

const getSettings = (app) => {
  const docRef = db.collection("settings").doc(app);
  const getDoc = docRef
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return console.log("No such document!");
      }

      // return document data
      return doc.data();
    })
    .catch((err) => {
      console.log("Error getting document", err);
    });

  return getDoc;
};

/**
 * Delete Shop
 * target => COLLECTION > SHOP
 * @param {*} app
 * @param {*} shop
 */

const deleteFs = (app, shop) => {
  const deleteDoc = db.collection(app).doc(shop).delete();

  return deleteDoc;
};

/**
 * Write to Firebase
 * @param {string} app
 * @param {string} shop
 * @param {any} data
 *
 */
const writeFs = (app, shop, data) => {
  const docRef = db.collection(app).doc(shop);
  const writeData = docRef.update(data, { merge: false });

  return writeData;
};

module.exports.getFs = getFs;
module.exports.writeFs = writeFs;
module.exports.deleteFs = deleteFs;
module.exports.getSettings = getSettings;
module.exports.db = db;
