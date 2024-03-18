const clientID = "cc33a35a08ea4f2f9f92ba131ba5fbc2";
const clientSecret = "53d868c11972452580edb41f1b89ac53";
const accessToken =
  "BQASFnNuYGs4RYsKWrEiZ-7vbsRYgdJvG_WdtukY43AeTNIGDyXNqCOOv5P-8-nxrkmFItHRbHaYNUg4DK4l9yaI0iy2JroTSv1_ZuMeTBDqgnVGq0D4S6O4rhdi1AQlQWQeW-9GMwhVi2SwUcVwAy-8WKE-cAn0Z2K1TPH7xzKA-2qFBYPyEOL3SItZr7Lfj7Y";
const apiRoot = "https://api.spotify.com/v1/";

// 'https://accounts.spotify.com/authorize?response_type=token&client_id=cc33a35a08ea4f2f9f92ba131ba5fbc2&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F'

const Spotify = {
  search(term) {
    console.log(term);
    fetch(`${apiRoot}search?q=${term}&type=track`, {headers: {Authorization: `Bearer ${accessToken}`}})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  },
};

export default Spotify;
