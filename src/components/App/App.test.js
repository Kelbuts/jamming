import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import { render, screen, fireEvent } from "@testing-library/react";
import Spotify from "../../util/Spotify";

xit("runs the App", () => {
  const div = document.createElement("div");
  const root = ReactDOM.createRoot(div);
  act(() => {
    root.render(<App />);
  });
});

xit("render App", () => {
  render(<App />);
  expect(screen.getByText("SEARCH")).toBeInTheDocument();
});

xit("searches without crashing", () => {
  render(<App />);
  const button = document.querySelector("#search-btn");
  fireEvent.click(button);
});

it("updates search term on input", () => {
  const spy = jest.spyOn(Spotify, "search");

  let app = render(<App />);
  const button = document.querySelector("#search-btn");
  const input = document.querySelector("#search-input");
  fireEvent.keyDown(input, { key: "A", code: "KeyA" });
  fireEvent.click(button);
  expect(spy).toHaveBeenCalled();
});
