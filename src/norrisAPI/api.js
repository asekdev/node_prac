const axios = require("axios");
const constants = require("../util/consants");

exports.getQuote = async () => {
  let quote_response = await axios.get(constants.API_URL+"zz")
  .then(res => {
    return res.data.value;
  })
  .catch(err => {
    throw new Error(err)
  });

  return quote_response;
}

