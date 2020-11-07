export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null
  // remove token before pushing app
  // token:
  //   "BQB7vn309F0yVizW2lVjty87iFeNgb2vEpLDErmbCp0dN_7oIkmLDN-RYwD0R_JgoPYq3eKcnWNfikGHXBHlHIUybEDom4VNJXxEX9xkUPzt7mKNyBP5ETqjve3VsoQdxI3bbua3F1G4DxXbxYcwPYTVLdVur-c_rqd5YJA3UhlgRiDg"
};

// state = how it currently looks, action = set the user, currently playing, etc
const reducer = (state, action) => {
  // console log action and note it, this will help you debug in the future
  console.log(action);

  //   dispatch an action when the user does something i.e. set user when they log in
  switch (action.type) {
    case "SET_USER":
      //   when you receive set user action, return below..spread state to keep old but update user slice with action type
      return {
        ...state,
        user: action.user
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token
      };

    case "SET PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists
      };
    // return original state if the action above doesn't happen
    default:
      return state;
  }
};

export default reducer;
