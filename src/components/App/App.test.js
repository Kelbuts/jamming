import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import { render, screen, fireEvent } from "@testing-library/react";
import Spotify from "../../util/Spotify";

it("runs the App", () => {
  const div = document.createElement("div");
  const root = ReactDOM.createRoot(div);
  act(() => {
    root.render(<App />);
  });
});

it("render App", () => {
  render(<App />);
  expect(screen.getByText("SEARCH")).toBeInTheDocument();
});

it("searches without crashing", () => {
  render(<App />);
  const button = document.querySelector("#search-btn");
  fireEvent.click(button);
});

it("calls search with typed input", () => {
  const spy = jest.spyOn(Spotify, "search");

  let app = render(<App />);
  const button = document.getElementById("search-btn");
  const input = document.getElementById("search-input");
  const randomText = "kjhgvssdsf";
  fireEvent.change(input, {
    target: { value: randomText },
  });
  fireEvent.click(button);
  expect(spy).toHaveBeenCalled();
  expect(spy.mock.calls[0][0]).toBe(randomText)
});
