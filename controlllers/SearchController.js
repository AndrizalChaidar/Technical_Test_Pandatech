const axios = require("axios");
const LanguageDetect = require("languagedetect");

class SearchController {
  static async getAuth() {
    try {
      const clientID = process.env.CLIENT_ID;
      const clientSecret = process.env.CLIENT_SECRET;
      const { data } = await axios.post(
        "https://accounts.spotify.com/api/token",
        "grant_type=client_credentials",
        {
          headers: {
            Authorization:
              "Basic " +
              Buffer.from(clientID + ":" + clientSecret).toString("base64"),
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return data;
    } catch (e) {
      throw e;
    }
  }
  static async search(req, res, next) {
    try {
      let { name } = req.query;
      const lngDetector = new LanguageDetect();
      const findLanguage = name && lngDetector.detect(name);
      const isEnglish =
        findLanguage && findLanguage.some((lang) => lang[0] === "english");
      if (!isEnglish) {
        throw new Error("Please enter an English word", { cause: 400 });
      }
      name = name.split(" ").join("+");
      const { access_token } = await SearchController.getAuth();
      const spotifyURL = `https://api.spotify.com/v1/search?q=name%3A${name}&type=track%2Cplaylist&limit=10`;
      const { data } = await axios.get(spotifyURL, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      res.status(200).json(data);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = SearchController;
