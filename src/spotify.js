// we send the user to spotify, and spotify will take care of the login
export const authEndpoint = "https://accounts.spotify.com/authorize";

// the URi we filled in the spotify => and after login it will redirect to this 'redirectUri'
const redirectUri = "https://spotify-clone-1f05b.web.app/";

// Client Id we copied on Spotify
const clientId = "d7b32dcb76e64b9d8203760466bcd21f";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
