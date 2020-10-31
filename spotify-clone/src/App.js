import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

// just an instance to reuse shell from SpotifyApi
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  // run code based on a given condition
  useEffect(() => {
    // code ...;
    const hash = getTokenFromUrl();
    // hide access token
    window.location.hash = "";
    // store token inside of state
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      // below will give access token to react and Spotify API
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log(user);
      });
    }

    console.log("I HAVE A TOKEN", token);
  }, []);

  return <div className="app">{token ? <h1>logged in</h1> : <Login />}</div>;
}

export default App;
