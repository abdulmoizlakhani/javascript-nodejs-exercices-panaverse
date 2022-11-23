import axios from "axios";
import dotEnv from "dotenv";

dotEnv.config();

axios
  .get("https://quotes15.p.rapidapi.com/quotes/random/", {
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
      "accept-encoding": "*",
    },
  })
  .then(function (response) {
    const { content, originator } = response.data;
    const famous_person = originator.name;
    const message = `${famous_person} once said, "${content}"`;
    console.log("Quote: ", message);
  })
  .catch(function (error) {
    console.error(error);
  });
