export const getAllCharacters = () => (dispatch) => {
    return fetch(`https://www.breakingbadapi.com/api/characters`)
      .then((r) => r.json())
      .then((json) => {
        dispatch({ type: "GET_ALL_CHARACTERS", payload: json });
      });
  };


// export const getAllCharacters = () => (dispatch) => {
//   return axios.get(`https://www.breakingbadapi.com/api/characters`)
//     .then((json) => {
//       dispatch({ type: "GET_ALL_CHARACTERS", payload: json.data });
//     });
// };
