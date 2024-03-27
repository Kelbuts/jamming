/*global location*/
/*eslint no-restricted-globals: ["error"]*/

const clientID = "cc33a35a08ea4f2f9f92ba131ba5fbc2";
const clientSecret = "53d868c11972452580edb41f1b89ac53";
const accessToken =
  "BQC21qdAmS1nh6pA2AJ_O_MPfqwS6Su-1ah-nsk7UOPE_hONCmvITlUoRS1rni0YOSXEsY8oKJo5dZzqdvMCJIKsr8Np8SlLd_XyljWh6Qn99NPh0KAm2XST2u2780Uc60t7KvvvT2HlCNrswfQD1s0TkfSX5eND6yafllclsw7qWBrbSw9vcEUwNZwi55JQ0uNkC8FEoqBmVDJYAOyg3SIRsPSk3kyxRhFVamrnIFuiXxu7N6HF7QXPFEdKMmil";
const apiRoot = "https://api.spotify.com/v1/";
let token;

const spotifyUrl = `https://accounts.spotify.com/authorize?scope=playlist-modify-private%20playlist-modify-public&response_type=token&client_id=${clientID}&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F`;

const Spotify = {
  init() {
    //if token in url, save it and replace url
    const params = "?" + location.href.split("#")[1];
    const urlParams = new URLSearchParams(params);
    token = urlParams.get("access_token");
    if (token != null) {
      //save token locally
      localStorage.setItem("token", token);
      //replace url
      location = location.href.split("#")[0];
    }

    //get saved token
    token = localStorage.getItem("token");
    //check token valid
    fetch(`${apiRoot}me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return data.id;
      })
      .then((userId) => {
        if (userId == null) {
          //if not valid, open spotify grant page
          location = spotifyUrl;
        }
      });
  },

  search(term) {
    if(term == '') {
      throw new Error('Invalid input')
    }
    return fetch(`${apiRoot}search?q=${term}&type=track`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data.tracks.items.map((item) => ({
          name: item.name,
          artist: item.artists[0].name,
          album: item.album.name,
          id: item.id,
          uri: item.uri,
        }));
      });
  },

  savePlaylist(playListName, playListTracks) {
    // get user id
    return fetch(`${apiRoot}me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return data.id;
      })
      .then((userId) => {
        // create new playlist
        fetch(`${apiRoot}users/${userId}/playlists`, {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: JSON.stringify({ name: playListName, public: false }),
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            return data.id;
          })
          .then((playListId) => {
            // set tracks
            fetch(`${apiRoot}playlists/${playListId}/tracks`, {
              method: "POST",
              headers: { Authorization: `Bearer ${token}` },
              body: JSON.stringify({
                uris: playListTracks.map((item) => item.uri),
              }),
            });
          });
      });
  },
};

export default Spotify;
