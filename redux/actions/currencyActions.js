import axios from "axios";
export const SET_CURRENCY = "SET_CURRENCY";

export const setCurrency = currencyName => {
  return dispatch => {
    axios
      .get(
        `https://prime.exchangerate-api.com/v5/2bf882d26b2ee7ab8f46215f/latest/AED`
      )
      .then(response => {
        const rates = response.data.conversion_rates;
        let currencyRate = 0;
        for (const rate in rates) {
          if (rate === currencyName) {
            currencyRate = rates[rate];
          }
        }
        dispatch({
          type: SET_CURRENCY,
          payload: { currencyName, currencyRate }
        });
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  };
};
