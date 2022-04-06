const initialState = {
  allCharacters: [],
  characters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_CHARACTERS":
      return {
        ...state,
        allCharacters: action.payload,
      };
    default:
      return {
        ...state
      };
  }
};

export default rootReducer;