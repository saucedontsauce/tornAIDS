import React from "react";
import ReactDOM from "react-dom/client";
import './util/loadCSS.js';
const root = document.getElementById("root");
import pages from './util/pages.jsx';
import Root from './components/Root.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import StateContextProvider from "./context/stateProvider.jsx";

let child_count = 0
const children = Object.keys(pages).map((page) => {
  var child = {
    Component: pages[page].Component,
  }
  if (child_count === 0) {
    child.index = true
  }
  if (pages[page].link && child_count !== 0) {
    child.path = "/" + pages[page].link
  }
  child_count++
  return child
});

let router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: children
  },
]);

ReactDOM.createRoot(root).render(
  <StateContextProvider>
    <RouterProvider router={router} />
  </StateContextProvider>
);