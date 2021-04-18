export const initialState = {
  user: null,
  playlists: [],
  // discover_weekly: null,
  playing: false,
  item: null,
  // token:
  //   "BQCuy9jOSWuzVvrAdeM5NF6Xaa_YBchSDnSbrRJOSDPxQOMer6BwUp2qh07HXeIW7u5DRSDQHwEfNI0dvkbTYcQrU-25Emb9joZ7mIGlQSm4bfRntNcwVS4WxBaumOZ7t0PItIAyrCwNK-Nt1aNDCk9xSKfQG-qi9ol8gmpb6Oid1yCt",
};

const reducer = (state, action) => {
  console.log("this is action ==>", action);

  // action ==> type, [payload]

  switch (action.type) {
    case "SET_USER": // action  --> type
      return {
        ...state,
        user: action.user, // action --> [payload]
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
