import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

// just an instance to reuse shell from SpotifyApi
const spotify = new SpotifyWebApi();

function App() {
  // use user from data layer
  const [{ user, token }, dispatch] = useDataLayerValue();

  // run code based on a given condition
  useEffect(() => {
    // code ...;
    const hash = getTokenFromUrl();
    // hide access token
    window.location.hash = "";
    // store token inside of state
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      });

      // below will give access token to react and Spotify API
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log(user);

        dispatch({
          type: "SET_USER",
          user: user
        });
      });
      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        });
      });
      spotify.getPlaylist("37i9dQZF1EFuFlWnkZrhmF").then(response =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response
        })
      );
    }

    console.log("I HAVE A TOKEN", token);
  }, []);

  console.log("USER", user);
  console.log("TOKEN", token);
  //  if we have a token, render the player page, if not, go to Login
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
