const axios = require("axios");
const constants = require("../util/consants");

exports.getQuote = async () => {
  let quote_response = await axios.get(constants.API_URL)
  .then((res) => {
    //console.log(res);
    return res.data.value;
  })
  .catch((err) => {
    //console.log(err);
  });
  return quote_response;
}

