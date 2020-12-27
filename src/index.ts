import * as functions from "firebase-functions";

export const checkReqParams = functions.https.onRequest((req, res) => {
  res.status(200).send(req.params);
});
