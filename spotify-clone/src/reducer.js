export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null
};

// state = how it currently looks, action = set the user, currently playing, etc
const reducer = (state, action) => {
  // console log action and note it
  console.log(action);

  //   dispatch an action when the user does something i.e. set user when they log in
  switch (action.type) {
    case "SET_USER":
      //   when you receive set user action, return below..spread state to keep old but give new state
      return {
        ...state,
        user: action.user
      };
    // return original state if the action above doesn't happen
    default:
      return state;
  }
};

export default reducer;
