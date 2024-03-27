import Spotify from "./Spotify";

it("craches with empty search ", () => {
  expect(() => {Spotify.search('')}).toThrow('Invalid input');
  });